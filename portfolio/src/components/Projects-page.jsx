// Projects.js

import React from 'react';
import Project from '../components/Project';
import projectsData from '../data/projectsData';

const Projects = () => {
  return (
    <div>
      <h2>Projects</h2>
      {projectsData.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  );
};

export default Projects;
