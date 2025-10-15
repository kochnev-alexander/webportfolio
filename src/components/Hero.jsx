import React, { useEffect, useState } from 'react';

const Hero = () => {
    const [displayedText, setDisplayedText] = useState('');
    const fullText = 'Alexander Kochnev ';

    useEffect(() => {
        let i = 0;
        const typing = setInterval(() => {
            if (i < fullText.length) {
                setDisplayedText(fullText.slice(0, i + 1));
                i++;
            } else {
                clearInterval(typing);
            }
        }, 150);

        return () => clearInterval(typing);
    }, []);

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
        <section id="home" className="hero">
            <div className="hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        <span className="gradient-text">Hallo, ich bin</span><br />
                        <span className="hero-name">{displayedText}</span>
                    </h1>
                    <p className="hero-subtitle">
                        Fachinformatiker in Anwendungsentwicklung
                    </p>
                    <div className="hero-buttons">
                        <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
                            Meine Projekte
                        </button>
                        <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
                            Kontakt aufnehmen
                        </button>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="code-animation">
                        <div className="code-line"></div>
                        <div className="code-line"></div>
                        <div className="code-line"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;