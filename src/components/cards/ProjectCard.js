import React from 'react';

import CardContainer from './CardContainer';
import CardImage from './CardImage';
import CardTitle from './CardTitle';

const ProjectCard = ({ projectUrl, avatarUrl, title, description }) => {
  return (
    <CardContainer className="card-project">
      <CardImage imageUrl={projectUrl} />
      <CardTitle title={title} />

      <img src={avatarUrl} alt="" className="project-avatar" />
      <p className="project-card-description">{description}</p>
    </CardContainer>
  );
};

export default ProjectCard;
