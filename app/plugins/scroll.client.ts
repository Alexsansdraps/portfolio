import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

/**
 * Smooth scroll (Lenis) + reveals au scroll (GSAP ScrollTrigger).
 * - tout élément portant [data-reveal] apparaît en fondu/translation à l'entrée du viewport
 * - jauges de langues : remplissage animé (.l-fill / .l-goal)
 * - carte mobilité : anneaux, liaisons et villes se dessinent
 * - prefers-reduced-motion : aucun mouvement, états finaux directs
 */
export default defineNuxtPlugin((nuxtApp) => {
  gsap.registerPlugin(ScrollTrigger)

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  let lenis: Lenis | null = null
  if (!reduced) {
    lenis = new Lenis({ lerp: 0.12 })
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => lenis!.raf(time * 1000))
    gsap.ticker.lagSmoothing(0)
  }

  function setupReveals() {
    if (reduced) return

    // reveals génériques
    gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
      gsap.fromTo(el,
        { opacity: 0, y: 26 },
        {
          opacity: 1, y: 0, duration: .9, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 86%', once: true },
        })
    })

    // jauges de langues
    gsap.utils.toArray<HTMLElement>('.l-bar').forEach((bar) => {
      const fill = bar.querySelector('.l-fill')
      const goal = bar.querySelector('.l-goal')
      const tl = gsap.timeline({
        scrollTrigger: { trigger: bar, start: 'top 88%', once: true },
      })
      if (fill) tl.fromTo(fill, { scaleX: 0 }, { scaleX: 1, transformOrigin: 'left', duration: 1.1, ease: 'power3.inOut' })
      if (goal) tl.fromTo(goal, { opacity: 0 }, { opacity: 1, duration: .5 }, '-=.2')
    })

    // carte mobilité — chaque ligne vit dans son groupe .city (hover ciblé)
    const map = document.querySelector('.mob-map')
    if (map) {
      const rings = map.querySelectorAll('.rings circle')
      const links = map.querySelectorAll('.city line')
      const cityMarks = map.querySelectorAll('.city circle, .city text')
      const home = map.querySelector('.home')
      links.forEach((l) => {
        const el = l as SVGLineElement
        const len = Math.hypot(
          Number(el.getAttribute('x2')) - Number(el.getAttribute('x1')),
          Number(el.getAttribute('y2')) - Number(el.getAttribute('y1')),
        )
        el.style.strokeDasharray = `${len}`
        el.style.strokeDashoffset = `${len}`
      })
      const tl = gsap.timeline({
        scrollTrigger: { trigger: map, start: 'top 80%', once: true },
      })
      tl.fromTo(rings, { opacity: 0, scale: .82, transformOrigin: '300px 220px' }, { opacity: 1, scale: 1, duration: .9, ease: 'power3.out', stagger: .12 })
        .fromTo(home, { opacity: 0 }, { opacity: 1, duration: .4 }, '-=.5')
        .to(links, { strokeDashoffset: 0, duration: .8, ease: 'power2.inOut', stagger: .08 }, '-=.3')
        .fromTo(cityMarks, { opacity: 0 }, { opacity: 1, duration: .45, stagger: .04 }, '-=.6')
        .set(links, { clearProps: 'strokeDasharray,strokeDashoffset' })
    }
  }

  nuxtApp.hook('page:finish', () => {
    // laisser le DOM se poser puis (re)brancher les triggers
    requestAnimationFrame(() => {
      ScrollTrigger.getAll().forEach(t => t.kill())
      setupReveals()
      ScrollTrigger.refresh()
    })
  })
})
