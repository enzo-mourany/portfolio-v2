import React from 'react';

import type { PostMetadata } from '../interfaces/PostMetadata';
import ProjectBox from './ProjectBox';

const SelectedProjects: React.FC<PostMetadata> = (props: PostMetadata) => {
  return (
    <div>
      <ProjectBox slug={props.slug} projectType='Test' projectDate={props.date} projectTitle={props.title} techs={['test1', 'test2']} />
    </div>
  )
};

export default SelectedProjects;