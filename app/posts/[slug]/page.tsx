import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';

import '../../../styles/globals.css';

import getPostMetadata from '../../../components/getPostMetadata';
import type { PostMetadata } from '../../../interfaces/PostMetadata';

const getPostContent = (slug: string) => {
  const folder = 'posts/';
  const file = `${folder}${slug}.md`;
  const content: string = fs.readFileSync(file, 'utf8');
  const matterResult: matter.GrayMatterFile<string> = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts: PostMetadata[] = getPostMetadata();
  return posts.map(post => ({
    slug: post.slug,
  }));
};

interface PostPageProps {
  params: {
    slug: string;
  };
}

const PostPage: React.FC<PostPageProps> = (props) => {
  const slug: string = props.params.slug;
  const post: matter.GrayMatterFile<string> = getPostContent(slug);
  return (
    <div className='flex flex-col items-center'>
      <article className='prose mt-32 max-w-[80%] md:w-1/2'>
        <h2 className='text-center font-sourceSerif'>{post.data.title}</h2>
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
};

export default PostPage;