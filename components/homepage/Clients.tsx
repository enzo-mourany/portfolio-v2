import React from 'react'

export const Clients: React.FC = () => {
  return (
    <section id='clients' className='w-screen h-screen relative mb-20 sm:mb-10 bg-white z-10'>
      <div className='flex flex-col lg:flex-row w-full'>
        <div className='flex w-full lg:w-1/2 h-full p-8 sm:p-20'>
          <h2 className='w-full sm:w-3/5 lg:w-3/4 text-xl sm:text-w-base lg:text-w-xs'>Une image qui correspond à votre marque</h2>
        </div>
        <div className='flex w-full lg:w-1/2 h-full p-8 sm:p-20'>
          <p className='text-w-xl lg:text-w-base text-blue leading-tight'>Je sélectionne avec soin mes clients pour leur offrir un service d&apos;excellence, car traduire de grandes idées en grandes marques requiert une attention ciblée et une expertise de qualité.</p>
        </div>
      </div>
    </section>
  )
}
