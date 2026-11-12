/**
 * Apparition discrète des blocs [data-reveal] quand ils entrent dans l'écran (fondu + 12 px).
 * Ce qui est déjà visible au chargement s'affiche tout de suite, sans effet.
 * Mouvement réduit ou navigateur sans IntersectionObserver : rien n'est masqué.
 */
export default defineNuxtPlugin((nuxtApp) => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return

  let io: IntersectionObserver | null = null

  function brancher() {
    io?.disconnect()
    io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue
        e.target.classList.add('vu')
        io!.unobserve(e.target)
      }
    }, { rootMargin: '0px 0px -8% 0px' })

    const bas = window.innerHeight
    document.querySelectorAll<HTMLElement>('[data-reveal]:not(.vu)').forEach((el) => {
      // déjà à l'écran : visible tout de suite (même image, pas de clignotement)
      if (el.getBoundingClientRect().top < bas) el.classList.add('vu')
      else io!.observe(el)
    })
    document.documentElement.classList.add('reveal-on')
  }

  nuxtApp.hook('page:finish', () => requestAnimationFrame(brancher))
})
