import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import { serpentinePath } from '~/utils/serpentine'

/**
 * Smooth scroll (Lenis) + animations au scroll (GSAP ScrollTrigger).
 * - [data-reveal] : apparition en fondu/translation à l'entrée du viewport
 * - [data-depth] (hero) et [data-parallax] (réalisations) : léger décalage au défilement
 * - [data-count] : compteurs qui montent
 * - carte de la zone d'intervention : les trajets depuis Mulhouse se dessinent
 * - [data-timeline] (Mon parcours) : la serpentine se dessine, un point la parcourt, les étapes s'allument
 * - prefers-reduced-motion : aucun mouvement, états finaux directs (la frise reste fonctionnelle)
 */
export default defineNuxtPlugin((nuxtApp) => {
  gsap.registerPlugin(ScrollTrigger)

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  let lenis: Lenis | null = null
  let snakeObserver: ResizeObserver | null = null
  if (!reduced) {
    lenis = new Lenis({ lerp: 0.12, anchors: { offset: -88 } })
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add(time => lenis!.raf(time * 1000))
    gsap.ticker.lagSmoothing(0)
  }

  function setupReveals() {
    gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
      gsap.fromTo(el,
        { opacity: 0, y: 28 },
        {
          opacity: 1, y: 0, duration: .9, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        })
    })

    // hero : chaque capture glisse à sa vitesse
    gsap.utils.toArray<HTMLElement>('[data-depth]').forEach((el) => {
      const depth = Number(el.dataset.depth) || .1
      gsap.to(el, {
        yPercent: -depth * 100, ease: 'none',
        scrollTrigger: { trigger: el.closest('section') || el, start: 'top top', end: 'bottom top', scrub: true },
      })
    })

    // réalisations : la capture remonte un peu plus vite que le texte
    gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
      gsap.fromTo(el, { y: 60 }, {
        y: -30, ease: 'none',
        scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
      })
    })

    // compteurs
    gsap.utils.toArray<HTMLElement>('[data-count]').forEach((el) => {
      const to = Number(el.dataset.count)
      const obj = { v: 0 }
      gsap.to(obj, {
        v: to, duration: 1.4, ease: 'power2.out', snap: { v: 1 },
        onUpdate: () => { el.textContent = String(obj.v) },
        scrollTrigger: { trigger: el, start: 'top 92%', once: true },
      })
    })

    // carte de la zone : trajets puis villes
    const map = document.querySelector('.zm')
    if (map) {
      const routes = map.querySelectorAll<SVGLineElement>('.routes line')
      routes.forEach((l) => {
        const len = Math.hypot(
          Number(l.getAttribute('x2')) - Number(l.getAttribute('x1')),
          Number(l.getAttribute('y2')) - Number(l.getAttribute('y1')),
        )
        l.style.strokeDasharray = `${len}`
        l.style.strokeDashoffset = `${len}`
      })
      gsap.timeline({ scrollTrigger: { trigger: map, start: 'top 75%', once: true } })
        .fromTo(map.querySelector('.home'), { opacity: 0, scale: .6, transformOrigin: 'center' }, { opacity: 1, scale: 1, duration: .5, ease: 'back.out(2)' })
        .to(routes, { strokeDashoffset: 0, duration: .9, ease: 'power2.inOut', stagger: .07 }, '-=.1')
        .fromTo(map.querySelectorAll('.city'), { opacity: 0 }, { opacity: 1, duration: .4, stagger: .07 }, '-=.9')
        // on rend les pointillés une fois dessinés
        .set(routes, { strokeDasharray: '3 4', strokeDashoffset: 0 })
    }
  }

  /**
   * Frise du parcours : la serpentine se dessine au fil du défilement, un point la parcourt,
   * et chaque étape s'allume quand la ligne l'atteint. En mouvement réduit : ligne entière, tout allumé.
   */
  function setupTimeline() {
    snakeObserver?.disconnect()
    snakeObserver = null
    const snake = document.querySelector<HTMLElement>('[data-timeline] .snake')
    if (!snake) return
    const base = snake.querySelector<SVGPathElement>('.snake-base')
    const draw = snake.querySelector<SVGPathElement>('.snake-draw')
    const head = snake.querySelector<SVGCircleElement>('.snake-head')
    if (!base || !draw || !head) return
    const items = gsap.utils.toArray<HTMLElement>('.tl-item', snake)
    const dots = items.map(i => i.querySelector<HTMLElement>('.tl-dot')!)

    let len = 0
    let dotYs: number[] = []
    const state = { p: reduced ? 1 : 0 }

    function build() {
      const d = serpentinePath(snake!)
      base!.setAttribute('d', d)
      draw!.setAttribute('d', d)
      len = draw!.getTotalLength()
      const top = snake!.getBoundingClientRect().top
      dotYs = dots.map((dot) => {
        const r = dot.getBoundingClientRect()
        return r.top + r.height / 2 - top
      })
    }

    function render() {
      const at = len * state.p
      draw!.style.strokeDasharray = `${len} ${len}`
      draw!.style.strokeDashoffset = `${len - at}`
      const pt = draw!.getPointAtLength(at)
      head!.setAttribute('cx', `${pt.x}`)
      head!.setAttribute('cy', `${pt.y}`)
      head!.style.opacity = state.p > 0.002 && state.p < 0.998 ? '1' : '0'
      // étapes atteintes par la tête de la serpentine ; la dernière atteinte est l'active
      let last = -1
      dotYs.forEach((y, i) => { if (y <= pt.y + 1) last = i })
      items.forEach((item, i) => {
        item.classList.toggle('passed', i < last || (reduced && i <= last))
        item.classList.toggle('active', !reduced && i === last)
      })
    }

    build()
    render()
    snake.classList.add('has-snake')

    if (!reduced) {
      gsap.to(state, {
        p: 1, ease: 'none', onUpdate: render,
        scrollTrigger: { trigger: snake, start: 'top 62%', end: 'bottom 62%', scrub: .5 },
      })

      const wide = window.matchMedia('(min-width: 901px)').matches
      items.forEach((item, i) => {
        // bureau : les cartes de gauche arrivent de la gauche, celles de droite de la droite
        const fromX = wide && i % 2 === 0 ? -56 : 56
        gsap.fromTo(item.querySelector('.tl-card'), { opacity: 0, x: fromX }, {
          opacity: 1, x: 0, duration: .9, ease: 'power3.out',
          scrollTrigger: { trigger: item, start: 'top 85%', once: true },
        })
        gsap.fromTo(item.querySelector('.tl-yr'), { opacity: 0, y: 40 }, {
          opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: item, start: 'top 75%', once: true },
        })
      })
    }

    // la mise en page bouge (fontes, redimensionnement) : on retrace
    snakeObserver = new ResizeObserver(() => { build(); render() })
    snakeObserver.observe(snake)
  }

  nuxtApp.hook('page:finish', () => {
    // laisser le DOM se poser puis (re)brancher les triggers
    requestAnimationFrame(() => {
      ScrollTrigger.getAll().forEach(t => t.kill())
      if (!reduced) setupReveals()
      setupTimeline()
      ScrollTrigger.refresh()
    })
  })
})
