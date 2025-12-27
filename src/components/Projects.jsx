import React from 'react';

const Projects = ({ fadeClass = 'fade-in' }) => {
    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <p className="section-subtitle">Real-world solutions powered by data science</p>

                <div className="projects-grid">
                    <div className={`project-card ${fadeClass}`} style={{ animationDelay: '0s' }}>
                        <div className="project-header">
                            <div className="project-icon">
                                <i className="fas fa-home"></i>
                            </div>
                            <h3 className="project-title">Home Loan Default – Risk Management</h3>
                        </div>
                        <div className="project-description" style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                            <ul style={{ paddingLeft: '20px', margin: 0 }}>
                                <li>Built a credit–risk classification system using Random Forest, XGBoost, CatBoost and LightGBM on multi–source borrower data.</li>
                                <li>Used SMOTE + class weights to handle imbalance, achieving ROC–AUC 0.72 with higher recall on likely defaulters.</li>
                                <li>Final Random Forest delivered 84% accuracy and 0.69 ROC–AUC, improving high–risk applicant detection.</li>
                                <li>Applied SHAP/LIME for interpretable, regulator–friendly credit decisions.</li>
                            </ul>
                        </div>
                        <div className="project-tech">
                            <span className="tech-tag">Python</span>
                            <span className="tech-tag">Machine Learning</span>
                            <span className="tech-tag">SMOTE</span>
                            <span className="tech-tag">SHAP/LIME</span>
                        </div>
                        <div className="project-outcome">
                            <strong>Impact:</strong> 84% Accuracy, Improved Risk Detection
                        </div>
                    </div>

                    <div className={`project-card ${fadeClass}`} style={{ animationDelay: '0.1s' }}>
                        <div className="project-header">
                            <div className="project-icon">
                                <i className="fas fa-chart-line"></i>
                            </div>
                            <h3 className="project-title">House Price Prediction – Advanced Regression</h3>
                        </div>
                        <div className="project-description" style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                            <ul style={{ paddingLeft: '20px', margin: 0 }}>
                                <li>Built an end–to–end regression pipeline comparing Linear, Ridge, Lasso and XGBoost models for property price forecasting.</li>
                                <li>Improved generalization via robust cross–validation and hyperparameter search, producing more stable and reliable price predictions.</li>
                            </ul>
                        </div>
                        <div className="project-tech">
                            <span className="tech-tag">Python</span>
                            <span className="tech-tag">Data Analysis</span>
                            <span className="tech-tag">Regression Models</span>
                            <span className="tech-tag">XGBoost</span>
                        </div>
                        <div className="project-outcome">
                            <strong>Impact:</strong> Stable & Reliable Price Predictions
                        </div>
                    </div>

                    <div className={`project-card ${fadeClass}`} style={{ animationDelay: '0.2s' }}>
                        <div className="project-header">
                            <div className="project-icon">
                                <i className="fas fa-leaf"></i>
                            </div>
                            <h3 className="project-title">Rice Leaf Disease Prediction – CNN</h3>
                        </div>
                        <div className="project-description" style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                            <ul style={{ paddingLeft: '20px', margin: 0 }}>
                                <li>Developed a convolutional neural network model for early detection of rice leaf diseases from raw leaf images.</li>
                                <li>Enabled proactive crop protection by learning discriminative leaf–level patterns, minimizing potential yield loss.</li>
                            </ul>
                        </div>
                        <div className="project-tech">
                            <span className="tech-tag">Python</span>
                            <span className="tech-tag">Deep Learning</span>
                            <span className="tech-tag">CNN</span>
                            <span className="tech-tag">Keras</span>
                        </div>
                        <div className="project-outcome">
                            <strong>Impact:</strong> Early Disease Detection, Optimized Yield
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
