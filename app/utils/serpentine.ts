/**
 * Tracé SVG en serpentine qui passe par le centre de chaque `.tl-dot` du conteneur.
 * Coordonnées en px relatives au conteneur (le SVG le recouvre, sans viewBox).
 * Entre deux points, une courbe de Bézier à tangentes verticales : les étapes alternant
 * gauche / droite, la ligne ondule comme un serpent. Départ et arrivée au milieu, en haut et en bas.
 */
export function serpentinePath(container: HTMLElement): string {
  const box = container.getBoundingClientRect()
  const pts = [...container.querySelectorAll<HTMLElement>('.tl-dot')].map((dot) => {
    const r = dot.getBoundingClientRect()
    return { x: r.left + r.width / 2 - box.left, y: r.top + r.height / 2 - box.top }
  })
  if (!pts.length) return ''

  const xs = pts.map(p => p.x)
  const midX = (Math.min(...xs) + Math.max(...xs)) / 2
  const all = [{ x: midX, y: 0 }, ...pts, { x: midX, y: box.height }]
  const n = (v: number) => Math.round(v * 10) / 10

  let d = `M ${n(all[0]!.x)} ${n(all[0]!.y)}`
  for (let i = 1; i < all.length; i++) {
    const a = all[i - 1]!
    const b = all[i]!
    const k = (b.y - a.y) * 0.55
    d += ` C ${n(a.x)} ${n(a.y + k)}, ${n(b.x)} ${n(b.y - k)}, ${n(b.x)} ${n(b.y)}`
  }
  return d
}
