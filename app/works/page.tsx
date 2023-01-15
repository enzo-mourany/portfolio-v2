import { NextPage } from 'next';
import React from 'react';

import styles from '../../styles/HomePage.module.scss';
import getPostMetadata from '../../components/getPostMetadata';
import PostPreview from '../../components/PostPreview';

const Page: NextPage = () => {
  const postMetadata = getPostMetadata();
  const postPreview = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));
  return (
    <div className={styles.works__container}>
      {postPreview}
    </div>
  );
};

export default Page;