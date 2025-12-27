import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = ({ fadeClass = 'fade-in' }) => {
    const form = useRef();
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

        // Simple validation
        if (!formData.name || !formData.email || !formData.message) {
            alert('Please fill in all fields.');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Send email using EmailJS
        emailjs.sendForm('service_lob8app', 'template_r1f4v5h', form.current, 'Mmb7QUOcmx_2FHN_T')
            .then((result) => {
                console.log(result.text);
                alert('Thank you for your message! I\'ll get back to you soon.');
                setFormData({ name: '', email: '', message: '' });
            }, (error) => {
                console.log(error.text);
                alert('Failed to send message: ' + JSON.stringify(error));
            });
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2 className="section-title">Let's Work Together</h2>
                <p className="section-subtitle">Get in touch for collaborations, opportunities, or just to connect</p>

                <div className="contact-content">
                    <div className={`contact-info ${fadeClass}`}>
                        <div className="contact-item">
                            <div className="contact-icon">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div className="contact-details">
                                <h4>Email</h4>
                                <a href="mailto:anantanubhav02@gmail.com">anantanubhav02@gmail.com</a>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">
                                <i className="fab fa-linkedin"></i>
                            </div>
                            <div className="contact-details">
                                <h4>LinkedIn</h4>
                                <a href="https://linkedin.com/in/anant-anubhav" target="_blank" rel="noopener noreferrer">linkedin.com/in/anant-anubhav</a>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">
                                <i className="fab fa-github"></i>
                            </div>
                            <div className="contact-details">
                                <h4>GitHub</h4>
                                <a href="https://github.com/anant-anubhav" target="_blank" rel="noopener noreferrer">github.com/anant-anubhav</a>
                            </div>
                        </div>
                    </div>

                    <form ref={form} className={`contact-form ${fadeClass}`} onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
