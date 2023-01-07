import getPostMetadata from '../components/getPostMetadata';
import PostPreview from '../components/PostPreview';

const Page = () => {
  const postMetadata = getPostMetadata();
  const postPreview = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));
  return (
    <div>{postPreview}</div>
  )
};

export default Page;
