import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08
        }
    }
};

const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1]
        }
    }
};

function Projects() {
    const carouselRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const projects = [
        {
            title: "Price Error Monitor",
            description: "Built scalable e-commerce monitoring system processing 50K+ products with concurrent workers and Redis for real-time pricing error detection, achieving sub-3-minute full scans integrating TLS fingerprinting for anti-bot bypass and intelligent proxy rotation across distributed requests.",
            stack: ["Golang", "Redis", "TLS Client", "Discord API", "Concurrent Programming", "REST Api"],
            github: "https://github.com/ShehmirR/",
            demo: "https://github.com/ShehmirR/"
        },
        {
            title: "NFL Fantasy Football ML Predictor",
            description: "Engineered end-to-end ML pipeline with 4-model ensemble (Random Forest, Gradient Boosting, XGBoost, LightGBM) predicting fantasy points for 2,000+ active NFL players using 15+ years of historical data.",
            stack: ["Python", "XGBoost", "LightGBM", "Scikit-Learn", "Pandas", "NumPy"],
            github: "https://github.com/ShehmirR/ml-fantasy-football-predictor",
            demo: "https://github.com/ShehmirR/"
        },
        {
            title: "HackUTD Hackathon Project",
            description: "Curated and analyzed a dataset of 15,000+ data points for EOG to rank optimal drill bits based on depth and material. Implemented personalized chatbot and visually immersive front-end.",
            stack: ["Python", "Pandas", "NumPy", "MaterialUI", "Recharts", "Dialogflow"],
            github: "https://github.com/ShehmirR/hackathon-eog-2023",
            demo: "https://github.com/ShehmirR/"
        },
        {
            title: "eBay Discount Discord Bot",
            description: "Created a Discord Bot that identifies discounted items, compares prices to marketplace, and filters items to maximize profit.",
            stack: ["Python", "eBay Api", "Discord API", "AWS"],
            github: "https://github.com/ShehmirR/",
            demo: "https://github.com/ShehmirR/"
        },
        {
            title: "COVID Essentials Monitor",
            description: "Developed a Python program to monitor essential item availability across major retail sites. Utilized Python's Requests for data retrieval and BeautifulSoup4 for parsing.",
            stack: ["Python", "Requests", "BS4", "Discord API", "AWS"],
            github: "https://github.com/ShehmirR/",
            demo: "https://github.com/ShehmirR/"
        }
    ];

    const scroll = (direction) => {
        if (carouselRef.current) {
            const container = carouselRef.current;
            const cardWidth = window.innerWidth <= 480 ? 300 + 32 : window.innerWidth <= 768 ? 300 + 32 : 360 + 32;
            const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });

            setTimeout(() => {
                const newIndex = Math.round(container.scrollLeft / cardWidth);
                setCurrentIndex(newIndex);
            }, 350);
        }
    };

    const scrollToIndex = (index) => {
        if (carouselRef.current) {
            const cardWidth = window.innerWidth <= 480 ? 300 + 32 : window.innerWidth <= 768 ? 300 + 32 : 360 + 32;
            carouselRef.current.scrollTo({ left: cardWidth * index, behavior: 'smooth' });
            setCurrentIndex(index);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (carouselRef.current) {
                const container = carouselRef.current;
                const cardWidth = window.innerWidth <= 480 ? 300 + 32 : window.innerWidth <= 768 ? 300 + 32 : 360 + 32;
                const newIndex = Math.round(container.scrollLeft / cardWidth);
                setCurrentIndex(newIndex);
            }
        };

        const carousel = carouselRef.current;
        if (carousel) {
            carousel.addEventListener('scroll', handleScroll, { passive: true });
            return () => carousel.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <motion.div
            id="projects"
            className="projects container1"
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
        >
            <motion.h3 className="section__title center-text dark-color" variants={titleVariants}>
                Projects
            </motion.h3>


            <motion.div className="projects__carousel-container" variants={titleVariants}>
                <button
                    className="carousel__nav-btn carousel__nav-btn--left"
                    onClick={() => scroll('left')}
                    aria-label="Previous project"
                >
                    ‹
                </button>

                <div className="projects__carousel-wrapper" ref={carouselRef}>
                    <div className="projects__carousel">
                        {projects.map((project, index) => (
                            <div className="project" key={index}>
                                <h3 className="secondary-title project__title">{project.title}</h3>
                                <p className="project__description medium-color">
                                    {project.description}
                                </p>
                                <ul className="project__stack">
                                    {project.stack.map((tech, i) => (
                                        <li className="project__stack-item" key={i}>
                                            {tech}
                                        </li>
                                    ))}
                                </ul>
                                <div className="project__links">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="source code"
                                        className="link link--icon"
                                    >
                                        <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"></path>
                                        </svg>
                                    </a>
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="live preview"
                                        className="link link--icon"
                                    >
                                        <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    className="carousel__nav-btn carousel__nav-btn--right"
                    onClick={() => scroll('right')}
                    aria-label="Next project"
                >
                    ›
                </button>
            </motion.div>

            <motion.div className="carousel__indicators" variants={titleVariants}>
                {projects.map((_, index) => (
                    <button
                        key={index}
                        className={`carousel__indicator ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => scrollToIndex(index)}
                        aria-label={`Go to project ${index + 1}`}
                    />
                ))}
            </motion.div>
        </motion.div>
    )
}

export default Projects
