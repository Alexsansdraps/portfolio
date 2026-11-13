/**
 * Version anglaise des contenus de site.ts (/en). Seuls les textes sont ici :
 * icônes, prix plancher, liens vers les réalisations… viennent de la version française.
 * Si un texte change en français, penser à le changer ici aussi.
 */
import {
  services as servicesFr,
  maintenance as maintenanceFr,
  type Faq,
  type Price,
  type Service,
  type Temoignage,
} from './site'

export const priceNote = 'Prices exclude VAT. The quote sets the exact price for your project. You can pay in instalments.'

type TextesService = Pick<Service, 'title' | 'short' | 'long' | 'includes' | 'price' | 'prices' | 'h1' | 'seoTitle' | 'seoDescription' | 'linkText' | 'forWho' | 'faq'>

const textes: Record<string, TextesService> = {
  'site-vitrine': {
    title: 'Business website',
    short: 'Present your business and receive enquiries from your customers.',
    long: 'Your website is often the first thing customers see of you. I design it so it explains clearly what you do, reads well on a phone, and makes people want to get in touch.',
    includes: [
      'A unique design that reflects you (not an off-the-shelf template)',
      'Easy to read on phones, tablets and computers',
      'A contact or quote form that lands straight in your inbox',
      'Search engine optimisation, so customers in your field find you on Google',
      'Going live, domain name and a professional email address',
    ],
    price: 'From €690 excl. VAT',
    prices: [
      { label: 'One-page website', value: 'from €690' },
      { label: 'Website with 5 to 7 pages', value: 'from €1,390' },
    ],
    h1: ['I build', 'your business website.'],
    seoTitle: 'Business website design in Mulhouse, from €690 excl. VAT',
    seoDescription: 'A custom website to present your business and receive enquiries: unique design, made for phones, built for Google. From €690 excl. VAT, in Mulhouse, Alsace.',
    linkText: 'The business website in detail',
    forWho: [
      'You don’t have a website yet, or only a Facebook page.',
      'When people search for your trade on Google, your competitors come up first.',
      'You’d like quote requests to arrive straight in your inbox.',
    ],
    faq: [
      {
        q: 'What’s the difference between a one-page website and a 5 to 7 page one?',
        a: 'A one-page website puts the essentials in one place: what you do, your services, your contact details and a form. It’s often enough to get started, from €690 excl. VAT. With 5 to 7 pages (from €1,390 excl. VAT), each service gets its own page, which gives you a better chance of showing up on Google for each of them.',
      },
      {
        q: 'Do you take care of the domain name and email address?',
        a: 'Yes. I handle going live, the domain name and a professional email address. The website, the domain name and the content remain yours.',
      },
      {
        q: 'Will my website look good on a phone?',
        a: 'Yes. Customers often discover you on their phone, so that’s where I start, before tablets and computers.',
      },
    ],
  },
  'boutique-en-ligne': {
    title: 'Online shop',
    short: 'Sell your products online, with secure payment included.',
    long: 'I build shops around your products, rather than squeezing you into a ready-made platform. Payment, shipping, invoices, customisation: we plan for what you need day to day.',
    includes: [
      'Card and PayPal payments, directly on your website',
      'Products your customers can personalise, with a live preview',
      'Order tracking, shipping, invoices and promotions',
      'A simple admin area to manage everything',
    ],
    price: 'From €4,130 excl. VAT',
    prices: [
      { label: 'Custom online shop', value: 'from €4,130' },
    ],
    h1: ['I build', 'your online shop.'],
    seoTitle: 'Custom online shop design | Mulhouse, Alsace',
    seoDescription: 'An online shop designed for your products: card and PayPal payments, shipping, invoices, personalised products. Custom-built, from €4,130 excl. VAT.',
    linkText: 'The online shop in detail',
    forWho: [
      'You sell products and the platform you use is holding you back.',
      'Wix or Shopify aren’t specialised enough for your trade.',
      'Your customers personalise their orders.',
    ],
    faq: [
      {
        q: 'Why a custom shop rather than a ready-made platform?',
        a: 'A platform works well to get started. When your products have specific needs (personalisation, special shipping, rules that are particular to your trade), you often end up stacking paid add-ons. A custom shop does what your products need, with no extra add-ons, and you no longer depend on a platform’s pricing.',
      },
      {
        q: 'Which payment methods can I offer?',
        a: 'Card and PayPal, directly on your website. Payments go straight to your account.',
      },
      {
        q: 'Will I be able to run the shop myself?',
        a: 'Yes. You get a simple admin area to add products, follow orders and shipping, find your invoices and launch promotions.',
      },
    ],
  },
  'referencement': {
    title: 'Search engine optimisation (SEO)',
    short: 'Get found on Google by customers in your field.',
    long: 'Search engine optimisation (SEO) is what helps Google understand what you do and show you to people looking for your services. I take care of it on every website I build, and I can also improve an existing one.',
    includes: [
      'A review of how visible you are today',
      'Titles and text written around what your customers search for',
      'A fast website that works perfectly on phones',
      'Your Google Business Profile: opening hours, photos, reviews',
      'Rankings and visits tracked and explained simply',
    ],
    price: 'Quote on request',
    prices: [
      { label: 'Improving your search ranking', value: 'quote on request' },
    ],
    h1: ['Get found', 'on Google.'],
    seoTitle: 'SEO in Mulhouse, Alsace | Freelance web developer',
    seoDescription: 'Get found on Google by your customers: well-written titles and text, a fast website, your Google Business Profile and results tracking. Free first meeting, in Mulhouse.',
    linkText: 'SEO in detail',
    forWho: [
      'You have a website, but nobody finds it when they search for your trade and your town.',
      'You don’t show up on Google Maps, or your profile is almost empty.',
      'You don’t know whether your website actually brings you customers.',
    ],
    faq: [
      {
        q: 'How long before I see results?',
        a: 'The first effects usually show after a few weeks, and rankings build up over several months. It depends on the competition in your field and on the state of your website to begin with. We look at it together in the first meeting.',
      },
      {
        q: 'What is a Google Business Profile?',
        a: 'It’s the listing that appears on Google and Google Maps when people search for your business: address, opening hours, photos, reviews. It’s free and it matters a lot for local searches, such as “plumber Mulhouse”. I can create it or improve it with you.',
      },
      {
        q: 'Can you improve a website you didn’t build?',
        a: 'Yes. We start by looking together at what’s holding your website back, then I suggest improvements on a quote: text, titles, speed, technical errors, Google Business Profile.',
      },
    ],
  },
  'presence-en-ligne': {
    title: 'Social media and online presence',
    short: 'Website, Google profile and social media, up to date and consistent.',
    long: 'A customer might find you on Google, on Instagram, on Facebook or through your website. I look after all of it so everything is up to date, consistent and true to you, and I advise you on what’s really worth it for your business.',
    includes: [
      'Setting up or taking over your Facebook, Instagram and LinkedIn pages',
      'Your Google Business Profile, with your opening hours, photos and reviews',
      'The same information everywhere, always up to date',
      'Managing your posts, if you’d like',
      'Practical advice that fits your business',
    ],
    price: 'Quote on request',
    prices: [
      { label: 'Online presence and social media', value: 'quote on request' },
    ],
    h1: ['I look after', 'your whole online presence.'],
    seoTitle: 'Social media and online presence management | Mulhouse',
    seoDescription: 'Social media, Google Business Profile, website: I look after your whole online presence and advise you. Freelance in Mulhouse, Alsace, quote on request.',
    linkText: 'Online presence in detail',
    forWho: [
      'You don’t have time to look after your social media.',
      'Your details aren’t the same on Google, on Facebook and on your website.',
      'You don’t know where to start to be visible online.',
    ],
    faq: [
      {
        q: 'Can you handle my posts too?',
        a: 'Yes, if you’d like. We choose the pace and the tone together, and I take care of it. You can also keep control yourself, and I’ll advise you.',
      },
      {
        q: 'Which social networks should I be on?',
        a: 'Wherever your customers are: often Facebook and Instagram, sometimes LinkedIn. You don’t need to be everywhere: I’ll tell you which ones are worth it for your business.',
      },
      {
        q: 'How much does managing my online presence cost?',
        a: 'It depends on what you’d like to hand over to me. We talk about it in the first meeting, which is free with no obligation, then I send you a quote.',
      },
    ],
  },
  'refonte': {
    title: 'Website redesign',
    short: 'Is your website looking dated? I rebuild it without losing your place on Google.',
    long: 'If your website is looking dated, or you pay a lot for a Wix or Shopify subscription, I can rebuild it. I bring your content across and handle the switch so you don’t lose your place on Google.',
    includes: [
      'Your existing content carried over and rewritten',
      'Old addresses redirected, so you keep your search rankings',
      'Domain name transfer, with no downtime for your customers',
      'No more unnecessary subscriptions, hosting at a controlled cost',
    ],
    price: 'Around €2,450 excl. VAT',
    prices: [
      { label: 'Redesign of a Wix, Shopify or dated website', value: 'on quote, around €2,450' },
    ],
    h1: ['I rebuild', 'your website.'],
    seoTitle: 'Website redesign, moving away from Wix or Shopify | Alsace',
    seoDescription: 'Dated website, Wix or Shopify subscription too expensive? I rebuild your website from scratch without losing your place on Google. Around €2,450 excl. VAT.',
    linkText: 'The redesign in detail',
    forWho: [
      'Your website is a few years old and no longer gives a good image of your business.',
      'You pay a Wix or Shopify subscription every month for a website that never changes.',
      'It looks bad on phones, or takes a while to load.',
    ],
    faq: [
      {
        q: 'How does the switch to the new website work, with no downtime?',
        a: 'I build the new website alongside the old one, which you keep using. Once everything is approved, I switch the domain name and the redirects over in one go: your customers don’t see any interruption.',
      },
      {
        q: 'Can I keep my domain name?',
        a: 'Yes. I transfer it if needed, and your address stays the same for your customers and for Google.',
      },
      {
        q: 'What happens to my Wix or Shopify subscriptions?',
        a: 'Once the new website is live and the old addresses are redirected, you can cancel them. For hosting and updates of the new website, I offer ongoing care from €27 excl. VAT per month.',
      },
    ],
  },
  'outils-sur-mesure': {
    title: 'Custom business software',
    short: 'Software or a tool built around the way you work.',
    long: 'Juggling several Excel files, or the software on the market doesn’t fit your trade? I develop custom business software, and simpler tools when that’s enough, with AI where it genuinely saves you time.',
    includes: [
      'Business software that follows the way you work',
      'Online booking, customer area, useful forms',
      'Dashboards that replace your spreadsheets',
      'Repetitive tasks automated, with AI where it makes sense',
    ],
    price: 'Quote on request',
    prices: [
      { label: 'Custom business software or tool', value: 'quote on request' },
    ],
    h1: ['I develop', 'your business software.'],
    seoTitle: 'Custom business software in Mulhouse | Freelance developer',
    seoDescription: 'Business software, customer area, online booking, dashboard: a custom tool that replaces your spreadsheets and double entry. Quote on request, in Mulhouse.',
    linkText: 'Business software in detail',
    forWho: [
      'You juggle several Excel files that don’t talk to each other.',
      'The software on the market doesn’t match your trade.',
      'Your customers would like to book or find their documents online.',
    ],
    faq: [
      {
        q: 'What can custom business software be used for?',
        a: 'For whatever wastes your time today: tracking your jobs or orders, a shared schedule, online booking, a space where your customers find their documents, a dashboard that replaces your spreadsheets, quotes and reminders sent automatically.',
      },
      {
        q: 'Do you use artificial intelligence?',
        a: 'When it genuinely saves you time: sorting enquiries, summarising documents, pre-filling forms. If a simpler solution does the job, I’ll suggest that instead.',
      },
      {
        q: 'How much does custom software cost?',
        a: 'The price depends on what the tool needs to do. We first review your current tools in the first meeting, which is free with no obligation, then I send you a detailed quote.',
      },
    ],
  },
}

