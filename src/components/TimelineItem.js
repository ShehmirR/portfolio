import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function TimelineItem({ title, company, date, highlights, index, variants }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            className="timeline-item"
            variants={variants}
        >
            <div className="timeline-marker">
                <div className="timeline-dot"></div>
                {index !== 'last' && <div className="timeline-line"></div>}
            </div>

            <motion.div
                className="timeline-content"
                whileHover={{ x: 8 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
                <div className="timeline-header">
                    <div>
                        <h6 className="timeline-title">{company}</h6>
                        <p className="timeline-subtitle">{title}</p>
                    </div>
                    <time className="timeline-date">{date}</time>
                </div>

                <AnimatePresence>
                    {isExpanded ? (
                        <motion.ul
                            className="timeline-details"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {highlights.map((highlight, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    {highlight}
                                </motion.li>
                            ))}
                        </motion.ul>
                    ) : (
                        <motion.p
                            className="timeline-preview"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            {highlights[0]}
                        </motion.p>
                    )}
                </AnimatePresence>

                <button
                    className="timeline-toggle"
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    {isExpanded ? 'Read less' : 'Read more...'}
                    <motion.span
                        className="toggle-icon"
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        ↓
                    </motion.span>
                </button>
            </motion.div>
        </motion.div>
    );
}

export default TimelineItem;
