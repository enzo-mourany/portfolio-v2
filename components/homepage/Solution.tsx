import React from 'react'
import Link from 'next/link'

import { ButtonOutline } from '../button/ButtonOutline'

export const Solution: React.FC = () => {
  return (
    <section id='solution' className='w-screen h-screen bg-blue'>
      <div className='flex flex-col h-full'>
        <div className='flex flex-col justify-start w-full lg:w-3/5 h-full p-8 sm:p-20 gap-5'>
          <h3 className='text-w-xl lg:text-w-base text-white font-medium leading-none'>En positionnant mes clients en tant que <strong >références</strong> dans leur secteur d&apos;activité, je les aide à sortir du lot et à se <strong>démarquer</strong> significativement sur un marché <strong>concurrentiel</strong>.</h3>
          <h4 className='text-w-base lg:text-2xl text-white opacity-50'>La crédibilité de votre marque sur le marché dépend de l&apos;identité et de l&apos;expérience numériques que vous proposez. Heureusement, je suis compétent dans ce domaine pour vous aider à atteindre vos objectifs.</h4>
          <Link href='/contact'>
            <ButtonOutline text='Solution sur mesure' />
          </Link>
        </div>
        <div className='flex w-full lg:w-1/2 h-full p-20'>
        </div>
      </div>
    </section>
  )
}
