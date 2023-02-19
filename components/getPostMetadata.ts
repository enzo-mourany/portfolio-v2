import fs from 'fs';
import matter from 'gray-matter';

import type { PostMetadata } from '../interfaces/PostMetadata';

const getPostMetadata = (): PostMetadata[] => {
  const folder = 'posts/' as string;
  const files = fs.readdirSync(folder) as string[];
  const markdownPosts = files.filter((file) => file.endsWith('.md')) as string[];

  const posts = markdownPosts.map((fileName: string): PostMetadata => {
    const fileContent: string = fs.readFileSync(`${folder}${fileName}`, 'utf8');
    const matterResult: matter.GrayMatterFile<string> = matter(fileContent);
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