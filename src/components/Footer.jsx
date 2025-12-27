
import React from 'react';

const Footer = () => {
    return (
        <footer className="footer" style={{ padding: '60px 0 20px', background: 'rgb(10, 25, 47)', textAlign: 'left' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                <div className="footer-content" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '40px', marginBottom: '40px' }}>

                    {/* Left Section: Brand & Bio */}
                    <div className="footer-left" style={{ flex: '1 1 400px', maxWidth: '600px' }}>
                        <div className="footer-logo" style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <img src="/logo.png" alt="Anant Anubhav Logo" className="logo-small" style={{ height: '40px' }} />
                            <span className="brand-name" style={{ color: 'var(--primary-gold)', fontSize: '1.5rem', fontWeight: 'bold' }}>Anant Anubhav</span>
                        </div>
                        <p className="footer-text" style={{ color: '#8892b0', lineHeight: '1.6', fontSize: '1rem', margin: 0, paddingRight: '20px' }}>
                            I'm currently open to new opportunities in data science, machine learning engineering, and AI consulting. Whether you're looking to build an ML team, need technical expertise, or have an exciting project, let's connect.
                        </p>
                    </div>

                    {/* Right Section: Contact & Social */}
                    <div className="footer-right" style={{ flex: '0 1 auto', minWidth: '300px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <h4 style={{ color: '#ccd6f6', marginBottom: '20px', fontSize: '1.2rem', marginTop: 0 }}>Contact Info</h4>
                        <div className="footer-contact-info" style={{ color: '#8892b0', fontSize: '0.95em', lineHeight: '2', marginBottom: '25px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                                <i className="fas fa-map-marker-alt" style={{ width: '20px', color: 'var(--primary-gold)' }}></i>
                                <span>Bangalore, India • Open to Remote</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                                <i className="fas fa-phone" style={{ width: '20px', color: 'var(--primary-gold)' }}></i>
                                <span>+91 7301701763</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <i className="fas fa-envelope" style={{ width: '20px', color: 'var(--primary-gold)' }}></i>
                                <a href="mailto:anantanubhav02@gmail.com" style={{ color: '#8892b0', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = 'var(--primary-gold)'} onMouseLeave={(e) => e.target.style.color = '#8892b0'}>anantanubhav02@gmail.com</a>
                            </div>
                        </div>

                        <div className="footer-social" style={{ display: 'flex', gap: '20px' }}>
                            <a href="https://linkedin.com/in/anant-anubhav" target="_blank" rel="noopener noreferrer" className="social-link" style={{ fontSize: '1.5rem', color: '#8892b0', transition: 'color 0.3s' }}>
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/anant-anubhav" target="_blank" rel="noopener noreferrer" className="social-link" style={{ fontSize: '1.5rem', color: '#8892b0', transition: 'color 0.3s' }}>
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="mailto:anantanubhav02@gmail.com" className="social-link" style={{ fontSize: '1.5rem', color: '#8892b0', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#64ffda'} onMouseLeave={(e) => e.target.style.color = '#8892b0'}>
                                <i className="fas fa-envelope"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar: Copyright & Terms */}
                <div className="footer-bottom" style={{ borderTop: '1px solid rgba(136, 146, 176, 0.1)', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
                    <p className="footer-copyright" style={{ color: '#8892b0', fontSize: '0.9em', margin: 0 }}>&copy; 2026 Anant Anubhav. All rights reserved.</p>
                    <div className="footer-links" style={{ fontSize: '0.9em', display: 'flex', gap: '20px' }}>
                        <a href="#" style={{ color: '#8892b0', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#64ffda'} onMouseLeave={(e) => e.target.style.color = '#8892b0'}>Privacy Policy</a>
                        <a href="#" style={{ color: '#8892b0', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#64ffda'} onMouseLeave={(e) => e.target.style.color = '#8892b0'}>Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
