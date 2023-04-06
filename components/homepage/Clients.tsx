'use client';

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export const Clients: React.FC = () => {
  const [lettersRef, setLettersRef] = useArrayRef();
  const triggerRef = useRef<HTMLDivElement>(null);

  function useArrayRef() {
    const lettersRef = useRef<Array<React.RefObject<HTMLSpanElement>>>([]);
    lettersRef.current = [];
    return [lettersRef, (ref: React.RefObject<HTMLSpanElement>) => ref && lettersRef.current.push(ref)];
  }

  gsap.registerPlugin(ScrollTrigger);

  const text = 'Je sélectionne avec soin mes clients pour leur offrir un service d\'excellence, car traduire de grandes idées en grandes marques requiert une attention ciblée et une expertise de qualité.';
  const words = text.split(' ');

  useEffect(() => {
    const anim = gsap.to(
      lettersRef.current!,
      {
        scrollTrigger: {
          trigger: triggerRef.current as any,
          scrub: true,
          start: 'top center',
          end: 'bottom 85%'
        },
        color: '#5160F0',
        opacity: 1,
        duration: 5,
        stagger: 1,
      }
    );
    return (() => {
      anim.kill()
    });
  }, [lettersRef]);

  return (
    <section id='clients' className='w-screen h-screen relative mb-20 sm:mb-10 bg-white z-10'>
      <div className='flex flex-col lg:flex-row w-full'>
        <div className='flex w-full lg:w-1/2 h-full p-8 sm:p-20'>
          <h2 className='w-full sm:w-3/5 lg:w-3/4 text-xl sm:text-w-base lg:text-w-xs'>Une image qui correspond à votre marque</h2>
        </div>
        <div className='flex w-full lg:w-1/2 h-full p-8 sm:p-20'>
          <h4
            className='text-w-xl lg:text-w-base leading-tight'
            ref={triggerRef}
          >
            {words.map((word, index) => (
              <span
                key={index}
                ref={setLettersRef}
                className='inline-block text-blue opacity-20'
              >
                {word}&nbsp;
              </span>
            ))}
          </h4>
        </div>
      </div>
    </section>
  )
}
