// Fichier de validation Google Search Console, servi par le Worker et non comme fichier statique :
// Cloudflare redirige les fichiers .html statiques (/x.html → /x), et Google ne valide pas une adresse qui redirige.
export default defineEventHandler((event) => {
  setResponseHeader(event, 'content-type', 'text/html; charset=utf-8')
  return 'google-site-verification: google085bf728f0919f61.html'
})
