import '../styles/globals.css';
import styles from '../styles/HomePage.module.css';
import getPostMetadata from '../components/getPostMetadata';
import PostPreview from '../components/PostPreview';

import About from '../components/About';
import Contact from '../components/Contact';
import ScrollingText from '../components/ScrollingText';
import type { PostMetadata } from '../interfaces/PostMetadata';
import { HomeBackground } from '../components/background/HomeBackground';
import HomePage from './HomePage';

const Page = () => {
  const postMetadata: PostMetadata[] = getPostMetadata();
  const postPreview: JSX.Element[] = postMetadata.map((post: PostMetadata) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <>
      <HomeBackground />
    </>
  )
};

export default Page;
