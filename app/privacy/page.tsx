import fs from 'fs';
import React from 'react';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';

const getMarkdownContent = () => {
  const folder = 'app/privacy/';
  const file = 'privacy.md';
  const path = `${folder}${file}`;
  const content = fs.readFileSync(path, 'utf8');
  const { data, content: md } = matter(content);
  return { data, md };
};

const Page: React.FC = () => {
  return (
    <div className='flex flex-col items-center'>
      <article className='prose mt-32 max-w-[80%] md:w-1/2'>
        <Markdown>
          {getMarkdownContent().md}
        </Markdown>
      </article>
    </div>
  );
};

export default Page;