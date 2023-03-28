import React from 'react'

interface ServiceCardProps {
    title: string;
    description: string;
    link: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => {
  return (
    <div className='flex flex-col items-center justify-center gap-6 w-96 pt-12 pb-12 p-7 rounded-lg bg-gray-200'>
      <h3 className='text-3xl'>
        {title}
      </h3>
      <p className='w-3/4 text-lg text-center'>
        {description}
      </p>
      <p className='mt-4'>
        En savoir plus
      </p>
    </div>
  )
}