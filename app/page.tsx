import '../styles/globals.css';
import styles from '../styles/HomePage.module.scss';
import getPostMetadata from '../components/getPostMetadata';
import PostPreview from '../components/PostPreview';

import type { PostMetadata } from '../interfaces/PostMetadata';
import Hero from '../components/homepage/Hero';
import { Clients } from '../components/homepage/Clients';
import { Solution } from '../components/homepage/Solution';

const HomePage = () => {
  const postMetadata: PostMetadata[] = getPostMetadata();
  const postPreview: JSX.Element[] = postMetadata.map((post: PostMetadata) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <>
      <div className={styles.container}>
        <Hero />
        <Clients />
        <Solution />
      </div>
    </>
  )
};

export default HomePage;
