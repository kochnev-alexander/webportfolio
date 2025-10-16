import React from 'react';
import meinFoto from './assets/meinFoto.png';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <h2 className="section-title">Über mich</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            Schon früh habe ich meine Leidenschaft für IT entdeckt.
                            An der EDV-Schule Plattling konnte ich mein Wissen vertiefen und praktisch anwenden.
                            Jetzt, im dritten Ausbildungsjahr, bin ich bereit, mein Können
                            im Berufsleben einzusetzen und weiterzuentwickeln.
                        </p>
                        <div className="about-stats">
                            <div className="stat">
                                <span className="stat-number">2+</span>
                                <span className="stat-label">Jahre Erfahrung</span>
                            </div>
                            <div className="stat">
                                <span className="stat-number">1</span>
                                <span className="stat-label">Großes Haupt Projekt</span>
                            </div>
                            <div className="stat">
                                <span className="stat-number">100%</span>
                                <span className="stat-label">Passion</span>
                            </div>
                        </div>
                    </div>
                    <div className="about-sidebar">
                        <div className="about-image">
                            <div className="image-placeholder">
                                <img src={meinFoto} alt="Alexander Kochnev" className="profile-image" />
                            </div>
                        </div>
                        <div className="about-social">
                            <div className="social-links">
                                <a
                                    href="https://github.com/kochnev-alexander"
                                    className="social-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;