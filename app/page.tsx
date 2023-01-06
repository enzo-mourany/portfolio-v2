import React from 'react';
import { type NextPage } from "next";
import Link from 'next/link';
import fs from 'fs';
import matter from 'gray-matter';

import type { PostMetadata } from '../components/PostMetadata';

const getPostMetadata = (): PostMetadata[] => {
  const folder = 'posts/';
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith('.md'));
  
  // Get gray-matter data from each post
  const posts = markdownPosts.map((fileName) => {
    const fileContent = fs.readFileSync(`${folder}${fileName}`, 'utf8');
    const matterResult = matter(fileContent);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace('.md', ''),
    };
  });

  return posts;
};

const HomePage: NextPage = () => {
  const postMetadata = getPostMetadata();
  const postPreview = postMetadata.map((post) => (
    <div key={post.slug}>
      <Link href={`/posts/${post.slug}`}>
        <h2>{post.title}</h2>
      </Link>
    </div>
  ));
  return (
    <div>{postPreview}</div>
  )
};

export default HomePage;
