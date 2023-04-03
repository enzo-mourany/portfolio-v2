import React from 'react';

const Hero: React.FC = () => (
  <section className='flex flex-col items-center justify-center w-screen h-screen' id='hero__container'>
    <div className='flex flex-col items-center justify-center'>
      <h2 className='text-blue text-w-base break-words w-1/2 text-center' id='title'>Votre présence numérique
        peut être votre avantage
        stratégique.</h2>
    </div>
  </section>
);

export default Hero;