export const services: Service[] = servicesFr.map(s => ({ ...s, ...textes[s.id]! }))

export const maintenance = {
  ...maintenanceFr,
  title: 'And once the website is live?',
  text: 'I’m still there after launch: hosting, updates, small changes. If something goes wrong, you know who to call.',
  price: 'From €27 excl. VAT per month.',
  prices: [
    { label: 'Hosting and updates', value: '€27 / month' },
    { label: 'With 1 hour of changes every month', value: '€55 / month' },
    { label: 'Occasional small changes', value: '€35 / hour' },
  ] as Price[],
}

export const reasons = [
  {
    t: 'A website made for you',
    d: 'The design starts from your business, never from a theme bought online.',
  },
  {
    t: 'Everything belongs to you',
    d: 'The website, the domain name and the content.',
  },
]

/** Témoignages : la version anglaise d'une vraie citation, seulement si le client est d'accord. */
export const testimonials: Temoignage[] = []

export const steps = [
  { t: 'Meeting', d: 'One hour, free with no obligation, to look at where you are and what you need, by video call or in person.' },
  { t: 'Building', d: 'I send you a clear proposal with the content, the timeline and the price, then I build the project and show you how it’s going.' },
  { t: 'Launch', d: 'I put it live, show you how everything works, and stay available for what comes next.' },
]

