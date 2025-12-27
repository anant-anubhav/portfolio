import React from 'react';

const Hero = () => {
    // Scroll effect removed for normal transition


    return (
        <section id="home" className="hero">
            <div className="container">
                <div className="hero-content">
                    <div className="logo-container">
                        <img src="/logo.png" alt="Anant Anubhav Logo" className="hero-logo" />
                    </div>
                    <h1 className="hero-title">Anant Anubhav</h1>
                    <p className="hero-subtitle">Data Scientist</p>
                    <p className="hero-description">Transforming complex data into intelligent decisions through advanced machine learning and analytical excellence.</p>
                    <div className="hero-buttons">
                        <a href="#projects" className="btn btn-primary" onClick={(e) => {
                            e.preventDefault();
                            const target = document.querySelector('#projects');
                            if (target) {
                                window.scrollTo({
                                    top: target.offsetTop - 80,
                                    behavior: 'smooth'
                                });
                            }
                        }}>View Projects</a>
                        <a href="/resume.pdf" className="btn btn-secondary" download>Download Resume</a>
                    </div>

                    <div className="hero-about" style={{ marginTop: '3rem', maxWidth: '800px', margin: '3rem auto 0' }}>
                        <h2 style={{ color: 'var(--primary-gold)', fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>Passionate About Data Intelligence</h2>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.05rem' }}>
                            Data Scientist with proven expertise in Machine Learning, Deep Learning, NLP, and Computer Vision. Built an intrusion detection system with 99.92% accuracy using ensemble methods and a multimodal similarity engine combining Word2Vec and ResNet50. Proficient in Python, TensorFlow, PyTorch, and SQL, with experience in delivering data-driven insights and scalable solutions.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
