import '../styles/globals.css';
import getPostMetadata from '../components/getPostMetadata';
import PostPreview from '../components/PostPreview';

import About from '../components/About';
import HomePage from './HomePage';

const Page = () => {
  const postMetadata = getPostMetadata();
  const postPreview = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));
  return (
    <div className="flex flex-col items-center">
      <HomePage />
      <About />
      <div className="flex flex-col items-end w-11/12">
        {postPreview}
      </div>
    </div>
  )
};

export default Page;
