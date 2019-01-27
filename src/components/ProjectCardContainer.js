import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({ id, url, title, description }) => {
  return (
    <div className="col-lg-4" key={id}>
      <Link to={url}>
        <div className="project-card" />
      </Link>
      <Link to={url} className="project-title">
        {title}
      </Link>
      <div className="project-description">{description}</div>
      <Link to={url}>
        <div className="fa fa-user fa-2x project-avatar" />
      </Link>
    </div>
  );
};

export default Project;
