import React from 'react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Gute Kenntnisse",
            skills: [
                { name: "C# & .NET" },
                { name: "Java/Quarkus" },
                { name: "Git" },
                { name: "Python" },
                { name: "Blazor" },
                { name: "HTML & CSS" }
            ]
        },
        {
            title: "Lerne gerade",
            skills: [
                { name: "JavaScript" },
                { name: "TypeScript" },
                { name: "TailScript" },
                { name: "React" },
                { name: "Vite" }
            ]
        },
        {
            title: "Geplant zu lernen",
            skills: [
                { name: "Kubernetes" },
                { name: "Angular" },
                { name: "Vue.js" },
                { name: "Docker" }
            ]
        }
    ];

    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2 className="section-title">Technologien & Skills</h2>
                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-category">
                            <h3 className="skill-category-title">{category.title}</h3>
                            <div className="skill-tags">
                                {category.skills.map((skill, skillIndex) => (
                                    <span key={skillIndex} className="skill-tag">
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;