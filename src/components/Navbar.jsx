import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        closeMenu();
        const target = document.querySelector(targetId);
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} style={scrolled ? { boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' } : { boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' }}>
            <div className="container">
                <div className="nav-brand">
                    <img src="/logo.png" alt="Anant Anubhav Logo" className="logo-small" />
                    <span className="brand-name">Anant Anubhav</span>
                </div>

                <div className="nav-right">
                    <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                        <li><a href="#home" className="nav-link" onClick={(e) => handleNavClick(e, '#home')}>Home</a></li>
                        <li><a href="#skills" className="nav-link" onClick={(e) => handleNavClick(e, '#skills')}>Skills</a></li>
                        <li><a href="#projects" className="nav-link" onClick={(e) => handleNavClick(e, '#projects')}>Projects</a></li>
                        <li><a href="#experience" className="nav-link" onClick={(e) => handleNavClick(e, '#experience')}>Experience</a></li>
                        <li><a href="#contact" className="nav-link" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a></li>
                    </ul>

                    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
                        <i className={`fas ${theme === 'dark' ? 'fa-moon' : 'fa-sun'}`}></i>
                    </button>

                    <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
