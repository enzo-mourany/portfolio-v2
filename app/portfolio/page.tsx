import React from 'react';
import type { Metadata } from 'next';

import styles from '../../styles/Works.module.scss';
import getPostMetadata from '../../components/getPostMetadata';
import PostPreview from '../../components/PostPreview';

export const metadata: Metadata = {
  title: 'Portfolio',
};

const Page = () => {
  const postMetadata = getPostMetadata();
  const postPreview = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));
  return (
    <div className={styles.works__container}>
      <div className={styles.works__wrapper}>
        <div className={styles.works__intro}>
          <div className={styles.works__title}>
            <h2 className={styles.works__title__text}>Portfolio</h2>
            <h3>Certains de mes projets et collaborations</h3>
          </div>
        </div>
        {postPreview}
      </div>
    </div>
  );
};

export default Page;