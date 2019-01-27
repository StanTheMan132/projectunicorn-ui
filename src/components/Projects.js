import React from 'react';
import { Link } from 'react-router-dom';

import SecondaryNavBar from './SecondaryNavBar';
import ProjectCardContainer from './ProjectCardContainer';
import ProjectCard from './cards/ProjectCard';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Mentrship',
      description: 'dev teaching app',
      url: '/projects/mentrship'
    },
    {
      id: 2,
      title: 'Project Unicorn UI',
      description: 'dev community app',
      url: '/projects/project-unicorn-ui'
    },
    {
      id: 3,
      title: 'Project Unicorn UI',
      description: 'dev community app',
      url: '/projects/project-unicorn-ui'
    },
    {
      id: 4,
      title: 'Mentrship',
      description: 'dev teaching app',
      url: '/projects/mentrship'
    },
    {
      id: 5,
      title: 'Project Unicorn UI',
      description: 'dev community app',
      url: '/projects/project-unicorn-ui'
    }
  ];

  const projectList = projects.map(project => {
    return (
      <ProjectCardContainer
        id={project.id}
        url={project.url}
        title={project.title}
        description={project.description}
      />
    );
  });

  return (
    <div className="page">
      <SecondaryNavBar selectedItemIndex={1} />

      <h3 className="my-projects">My Projects</h3>

      <div className="projects">
        {/* First item is not a project, but a link to create a new project */}
        <div className="row">
          <div className="col-md-4">
            <Link to="/projects/create" className="create-project-link">
              <div className="project-card">
                <div className="fa fa-plus create-project-icon" />
              </div>
              <div className="create-project">Create Project</div>
            </Link>
          </div>
          {projectList}
        </div>
      </div>

      <ProjectCard
        projectUrl="/projects/project-unicorn-ui"
        avatarUrl="/avatars/GreenWithMV"
        title="Project Unicorn UI"
        description="dev community project"
      />
    </div>
  );
};

export default Projects;
