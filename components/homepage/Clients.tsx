import React from 'react'

export const Clients: React.FC = () => {
  return (
    <section id='clients' className='h-screen'>
      <div className='flex flex-row h-full'>
        <div className='flex w-1/2 h-full p-20'>
          <h2 className='w-1/2 text-4xl'>Une image qui correspond à votre marque</h2>
        </div>
        <div className='flex w-1/2 h-full p-20'>
          <p className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-blue leading-14'>Je sélectionne avec soin mes clients pour leur offrir un service d&apos;excellence, car traduire de grandes idées en grandes marques requiert une attention ciblée et une expertise de qualité.</p>
        </div>
      </div>
    </section>
  )
}
