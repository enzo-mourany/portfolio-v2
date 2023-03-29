import React from 'react'
import Link from 'next/link'

import { ButtonOutline } from '../button/ButtonOutline'

export const Strategy: React.FC = () => {
  return (
    <section id='strategy' className='w-screen bg-blue'>
      <div className='flex flex-col lg:flex-row w-full h-full'>
        <div className='flex w-full lg:w-1/2 h-full p-8 sm:p-20'>
          <h2 className='w-3/5 lg:w-3/4 text-w-base lg:text-w-xs text-white'>Stratégie, positionnement de la marque, design, intégration, lancement</h2>
        </div>
        <div className='flex flex-col w-full lg:w-1/2 h-full p-8 sm:p-20 gap-5'>
          <p className='text-w-xl lg:text-w-base text-white leading-tight'>Je joins mes forces à celles de votre équipe par le biais d&apos;une stratégie, d&apos;une conception et d&apos;un développement technique. Votre marque raconte une histoire unique, et je suis là pour lui donner vie.</p>
          <Link href='/contact'>
            <ButtonOutline text='Boostez votre entreprise' />
          </Link>
        </div>
      </div>
    </section>
  )
}
