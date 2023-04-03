import type { Metadata } from 'next';

import '../styles/globals.css';
import getPostMetadata from '../components/getPostMetadata';
import PostPreview from '../components/PostPreview';

import type { PostMetadata } from '../interfaces/PostMetadata';
import Hero from '../components/homepage/Hero';
import { Clients } from '../components/homepage/Clients';
import { Solution } from '../components/homepage/Solution';
import { Services } from '../components/homepage/Services';
import { Strategy } from '../components/homepage/Strategy';
import { Expertise } from '../components/homepage/Expertise';
import { Blob } from '../components//Blob';

export const metadata: Metadata = {
  title: {
    default: 'Enzo Mourany | Création de sites Web',
    template: '%s | Enzo Mourany',
  },
  description: 'Création de sites web pour les entreprises, startups et freelances | Développeur Web et Mobile basé sur Périgueux, Dordogne',
};

export default function Page() {
  const postMetadata: PostMetadata[] = getPostMetadata();
  const postPreview: JSX.Element[] = postMetadata.map((post: PostMetadata) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <>
      <Blob />
      <div className='flex flex-col'>
        <Hero />
        <Clients />
        <Solution />
        <Services />
        <Strategy />
        <Expertise />
      </div>
    </>
  )
}

