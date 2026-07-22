export type AudienceMode = 'fl' | 'cdi'

const QUERY_VALUES: Record<string, AudienceMode> = {
  freelance: 'fl',
  fl: 'fl',
  cdi: 'cdi',
}

/**
 * Mode d'audience global : freelance ou CDI.
 * - initialisé depuis ?mode= (les liens envoyés ciblent le bon discours)
 * - sinon depuis le cookie (choix mémorisé)
 * - setMode() synchronise l'URL et le cookie
 */
export function useAudienceMode() {
  const route = useRoute()
  const router = useRouter()
  const cookie = useCookie<AudienceMode>('aud', { maxAge: 60 * 60 * 24 * 180, sameSite: 'lax' })

  const mode = useState<AudienceMode>('audience-mode', () => {
    const q = route.query.mode
    if (typeof q === 'string' && QUERY_VALUES[q]) return QUERY_VALUES[q]
    // CDI par défaut ; le freelance reste accessible via le toggle ou ?mode=freelance
    return cookie.value === 'fl' ? 'fl' : 'cdi'
  })

  function setMode(m: AudienceMode) {
    if (mode.value === m) return
    mode.value = m
    cookie.value = m
    router.replace({ query: { ...route.query, mode: m === 'cdi' ? 'cdi' : 'freelance' } })
  }

  return { mode: readonly(mode), setMode }
}
