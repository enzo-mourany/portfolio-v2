import type { Metadata } from 'next';

import '../styles/globals.css';

import Hero from '../components/homepage/Hero';
import { Clients } from '../components/homepage/Clients';
import { Solution } from '../components/homepage/Solution';
import { Services } from '../components/homepage/Services';
import { Strategy } from '../components/homepage/Strategy';
import { Expertise } from '../components/homepage/Expertise';
import { Blob } from '../components//Blob';

const idJsonObject = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  url: 'https://enzomourany.com',
  logo: 'https://enzomourany.com/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    EmailPage: 'mailto:contact@enzomourany.com',
  },
  sameAs: [
    'https://www.linkedin.com/in/enzomourany/',
    'https://github.com/enzo-mourany/'
  ],
  type: 'Service',
  name: 'Service de Création de sites web',
  description: 'Création de sites web pour les entreprises, startups et freelances | Développeur Web et Mobile basé sur Périgueux, Dordogne',
  brand: {
    '@type': 'Brand',
    name: 'Enzo Mourany'
  },
  offers: {
    '@type': 'Offer',
    url: 'https://enzomourany.com/services/',
    priceCurrency: 'EUR',
    seller: {
      '@type': 'Organization',
      name: 'Enzo Mourany'
    }
  }
}

export const metadata: Metadata = {
  title: {
    default: 'Améliorez votre présence en ligne avec un site web',
    template: '%s | Enzo Mourany',
  },
  description: 'Vous êtes à la recherche d\'un site web professionnel pour votre entreprise ou startup ? Je suis un développeur web freelance basé sur Périgueux en Dordogne, spécialisé dans la création de sites web, vitrine, landing page, application web et d\'autres pour les freelances, startups et entreprises.',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://enzomourany.com/',
  },
  keywords: ['Développeur Web', 'Création de sites web', 'Site Web', 'Périgueux', 'Développeur Web Périgueux', 'Agence Web Périgueux', 'Site Vitrine', 'Agence de communication Dordogne', 'Agence Web Dordogne'],
  authors: [{ name: 'Enzo Mourany', url: 'https://enzomourany.com' }],
  colorScheme: 'light',
  creator: 'Enzo Mourany',
  referrer: 'origin-when-cross-origin',
  applicationName: 'Enzo Mourany',
  generator: 'Next.js',
  viewport: 'initial-scale=1.0, width=device-width',
  metadataBase: new URL('https://enzomourany.com/'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function Page() {
  return (
    <>
      <Blob />
      <div className='flex flex-col overflow-x-hidden'>
        <Hero />
        <Clients />
        <Solution />
        <Services />
        <Strategy />
        <Expertise />
      </div>
    </>
  )
}

