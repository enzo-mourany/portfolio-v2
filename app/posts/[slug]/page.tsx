import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';

import '../../../styles/globals.css';

import getPostMetadata from '../../../components/getPostMetadata';

const getPostContent = (slug: string) => {
  const folder = 'posts/';
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, 'utf8');
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
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
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <div className='flex flex-col items-center'>
      <article className='prose dark:prose-invert mt-32 max-w-[80%] md:w-1/2'>
        <h1 className='text-center font-sourceSerif'>{post.data.title}</h1>
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
};

export default PostPage;