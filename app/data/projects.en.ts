/**
 * Version anglaise des réalisations (projects.ts). Seuls les textes sont ici :
 * captures, domaines, couleurs… viennent de la version française.
 */
import { projects as projectsFr, type Project } from './projects'

type TextesProjet = Pick<Project, 'place' | 'sector' | 'kind' | 'status' | 'hook' | 'summary' | 'context' | 'goals' | 'done'>
  & { alts: { cover: string, mobile: string, extra: string } }

const textes: Record<string, TextesProjet> = {
  'la-chance-animation': {
    place: 'Guebwiller, at the foot of the Vosges',
    sector: 'Casino entertainment in Alsace',
    kind: 'Business website redesign',
    status: 'Live',
    hook: 'A complete redesign for a casino entertainment company: a new design that captures the mood of their evenings, a page for each type of event (weddings, corporate evenings, birthdays) and a detailed quote form. The manager updates his packages, prices and photos himself.',
    summary: 'A complete redesign for a casino entertainment company: new design, pages for each type of event, a quote form and an admin area.',
    context: 'La Chance Animation brings the casino to weddings, corporate evenings and birthdays all over Alsace: roulette, blackjack, poker, croupiers in full dress. Their old website did justice neither to the atmosphere of their evenings nor to how seriously they work: I rebuilt it from scratch, carrying over their content.',
    goals: [
      'Make people want to book from the very first photo',
      'Receive more complete quote requests',
      'Let the manager update his website without going through me',
      'Keep all the search rankings of the old website',
    ],
    done: [
      'A new dark and gold design, true to the casino mood, built around their own photos of their evenings.',
      'Dedicated pages for weddings, corporate evenings and birthdays, to speak to each customer about their own event.',
      'A quote form (type of event, package, contact details) that lands straight in the manager’s inbox, protected against bots.',
      'A simple admin area: the manager updates his packages and prices, customer reviews, FAQ, team, photos and opening hours himself.',
      'Every old address of the website redirected to the new pages, to keep the rankings earned on Google.',
      'A very fast website, with photos automatically optimised to load quickly, even on phones.',
    ],
    alts: {
      cover: 'Home page of the La Chance Animation website: “The casino comes to your party”, with a photo of a blackjack table',
      mobile: 'The La Chance Animation website on a phone',
      extra: 'Packages and prices page of the La Chance Animation website',
    },
  },
  'memoryline': {
    place: '',
    sector: 'Personalised posters',
    kind: 'Custom online shop',
    status: 'In development',
    hook: 'A custom shop where every customer designs their own poster, on the website as well as at the trade fair stand.',
    summary: 'A Shopify store replaced by a custom online shop: poster designer, built-in payment, sales at trade fairs and a complete admin area.',
    context: 'MemoryLine makes illustrated posters of towns and landscapes, which each customer personalises with their own text and characters. The shop ran on Shopify with a separate personalisation add-on: hard to develop further, and trade fair sales got mixed up with website sales.',
    goals: [
      'A simple poster designer, on computers and phones alike',
      'Sell at trade fairs too, from a tablet',
      'Keep website sales and trade fair sales separate',
      'Manage everything from a single admin area',
    ],
    done: [
      'A three-step poster designer: background and text, characters (clothes, hairstyles, accessories, colours), then size. The preview updates live.',
      'The high-resolution print file is prepared automatically for every order, in the customer’s name.',
      'Card and PayPal payments directly on the website, with a basket, promotions (buy 3 posters, get 1 free) and a choice of delivery.',
      'A tablet “stand” mode for trade fairs: visitors design their poster on the spot, and the sale is counted separately.',
      'A complete admin area: catalogue, characters, orders, shipping, invoices and promotions.',
      'A website in five languages, with all the old Shopify addresses carried over so no search rankings are lost.',
    ],
    alts: {
      cover: 'MemoryLine poster designer: preview of the “Mulhouse, Tour du Bollwerk” poster and the text options',
      mobile: 'The MemoryLine poster designer on a phone',
      extra: 'MemoryLine catalogue: illustrated posters of Riquewihr',
    },
  },
  'la-chance-production': {
    place: 'Guebwiller, Haut-Rhin',
    sector: 'Photographer and videographer in Alsace',
    kind: 'Website redesign with a customer area',
    status: 'In development',
    hook: 'A website that puts the big day first, with a space where every customer finds their photos.',
    summary: 'A website redesign for a photographer and videographer in Guebwiller: new design, a page for each service, a management area and a customer area with private galleries.',
    context: 'La Chance Production is a photo and video studio in Guebwiller: wedding coverage above all, but also studio shoots, iris photography, photobooth hire and digitising old films and tapes. The website had to put weddings first, let the photographer manage his content on his own and give his customers a place to find their photos. I’m rebuilding it from scratch, carrying over his content and photos.',
    goals: [
      'Put wedding coverage first, without forgetting the other services',
      'Let the photographer change his text, prices and photos without going through me',
      'Deliver photos to customers in a private space',
      'Coming soon: book the photobooth or an iris photo session online, with a deposit paid by card',
    ],
    done: [
      'A new bright design in the colours of the logo, built around his own photos and videos.',
      'A page for each service (weddings, iris photography, studio, photobooth, digitising), so everyone quickly finds what they’re looking for, on Google as well as on the website.',
      'A booking form tailored to each service: quote, appointment or hire. Requests arrive in the management area, where the photographer follows them up.',
      'A simple management area: the photographer updates all the text, prices, photos, customer reviews and videos himself.',
      'A customer area: each customer has an account and finds their private galleries there, with or without photo downloads.',
    ],
    alts: {
      cover: 'Home page of the La Chance Production website: “Your big day in photos & videos”, over an outdoor wedding photo',
      mobile: 'The La Chance Production website on a phone',
      extra: 'Iris photography page of the La Chance Production website: “Turn a part of you into a work of art”',
    },
  },
}

export const projects: Project[] = projectsFr.map((p) => {
  const { alts, ...t } = textes[p.slug]!
  return {
    ...p,
    ...t,
    cover: { ...p.cover, alt: alts.cover },
    mobile: { ...p.mobile, alt: alts.mobile },
    extra: { ...p.extra, alt: alts.extra },
  }
})
