import * as siteFr from '~/data/site'
import * as siteEn from '~/data/site.en'
import { projects as projectsFr } from '~/data/projects'
import { projects as projectsEn } from '~/data/projects.en'
import { steps as parcoursFr } from '~/data/experience'
import { steps as parcoursEn } from '~/data/experience.en'

/** Les contenus partagés (app/data) dans les deux langues, même forme de part et d'autre. */
const CONTENUS = {
  fr: {
    services: siteFr.services,
    maintenance: siteFr.maintenance,
    reasons: siteFr.reasons,
    steps: siteFr.steps,
    faq: siteFr.faq,
    priceNote: siteFr.priceNote,
    testimonials: siteFr.testimonials,
    projects: projectsFr,
    parcours: parcoursFr,
  },
  en: {
    services: siteEn.services,
    maintenance: siteEn.maintenance,
    reasons: siteEn.reasons,
    steps: siteEn.steps,
    faq: siteEn.faq,
    priceNote: siteEn.priceNote,
    testimonials: siteEn.testimonials,
    projects: projectsEn,
    parcours: parcoursEn,
  },
}

/** Contenus de la langue de la page : const c = useContenu() puis c.value.services, c.value.projects… */
export function useContenu() {
  const { langue } = useLangue()
  return computed(() => CONTENUS[langue.value])
}
