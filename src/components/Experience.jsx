import React from 'react';

const Experience = ({ fadeClass = 'fade-in' }) => {
    return (
        <section id="experience" className="experience">
            <div className="container">
                <h2 className="section-title">Work Experience</h2>
                <p className="section-subtitle">Professional journey and key contributions</p>

                <div className="timeline">
                    <div className={`timeline-item ${fadeClass}`}>
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <div className="timeline-header">
                                <h3 className="timeline-role">Associate Analyst</h3>
                                <span className="timeline-company">GlobalLogic</span>
                                <span className="timeline-date">Mar 2024 - May 2025</span>
                            </div>
                            <div className="timeline-location" style={{ fontSize: '0.9em', color: '#8892b0', marginBottom: '10px', display: 'block' }}>Gurugram, India</div>
                            <ul className="timeline-contributions">
                                <li>Contributed to Google’s Product Identity Project within the Data Platform & Intelligence division, focusing on enhancing Google Search techniques and knowledge panel development.</li>
                                <li>Conducted end-to-end functional analysis of business flows to support data platform intelligence and address client requirements.</li>
                                <li>Utilized data analysis and problem-solving skills to improve data management principles and contribute to project goals.</li>
                            </ul>
                        </div>
                    </div>

                    <div className={`timeline-item ${fadeClass}`}>
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <div className="timeline-header">
                                <h3 className="timeline-role">Network Operation Associate</h3>
                                <span className="timeline-company">UST Global</span>
                                <span className="timeline-date">Jun 2023 - Mar 2024</span>
                            </div>
                            <div className="timeline-location" style={{ fontSize: '0.9em', color: '#8892b0', marginBottom: '10px', display: 'block' }}>Noida, India</div>
                            <ul className="timeline-contributions">
                                <li>Monitored and analyzed alarm data from core network elements (2G/3G/4G) to identify and troubleshoot systemic issues, ensuring resolution within SLA.</li>
                                <li>Provided advanced technical support, leveraging analytical skills for troubleshooting and maintenance of complex telecommunications systems.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
