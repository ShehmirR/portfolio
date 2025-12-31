import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
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

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1]
        }
    }
};

function Skills() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const skills = [
        "Java", "JavaScript", "TypeScript", "Python", "Golang", "SQL", "C++",
        "AWS", "Docker", "Kubernetes", "Jenkins", "CI/CD",
        "Spring Boot", "React", "NodeJS", "REST", "gRPC",
        "Kafka", "PostgreSQL", "MongoDB",
        "Git", "JIRA", "Agile/Scrum",
        "Scikit-Learn", "XGBoost", "LightGBM", "Pandas", "NumPy"
    ];

    return (
        <div id="skills">
            <motion.div
                className="container1"
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
            >
                <motion.h3 className="center-text dark-color pb-4" variants={titleVariants}>
                    Skills
                </motion.h3>

                <motion.div className="skills-grid" variants={titleVariants}>
                    {skills.map((skill, index) => (
                        <motion.div
                            className="skill-item"
                            key={index}
                            variants={cardVariants}
                            whileHover={{ scale: 1.05, y: -4 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            {skill}
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div className="skills-certs" variants={titleVariants}>
                    <h4>Certifications</h4>
                    <div className="certs-list">
                        <span>AWS Certified Cloud Practitioner</span>
                        <span>PSM I</span>
                        <span>Eagle Scout</span>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Skills