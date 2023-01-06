import getPostMetadata from '../components/getPostMetadata';
import PostPreview from '../components/PostPreview';

const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreview = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));
  return (
    <div>{postPreview}</div>
  )
};

export default HomePage;
