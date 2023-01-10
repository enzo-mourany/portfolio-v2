import '../styles/globals.css';
import getPostMetadata from '../components/getPostMetadata';
import PostPreview from '../components/PostPreview';

import About from '../components/About';
import Contact from '../components/Contact';
import ScrollingText from '../components/ScrollingText';
import HomePage from './HomePage';

const Page = () => {
  const postMetadata = getPostMetadata();
  const postPreview = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));
  return (
    <div className='flex flex-col items-center bg-zinc-900'>
      <HomePage />
      <About />
      <ScrollingText text='works' />
      <div className='flex flex-col items-end w-11/12 mb-80'>
        {postPreview}
      </div>
      <ScrollingText text='contact' />
      <Contact />
    </div>
  )
};

export default Page;
