import '../styles/globals.css';
import styles from '../styles/HomePage.module.scss';
import getPostMetadata from '../components/getPostMetadata';
import PostPreview from '../components/PostPreview';

import type { PostMetadata } from '../interfaces/PostMetadata';
import { HomeBackground } from '../components/background/HomeBackground';
import Hero from '../components/homepage/Hero';
import { About } from '../components/homepage/About';
import { Skills } from '../components/homepage/Skills';

const HomePage = () => {
  const postMetadata: PostMetadata[] = getPostMetadata();
  const postPreview: JSX.Element[] = postMetadata.map((post: PostMetadata) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <>
      <HomeBackground />
      <div className={styles.container}>
        <Hero />
        <About />
        <Skills />
      </div>
    </>
  )
};

export default HomePage;
