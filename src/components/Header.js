import React, { useState, useEffect } from 'react'
import { motion, useScroll } from 'framer-motion'

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('topPage');
    const { scrollYProgress } = useScroll();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            const sections = ['topPage', 'about', 'experience', 'projects', 'skills'];
            for (const section of sections) {
                const element = document.getElementById(section === 'topPage' ? 'home' : section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 120 && rect.bottom >= 120) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const smoothScroll = (e, targetId) => {
        e.preventDefault();
        const target = document.getElementById(targetId === 'topPage' ? 'home' : targetId);
        if (target) {
            const targetPosition = target.offsetTop - 70;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <motion.div
                className="scroll-progress-bar"
                style={{ scaleX: scrollYProgress }}
            />

            <header
                className={`header ${scrolled ? 'header--scrolled' : ''}`}
                id="topPage"
            >
                <motion.div
                    className="header__content"
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className="header__logo">
                        <a href="#topPage" onClick={(e) => smoothScroll(e, 'topPage')}>
                            <span className="header__logo-text">SR</span>
                            <span className="header__logo-dot">.</span>
                        </a>
                    </div>
                    <nav className="header__nav">
                        <ul>
                            {[
                                { id: 'topPage', label: 'Home' },
                                { id: 'about', label: 'About' },
                                { id: 'experience', label: 'Experience' },
                                { id: 'projects', label: 'Projects' },
                                { id: 'skills', label: 'Skills' }
                            ].map((item) => (
                                <li key={item.id}>
                                    <a
                                        href={`#${item.id}`}
                                        onClick={(e) => smoothScroll(e, item.id)}
                                        className={`header__nav-link ${activeSection === item.id ? 'active' : ''}`}
                                    >
                                        {item.label}
                                        {activeSection === item.id && (
                                            <motion.div
                                                className="header__nav-indicator"
                                                layoutId="nav-indicator"
                                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                            />
                                        )}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </motion.div>
            </header>
        </>
    )
}

export default Header;
