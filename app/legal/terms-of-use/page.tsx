import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';

import type { TermsOfUse } from '../../../interfaces/TermsOfUse';

const getMarkdownContent = (): TermsOfUse => {
  const folder = 'app/legal/terms-of-use/' as string;
  const file = 'privacy.md' as string;
  const path = `${folder}${file}` as string;
  const content = fs.readFileSync(path, 'utf8') as string;
  const { data, content: md } = matter(content) as {
    data: { [key: string]: string };
    content: string;
  };
  return { data, md };
};

const Terms = () => {
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

export default Terms;