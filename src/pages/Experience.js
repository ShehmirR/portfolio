import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import TimelineItem from '../components/TimelineItem'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1]
        }
    }
};

function Experience() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const experiences = [
        {
            company: "JP Morgan Chase & Co.",
            title: "Software Engineer",
            date: "Aug 2024 - Present",
            highlights: [
                "Modernized NAV analytics platform UI to React, delivering benchmark management subgrids and UX fixes that reduced manual steps and improved task accuracy for end user",
                "Containerized and migrated backend services to AWS EKS; implemented SQS for async messaging, CloudWatch for observability, and Liquibase for versioned schema changes across UAT, QA, and TEST environments, improving rollout consistency and reliability",
                "Hardened APIs and authentication, integrated messaging (Kafka, MQ), and led high-priority defect remediation in partnership with Operations; leveraged AI tools to accelerate analysis and resolution"
            ]
        },
        {
            company: "JP Morgan Chase & Co.",
            title: "Software Engineer Internship",
            date: "Jun 2023 - Aug 2023",
            highlights: [
                "Designed and maintained a complex loan integration program using Figma, React, and NodeJS. Deployed changes through efficient CI/CD pipelines",
                "Led Back-end development, modernizing an outdated SOAP API to a high-performing REST API with Java Spring Boot. Conducted thorough jUnit testing to ensure robust functionality and optimal performance",
                "Developed and deployed an AWS Glue job using pySpark and SQL to efficiently gather, filter, and securely store 10,000+ entries into Amazon S3 Bucket",
                "Skillfully executed Agile tasks, collaborating seamlessly with cross-functional teams using JIRA, Bitbucket, and Kanban methodology for efficient project management"
            ]
        },
        {
            company: "Fluid Group LLC",
            title: "Co-Owner & Full Stack Engineer",
            date: "Nov 2020 – Jul 2022",
            highlights: [
                "Built automation software in JavaScript & Golang to purchase high-demand fashion and accessories acquiring $1M+ of revenue with 10,000+ successfully purchased products between 1,000+ active subscriptions",
                "Developed connection of application using Electron & Exalt JavaScript Framework with the focus on bundle size and cross-platform compatibility",
                "Managed backend involving Golang gRPC for communication between front-end and back-end",
                "Led a team of 5 developers to complete beta & 1.0 of the project, writing over 10,000+ lines of code",
                "Created and maintained WS, a NodeJS WebSocket Library, for centralized processes to decrease load on user's machine"
            ]
        },
        { //education
            company: "University of Texas at Dallas",
            title: "B.S. Computer Science",
            date: "Aug 2020 - May 2024",
            highlights: [
                "Courses: Machine Learning, Computer Vision, Digital Logics, Advanced Data Structures & Algorithms, C++/Linux/Java, Linear Algebra, Probability & Statistics"
            ]
        },
        {
            company: "Marketing Brainology",
            title: "Marketing Specialist",
            date: "Jul 2019 - Mar 2020",
            highlights: [
                "Created advertisements from interviews, projects, and other activities recorded utilizing Final Cut Pro",
                "Recorded data using an EKG into database systems from Excel and improved workflow and organization by 25%",
                "Trained multiple new interns to help reduce work load and increase video output for the company"
            ]
        }
    ];

    return (
        <div id="experience">
            <motion.div
                className="container1"
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
            >
                <motion.h3 className="center-text pb-4" variants={itemVariants} style={{ color: 'var(--bg-primary)' }}>
                    Experience & Education
                </motion.h3>

                <div className="timeline-container">
                    {experiences.map((exp, index) => (
                        <TimelineItem
                            key={index}
                            title={exp.title}
                            company={exp.company}
                            date={exp.date}
                            highlights={exp.highlights}
                            index={index}
                            variants={itemVariants}
                        />
                    ))}
                </div>
            </motion.div>
        </div>
    )
}

export default Experience
