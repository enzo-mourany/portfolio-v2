'use client';

import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [position, setPosition] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [budget, setBudget] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const [errors, setErrors] = useState({});

  const [buttonText, setButtonText] = useState('Envoyer');

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleValidation = () => {
    const tempErrors: any = {};
    let isValid = true;

    if (name.length < 0) {
      tempErrors.name = 'Name is required';
      isValid = false;
    }

    if (email.length < 0) {
      tempErrors.email = 'Email is required';
      isValid = false;
    }

    if (position.length < 0) {
      tempErrors.position = 'Position is required';
      isValid = false;
    }

    if (company.length < 0) {
      tempErrors.company = 'Company is required';
      isValid = false;
    }

    if (budget.length < 0) {
      tempErrors.budget = 'Budget is required';
      isValid = false;
    }

    if (description.length < 0) {
      tempErrors.description = 'Description is required';
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log('errors', errors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValidForm = handleValidation();

    if (!isValidForm) {
      setButtonText('Envoie en cours...');
      const res = await fetch('/api/contact', {
        body: JSON.stringify({
          name: name,
          email: email,
          position: position,
          company: company,
          budget: budget,
          description: description,
        }),
        headers: {
          'content-Type': 'application/json',
        },
        method: 'POST',
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText('Envoyé !');

        // Reset form fields
        setName('');
        setEmail('');
        setPosition('');
        setCompany('');
        setBudget('');
        setDescription('');
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText('Send');
      // Reset form fields
      setName('');
      setEmail('');
      setPosition('');
      setCompany('');
      setBudget('');
      setDescription('');
    }
  };

  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen'>
      <div className='flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center justify-center'>
          <form className='flex flex-col bg-white p-8 rounded-xl shadow-xl w-10/11 md:w-auto' onSubmit={handleSubmit}>
            <div className='mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 w-full'>
              <div className='sm:col-span-4 w-full'>
                <label htmlFor='username' className='block text-sm font-medium leading-6 text-gray-900'>
                  Prénom et Nom
                </label>
                <div className='mt-2 w-full'>
                  <div className='flex w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600'>
                    <input
                      type='text'
                      name='username'
                      id='username'
                      autoComplete='username'
                      className='w-full block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                      placeholder='John Doe'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
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
                      className='block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                      placeholder='johndoe@gmail.com'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className='flex flex-col mt-4 gap-x-6 gap-y-8'>
              <label htmlFor='name'>Position and Company</label>
              <div className='flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6'>
                <div className=''>
                  <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-4/5'>
                    <input
                      type='text'
                      name='position'
                      id='position'
                      autoComplete='position'
                      className='block w-full md:w-auto flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                      placeholder='CEO'
                      value={position}
                      onChange={(e) => setPosition(e.target.value)}
                    />
                  </div>
                </div>
                <p>chez</p>
                <div className=''>
                  <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
                    <input
                      type='text'
                      name='company'
                      id='company'
                      autoComplete='company'
                      className='block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                      placeholder='Google'
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
              <div className='sm:col-span-4'>
                <label htmlFor='username' className='block text-sm font-medium leading-6 text-gray-900'>
                  Budget
                </label>
                <div className='mt-2'>
                  <div className='flex w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600'>
                    <input
                      type='text'
                      name='budget'
                      id='budget'
                      autoComplete='budget'
                      className='block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                      placeholder='2000'
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className='col-span-full mt-4'>
              <label htmlFor='about' className='block text-sm font-medium leading-6 text-gray-900'>
                Message
              </label>
              <div className='mt-2'>
                <textarea
                  id='about'
                  name='about'
                  rows={3}
                  className='block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6 pl-2'
                  placeholder='Dites m&apos;en plus sur votre projet. Veuillez inclure des détails tels que les objectifs, le calendrier et les liens de conception, le cas échéant.'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>

            <div className='relative flex gap-x-3 mt-4'>
              <div className='flex h-6 items-center'>
                <input
                  id='offers'
                  name='offers'
                  type='checkbox'
                  className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                />
              </div>
              <div className='text-sm leading-6'>
                <p className='text-gray-500'>Recevez des notifications de mes offres</p>
              </div>
            </div>

            <button
              type='submit'
              className='mt-4 rounded-md bg-blue hover:bg-white px-3 py-2 text-sm font-semibold text-white hover:text-blue border-blue border-solid border-2 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-100 ease-in-out'
            >
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;