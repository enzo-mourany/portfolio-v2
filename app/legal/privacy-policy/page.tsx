import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';

import type { PrivacyPolicyPageProps } from '../../../interfaces/PrivacyPolicy';

const getMarkdownContent = (): PrivacyPolicyPageProps => {
  const folder = 'app/legal/privacy-policy/' as string;
  const file = 'privacy.md' as string;
  const path = `${folder}${file}` as string;
  const content = fs.readFileSync(path, 'utf8') as string;
  const { data, content: md } = matter(content) as {
    data: { [key: string]: string };
    content: string;
  };
  return { data, md };
};

const PrivacyPolicyPage = () => {
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

export default PrivacyPolicyPage;