import React from 'react';

const Navbar = ({ darkMode, setDarkMode }) => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offsetTop = element.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="nav-logo">
                    <span className="logo-text">Portfolio</span>
                </div>
                <ul className="nav-menu">
                    <li><span className="nav-link" onClick={() => scrollToSection('home')}>Home</span></li>
                    <li><span className="nav-link" onClick={() => scrollToSection('about')}>Über mich</span></li>
                    <li><span className="nav-link" onClick={() => scrollToSection('projects')}>Projekte</span></li>
                    <li><span className="nav-link" onClick={() => scrollToSection('skills')}>Skills</span></li>
                    <li><span className="nav-link" onClick={() => scrollToSection('contact')}>Kontakt</span></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;