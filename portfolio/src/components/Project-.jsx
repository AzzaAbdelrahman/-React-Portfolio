// Project.js

import React from 'react';
import ReactDOM from 'react-router-dom';

const Project = ({ title, deployedLink, githubLink, screenshot }) => {
  return (
    <div>
      <h3>{title}</h3>
      <a href={deployedLink} target="_blank" rel="noopener noreferrer">
        <img src={screenshot} alt={`${title} Screenshot`} />
      </a>
      <p>GitHub: <a href={githubLink} target="_blank" rel="noopener noreferrer">{githubLink}</a></p>
    </div>
  );
};

export default Project;
