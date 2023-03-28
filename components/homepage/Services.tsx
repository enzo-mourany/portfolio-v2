import React from 'react'

export const Services: React.FC = () => {
  return (
    <section id='services' className='h-screen'>
      <div className='flex flex-col lg:flex-row h-full'>
        <div className='flex flex-col items-center w-full h-full p-20'>
          <h2 className='w-3/5 lg:w-3/4 text-w-xs lg:text-w-base text-blue text-center'>Services</h2>
          <h3 className='w-3/5 lg:w-3/4 text-3xl lg:text-w-4xl opacity-50 text-center'>Je construis votre marque pour que vous puissiez vous concentrer sur le reste.</h3>
        </div>
      </div>
    </section>
  )
}
