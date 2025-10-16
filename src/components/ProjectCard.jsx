import React from 'react';

const ProjectCard = ({ project }) => {
    // URL Mapping für verschiedene Link-Typen
    const getLinkUrl = (linkName) => {
        const urlMap = {
            'GitHub': project.title.toLowerCase().includes('noetra') 
                ? 'https://github.com/kochnev-alexander/noetra'
                : 'https://github.com/kochnev-alexander/webportfolio',
            'In Planung': '#'
        };
        return urlMap[linkName] || '#';
    };

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
                        <a 
                            key={index}
                            href={getLinkUrl(link)}
                            className="project-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {link}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;