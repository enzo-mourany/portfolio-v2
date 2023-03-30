'use client';

import React, { useState } from 'react';

const Page = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [position, setPosition] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [budget, setBudget] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name, email, position, company, budget, description);
  };

  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen'>
      <div className='flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center justify-center'>
          <form className='flex flex-col' onSubmit={onSubmit}>
            <div className='flex flex-col'>
              <label htmlFor='name'>Full name</label>
              <input
                type='text'
                id='name'
                name='name'
                placeholder='John Doe'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                id='email'
                name='email'
                placeholder='john.doe@example.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='name'>Position and Company</label>
              <div>
                <input
                  type='text'
                  id='name'
                  name='name'
                  placeholder='CEO'
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                />
                <p>at</p>
                <input
                  type='text'
                  id='name'
                  name='name'
                  placeholder='Apple'
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
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
      </div>
    </div>
  );
};

export default Page;