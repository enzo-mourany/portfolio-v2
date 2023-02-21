import '../styles/globals.css';
import getPostMetadata from '../components/getPostMetadata';
import PostPreview from '../components/PostPreview';

import About from '../components/About';
import Contact from '../components/Contact';
import ScrollingText from '../components/ScrollingText';
import type { PostMetadata } from '../interfaces/PostMetadata';
import { OptimizedShape1 } from '../components/background/OptimizedSVG';
import HomePage from './HomePage';

const Page = () => {
  const postMetadata: PostMetadata[] = getPostMetadata();
  const postPreview: JSX.Element[] = postMetadata.map((post: PostMetadata) => (
    <PostPreview key={post.slug} {...post} />
  ));
  return (
    <div className='flex flex-col items-center bg-zinc-900'>
      <OptimizedShape1 />
      <HomePage />
      <About />
      <ScrollingText text='works' />
      <div className='flex flex-col items-end w-11/12 mb-80 mt-32'>
        {postPreview}
      </div>
      <ScrollingText text='contact' />
      <Contact />
    </div>
  )
};

export default Page;