export const faq: Faq[] = [
  {
    q: 'How much does a website cost?',
    a: 'A one-page website starts at €690 excl. VAT, a 5 to 7 page business website at €1,390 excl. VAT and a custom online shop at €4,130 excl. VAT. Every project comes with a detailed quote, drawn up after our first meeting, setting out the content, the timeline and the price.',
  },
  {
    q: 'Can I pay in instalments?',
    a: 'Yes. Payment can be spread over several instalments, on a schedule we agree together and set out in the quote.',
  },
  {
    q: 'Do I have to pay for the first meeting?',
    a: 'No. The first meeting lasts one hour and is free with no obligation. It’s a chance to look at where you are and what you need, by video call or in person.',
  },
  {
    q: 'How long does a project take?',
    a: 'It depends on the size of the project and on when your content (text, photos) is ready. The schedule is set in the quote, and you can follow progress at every stage.',
  },
  {
    q: 'Will I be able to update my website myself?',
    a: 'Yes. A simple admin area can be set up so you can change your text, photos, prices or opening hours, with no technical skills.',
  },
  {
    q: 'Is search engine optimisation included?',
    a: 'Yes. Every website is built for Google from the start: speed, display on phones, well-written titles and text, structured information. During a redesign, old addresses are redirected to keep your rankings.',
  },
  {
    q: 'What happens to my content during a redesign?',
    a: 'It’s carried over: text, photos, products. Old addresses are redirected to the new pages, including if your current website is on Wix or Shopify.',
  },
  {
    q: 'Do you travel?',
    a: 'Yes, within 100 km of Mulhouse. Beyond that, meetings take place by video call.',
  },
  {
    q: 'What happens after the website goes live?',
    a: 'I remain your contact for hosting, updates and changes, from €27 excl. VAT per month.',
  },
]
