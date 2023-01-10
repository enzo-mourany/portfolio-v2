import '../styles/globals.css';

import ProjectBox from './ProjectBox';

import type { PostMetadata } from './PostMetadata';

const postPreview = (props: PostMetadata) => {
  return (
    <ProjectBox
      slug={props.slug}
      projectType={props.type}
      projectDate={props.date}
      projectTitle={props.title}
      techs={props.techs} />
  )
};

export default postPreview;