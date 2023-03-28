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

const HomePage = () => {
  const postMetadata: PostMetadata[] = getPostMetadata();
  const postPreview: JSX.Element[] = postMetadata.map((post: PostMetadata) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <>
      <div className='flex flex-col items-center'>
        <Hero />
        <Clients />
        <Solution />
        <Services />
        <Strategy />
        <Expertise />
      </div>
    </>
  )
};

export default HomePage;
