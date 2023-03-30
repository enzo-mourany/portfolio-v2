'use client';

import React, { useState } from 'react';

const Page = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [position, setPosition] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [budget, setBudget] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !position || !company || !budget || !description) {
      setHasError(true);
      return;
    } else {
      setHasError(false);
    }

    if (!hasError) {
      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          body: JSON.stringify({
            name,
            email,
            position,
            company,
            budget,
            description,
          }),
          headers: {
            'content-Type': 'application/json',
          },
        });

      } catch (error: any) {
        console.error(error);
      }

      setIsSubmitted(true);
    } else {
      const inputs = document.querySelectorAll('input, textarea');
      inputs.forEach((input: any) => {
        if (!input.value) {
          input.classList.add('error');
        } else {
          input.classList.remove('error');
        }
      });
    }
  };

  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen'>
      <div className='flex flex-col items-center justify-center'>
        {!isSubmitted ? (
          <div className='flex flex-col items-center justify-center'>
            <form className='flex flex-col' onSubmit={onSubmit}>
              <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                <div className='sm:col-span-4'>
                  <label htmlFor='username' className='block text-sm font-medium leading-6 text-gray-900'>
                    Prénom et Nom
                  </label>
                  <div className='mt-2'>
                    <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
                      <input
                        type='text'
                        name='username'
                        id='username'
                        autoComplete='username'
                        className='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                        placeholder='John Doe'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                <div className='sm:col-span-4'>
                  <label htmlFor='username' className='block text-sm font-medium leading-6 text-gray-900'>
                    Email
                  </label>
                  <div className='mt-2'>
                    <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
                      <input
                        type='email'
                        name='email'
                        id='email'
                        autoComplete='email'
                        className='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                        placeholder='johndoe@gmail.com'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex flex-col'>
                <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                  <label htmlFor='name'>Position and Company</label>
                  <div className='flex flex-row items-center justify-center gap-6'>
                    <div className='mt-2'>
                      <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
                        <input
                          type='text'
                          name='position'
                          id='position'
                          autoComplete='position'
                          className='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                          placeholder='CEO'
                          value={position}
                          onChange={(e) => setPosition(e.target.value)}
                        />
                      </div>
                    </div>
                    <p>chez</p>
                    <div className='mt-2'>
                      <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
                        <input
                          type='text'
                          name='company'
                          id='company'
                          autoComplete='company'
                          className='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                          placeholder='Google'
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex flex-col'>
                <label htmlFor='budget'>Budget</label>
                <input
                  type='text'
                  id='budget'
                  name='budget'
                  placeholder='3000 - 5000€'
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                />
              </div>
              <div className='flex flex-col'>
                <label htmlFor='description'>Project Description</label>
                <textarea
                  name='description'
                  id='description'
                  cursor-ix='true'
                  placeholder='Tell me more about your project. Please include details like goals, timeline, and design links if available.' value={description}
                  onChange={(e) => setDescription(e.target.value)}
                >
                </textarea>
              </div>
              <button type='submit'>Submit</button>
            </form>
          </div>
        ) : (
          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-blue text-w-base break-words w-1/2 text-center' id='title'>Votre présence numérique
              peut être votre avantage
              stratégique.</h1>
          </div>
        )
        }

      </div>
    </div>
  );
};

export default Page;