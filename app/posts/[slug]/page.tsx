import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';

const getPostContent = (slug: string) => {
  const folder = 'posts/';
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, 'utf8');
  return content;
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const content = getPostContent(slug);
  return (
    <div>
      <h1>This is a post : {slug}</h1>
      <Markdown>{content}</Markdown>
    </div>
    );
  };
  
  export default PostPage;