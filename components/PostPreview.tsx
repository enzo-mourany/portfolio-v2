import '../styles/globals.css';

import type { PostMetadata } from '../interfaces/PostMetadata';
import ProjectBox from './ProjectBox';

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