import React from 'react';
import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
  return (
    <div className="project-container">
      <div className="project-image">
        <img src={project.image} alt={project.title} className="w-full h-auto" />
      </div>

      <div className="project-text">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-tag">{tag}</span>
          ))}
        </div>
        <Link className='readMore' to={`construction`}>Read more</Link>
        
      </div>
    </div>
  );
}
