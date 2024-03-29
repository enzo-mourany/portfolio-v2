import React from 'react'
import Link from 'next/link'

import { ButtonOutline } from '../button/ButtonOutline'

export const Strategy: React.FC = () => {
  return (
    <section id='strategy' className='w-screen bg-blue'>
      <div className='flex flex-col lg:flex-row w-full h-full'>
        <div className='flex w-full lg:w-1/2 h-full p-8 sm:p-20'>
          <h2 className='w-3/5 lg:w-3/4 text-w-base lg:text-w-xs text-white leading-none'>Stratégie, positionnement de la marque, design, intégration, lancement</h2>
        </div>
        <div className='flex flex-col w-full lg:w-1/2 h-full p-8 sm:p-20 gap-5'>
          <h4 className='text-w-xl lg:text-w-base text-white font-medium leading-none'>Je joins mes forces à celles de votre équipe par le biais d&apos;une <strong>stratégie</strong>, d&apos;une conception et d&apos;un <strong>développement technique</strong>. Votre marque raconte une <strong>histoire unique</strong>, et je suis là pour lui donner vie.</h4>
          <Link href='/contact'>
            <ButtonOutline text='Boostez votre entreprise' />
          </Link>
        </div>
      </div>
    </section>
  )
}
