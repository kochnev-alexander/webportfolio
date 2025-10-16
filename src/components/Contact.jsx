// import React, { useState } from 'react';

// const Contact = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         message: ''
//     });

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         alert('Vielen Dank für deine Nachricht! Ich melde mich bald bei Ihnen.');
//         setFormData({ name: '', email: '', message: '' });
//     };

//     return (
//         <section id="contact" className="contact">
//             <div className="container">
//                 <h2 className="section-title">Kontakt</h2>
//                 <div className="contact-content">
//                     <div className="contact-info">
//                         <h3>Hier können sie mich erreichen !</h3>
//                         <br />
//                         <p>Ich bin immer offen für neue Herausforderungen und Partnerschaften.</p>
//                         <br />
//                         <div className="contact-details">
//                             <div className="contact-item">
//                                 <span className="contact-icon">✉️</span>
//                                 <span>kochnevalexander473@gmail.com</span>
//                             </div>
//                             <div className="contact-item">
//                                 <span className="contact-icon">📱</span>
//                                 <span>+49 1523 4390346</span>
//                             </div>
//                             <div className="contact-item">
//                                 <span className="contact-icon">📍</span>
//                                 <span>Straubing, Deutschland</span>
//                             </div>
//                         </div>
//                     </div>
//                     <form  onSubmit={handleSubmit}>
//                         <input
//                             type="text"
//                             name="name"
//                             placeholder="Ihr Name"
//                             value={formData.name}
//                             onChange={handleChange}
//                             required
//                         />
//                         <input
//                             type="email"
//                             name="email"
//                             placeholder="Ihre E-Mail"
//                             value={formData.email}
//                             onChange={handleChange}
//                             required
//                         />
//                         <textarea
//                             name="message"
//                             placeholder="Ihre Nachricht"
//                             rows="5"
//                             value={formData.message}
//                             onChange={handleChange}
//                             required
//                         ></textarea>
//                         <br />
//                         <button type="submit" >
//                             Nachricht senden
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Contact;

import React, { useState } from "react";

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    access_key: "cb25bc8e-5138-4354-a923-eb6581e44f88",
                    ...formData
                }),
            });

            const result = await response.json();
            if (result.success) {
                alert("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            } else {
                alert("Failed to send message. Please try again.");
            }
        } catch (error) {
            alert("An error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
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
                    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
                        <h2>Contact Us</h2>
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div style={{ marginBottom: "15px" }}>
                                <label htmlFor="name">Name:</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    style={{ width: "550px", padding: "8px", marginTop: "5px" }}
                                />
                            </div>

                            <div style={{ marginBottom: "15px" }}>
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                                />
                            </div>

                            <div style={{ marginBottom: "15px" }}>
                                <label htmlFor="message">Nachricht:</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={isSubmitting}
                                style={{
                                    background: "#53347fff",
                                    color: "white",
                                    padding: "10px 20px",
                                    border: "none",
                                    borderRadius: "4px",
                                    cursor: isSubmitting ? "not-allowed" : "pointer"
                                }}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactForm;