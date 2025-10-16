import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const projects = [
        {
            id: 1,
            title: "Noetra | Hobby und Schulprojekt",
            description: "Ein elegantes Wissensmanagement-System mit Markdown-Unterstützung, Tag-System und Echtzeit-Vorschau.",
            tech: ".NET 9",
            technologies: ["Blazor", "PostgreSQL", "MudBlazor"],
            category: "web",
            links: ["GitHub"]
        },
        {
            id: 2,
            title: "SecureVault - Password Manager \n (COMING SOMEDAY IN THE FUTURE) ",
            description: "Lokaler Passwort-Manager mit AES-Verschlüsselung, Passwort-Generator und Import/Export.",
            tech: "Java",
            technologies: ["Electron", "React", "Node.js", "SQLite"],
            category: "desktop",
            links: ["In Planung"]
        },
        {
            id: 3,
            title: "FinanceFlow - Personal Finance Manager \n (COMING SOMEDAY IN THE FUTURE)",
            description: "Desktop-Anwendung zur persönlichen Finanzverwaltung mit Budget-Tracking, Auswertungen und Export-Funktionen.",
            tech: "Java",
            technologies: ["JavaFX", "SQLite", "..."],
            category: "desktop",
            links: ["In Planung"]
        }
    ];

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => project.category === activeFilter);

    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="section-title">Meine Projekte</h2>

                <div className="projects-filter" style={{ marginBottom: '2rem', textAlign: 'center' }}>
                    {['all', 'web', 'desktop'].map(filter => (
                        <button
                            key={filter}
                            className={`btn ${activeFilter === filter ? 'btn-primary' : 'btn-secondary'}`}
                            onClick={() => setActiveFilter(filter)}
                            style={{ margin: '0 0.5rem' }}
                        >
                            {filter === 'all' ? 'Alle' : filter === 'web' ? 'Web' : 'Desktop'}
                        </button>
                    ))}
                </div>

                <div className="projects-grid">
                    {filteredProjects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;