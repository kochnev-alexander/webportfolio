import React from 'react';

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <div className="project-image">
                <div className="project-badge">{project.tech}</div>
            </div>
            <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                    {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                    ))}
                </div>
                <div className="project-links">
                    {project.links.map((link, index) => (
                        <span key={index} className="project-link">{link}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;