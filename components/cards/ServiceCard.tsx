import React from 'react'
import { CgWebsite } from 'react-icons/cg'

interface ServiceCardProps {
    title: string;
    description: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => {
  return (
    <div className='flex flex-col items-center justify-center gap-6 w-96 p-12 rounded-lg bg-gray-100 cursor-pointer'>
      <div className='p-8'>
        <CgWebsite className='text-6xl text-blue' />
      </div>
      <h3 className='text-3xl'>
        {title}
      </h3>
      <p className='w-4/5 text-lg text-center opacity-50'>
        {description}
      </p>
    </div>
  )
}