import type { Metadata } from 'next';

import { AboutHero } from './AboutHero';
import { Presentation } from './Presentation';

export const metadata: Metadata = {
  title: 'À Propos | Enzo Mourany',
  description: 'Développeur web freelance, je suis spécialisé dans la création de sites web pour les freelances, startups et entreprises. Contactez-moi pour obtenir un site web professionnel et optimisé pour le référencement qui représente parfaitement votre entreprise.'
};

export default function Page() {
  return (
    <div
      id='about__container'
    >
      <AboutHero />
      <Presentation />
    </div>
  )
}