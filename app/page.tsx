import '../styles/globals.css';
import styles from '../styles/HomePage.module.scss';
import getPostMetadata from '../components/getPostMetadata';
import PostPreview from '../components/PostPreview';

import type { PostMetadata } from '../interfaces/PostMetadata';
import Hero from '../components/homepage/Hero';
import { About } from '../components/homepage/About';
import { Skills } from '../components/homepage/Skills';
import { WebDevelopment } from '../components/homepage/WebDevelopment';
import { MobileApps } from '../components/homepage/MobileApps';
import { Clients } from '../components/homepage/Clients';

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
        <About />
        <Skills />
        <WebDevelopment />
        <MobileApps />
      </div>
    </>
  )
};

export default HomePage;
