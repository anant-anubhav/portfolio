import React from 'react';

const Skills = ({ fadeClass = 'fade-in' }) => {
    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2 className="section-title">Skills & Expertise</h2>
                <p className="section-subtitle">Technologies and tools I work with</p>

                <div className="skills-grid">
                    <div className={`skill-category ${fadeClass}`}>
                        <div className="skill-icon">
                            <i className="fas fa-database"></i>
                        </div>
                        <h3 className="skill-category-title">Languages & Databases</h3>
                        <div className="skill-tags">
                            <span className="skill-tag">Python</span>
                            <span className="skill-tag">SQL (MySQL)</span>
                            <span className="skill-tag">MongoDB</span>
                        </div>
                    </div>

                    <div className={`skill-category ${fadeClass}`}>
                        <div className="skill-icon">
                            <i className="fas fa-layer-group"></i>
                        </div>
                        <h3 className="skill-category-title">ML & Data Stack</h3>
                        <div className="skill-tags">
                            <span className="skill-tag">Pandas</span>
                            <span className="skill-tag">NumPy</span>
                            <span className="skill-tag">Scikit-learn</span>
                            <span className="skill-tag">TensorFlow</span>
                            <span className="skill-tag">Keras</span>
                        </div>
                    </div>

                    <div className={`skill-category ${fadeClass}`}>
                        <div className="skill-icon">
                            <i className="fas fa-brain"></i>
                        </div>
                        <h3 className="skill-category-title">Specializations</h3>
                        <div className="skill-tags">
                            <span className="skill-tag">Deep Learning</span>
                            <span className="skill-tag">NLP</span>
                            <span className="skill-tag">Computer Vision</span>
                            <span className="skill-tag">Predictive Modeling</span>
                        </div>
                    </div>

                    <div className={`skill-category ${fadeClass}`}>
                        <div className="skill-icon">
                            <i className="fas fa-tools"></i>
                        </div>
                        <h3 className="skill-category-title">Tools & Platforms</h3>
                        <div className="skill-tags">
                            <span className="skill-tag">PySpark</span>
                            <span className="skill-tag">Tableau</span>
                            <span className="skill-tag">Power BI</span>
                            <span className="skill-tag">Flask</span>
                            <span className="skill-tag">FastAPI</span>
                            <span className="skill-tag">Streamlit</span>
                            <span className="skill-tag">Git/GitHub</span>
                            <span className="skill-tag">AWS</span>
                            <span className="skill-tag">Azure</span>
                            <span className="skill-tag">Docker</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
