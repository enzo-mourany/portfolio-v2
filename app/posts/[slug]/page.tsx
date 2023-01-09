import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';

import '../../../styles/globals.css';

import getPostMetadata from '../../../components/getPostMetadata';

const getPostContent = (slug: string) => {
  const folder = 'api/posts/';
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
    <div>
      <h1>{post.data.title}</h1>
      <Markdown>{post.content}</Markdown>
    </div>
    );
  };
  
  export default PostPage;