import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Vielen Dank für deine Nachricht! Ich melde mich bald bei Ihnen.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2 className="section-title">Kontakt</h2>
                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Hier können sie mich erreichen !</h3>
                        <br />
                        <p>Ich bin immer offen für neue Herausforderungen und Partnerschaften.</p>
                        <br />
                        <div className="contact-details">
                            <div className="contact-item">
                                <span className="contact-icon">✉️</span>
                                <span>kochnevalexander473@gmail.com</span>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon">📱</span>
                                <span>+49 1523 4390346</span>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon">📍</span>
                                <span>Straubing, Deutschland</span>
                            </div>
                        </div>
                    </div>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Ihr Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Ihre E-Mail"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Ihre Nachricht"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                        <br />
                        <button type="submit" className="btn btn-primary">
                            Nachricht senden
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;