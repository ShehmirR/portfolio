import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2
        }
    }
};

const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1]
        }
    }
};

const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1]
        }
    }
};

function About() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.15
    });

    return (
        <section
            className="section about-section gray-bg"
            id="about"
            ref={ref}
        >
            <div className="container1">
                <motion.div
                    className="row align-items-center flex-row-reverse"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    <motion.div
                        className="col-lg-6"
                        variants={imageVariants}
                    >
                        <div className="about-avatar">
                            <img
                                src={require('../assets/Shehmir.PNG')}
                                title="Shehmir Rangwala"
                                alt="Shehmir Rangwala"
                            />
                        </div>
                    </motion.div>
                    <motion.div
                        className="col-lg-6"
                        variants={textVariants}
                    >
                        <div>
                            <h3 className="light-color aboutMe">
                                About Me
                            </h3>
                            <h6 className="light-color lead">
                                SWE @ JPMorganChase | Plano, Texas
                            </h6>
                            <p className="light-color">
                                Software Engineer at JPMorgan Chase and UT Dallas alum. I care about finding patterns in complex systems and using those insights to design clean abstractions, simplify workflows, and ship reliable software. Problem solving keeps me going. I like taking a tough issue apart, tracing it to the root, and putting it back together in a way that makes sense.
                            </p>
                            <p className="light-color">
                                Day to day I build data informed, cloud native services and user experiences. I work with React and TypeScript on the front end, Java and Spring Boot for APIs, and containerized workloads on AWS with CI/CD, observability, and messaging. Recent work includes migrating legacy components to modern stacks, strengthening integrations and authentication, automating schema versioning, and improving reporting. The focus is reliability, faster releases, and less manual effort.
                            </p>
                            <p className="light-color">
                                My goal is to raise the standard of development and UX with measurable impact and software people trust every day.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default About
