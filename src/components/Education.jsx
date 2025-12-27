import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
    const education = [
        {
            degree: 'B.Tech in Computer Science Engineering',
            institution: 'IES College of Technology, Bhopal',
            duration: 'Jul 2019 – May 2023',
        },
        {
            degree: '12th Grade (Senior Secondary)',
            institution: 'Kendriya Vidyalaya Jawahar Nagar, Sitamarhi',
            duration: 'Jul 2018 – Jul 2019',
        },
        {
            degree: '10th Grade (Secondary)',
            institution: 'Kendriya Vidyalaya Jawahar Nagar, Sitamarhi',
            duration: 'Jul 2016 – Jul 2017',
        },
    ];

    const certifications = [
        {
            name: 'OCI Data Science Professional',
            issuer: 'Oracle',
            date: 'Sep 2025',
        },
        {
            name: 'OCI Generative AI Professional',
            issuer: 'Oracle',
            date: 'Aug 2025',
        },
        {
            name: 'OCI Certified AI Foundations Associate',
            issuer: 'Oracle',
            date: 'Aug 2025',
        },
    ];

    return (
        <section id="education" className="education">
            <div className="container">
                <div className="education-content">

                    {/* Education Column */}
                    <div className="education-column">
                        <div className="section-title-left">
                            <div className="icon-box">
                                <GraduationCap size={24} />
                            </div>
                            <h2 className="column-title">Education</h2>
                        </div>

                        <div className="card-stack">
                            {education.map((item, index) => (
                                <div key={index} className="section-card education-card hover-effect">
                                    <h3 className="card-title">{item.degree}</h3>
                                    <p className="card-subtitle">{item.institution}</p>
                                    <p className="card-meta">{item.duration}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications Column */}
                    <div className="education-column">
                        <div className="section-title-left">
                            <div className="icon-box">
                                <Award size={24} />
                            </div>
                            <h2 className="column-title">Certifications</h2>
                        </div>

                        <div className="card-stack">
                            {certifications.map((cert, index) => (
                                <div key={index} className="section-card education-card hover-effect">
                                    <h3 className="card-title">{cert.name}</h3>
                                    <div className="card-row">
                                        <p className="card-subtitle">{cert.issuer}</p>
                                        <span className="badge">{cert.date}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Education;
