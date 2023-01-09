import fs from 'fs';
import matter from 'gray-matter';

import type { PostMetadata } from './PostMetadata';

const getPostMetadata = (): PostMetadata[] => {
    const folder = 'api/posts/';
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith('.md'));
    
    const posts = markdownPosts.map((fileName) => {
      const fileContent = fs.readFileSync(`${folder}${fileName}`, 'utf8');
      const matterResult = matter(fileContent);
      return {
        title: matterResult.data.title,
        date: matterResult.data.date,
        subtitle: matterResult.data.subtitle,
        pinned: matterResult.data.pinned,
        techs: matterResult.data.techs,
        role: matterResult.data.role,
        githubLink: matterResult.data.githubLink,
        type: matterResult.data.type,
        slug: fileName.replace('.md', ''),
      };
    });
  
    return posts;
  };

export default getPostMetadata;