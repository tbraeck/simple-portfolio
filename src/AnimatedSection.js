import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedSection = ({ title, children, sectionRef, sectionClass }) => {
  const sectionVariants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.section
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      variants={sectionVariants}
      ref={sectionRef}
      className={`section ${sectionClass}`}
    >
      <h2>{title}</h2>
      <AnimatePresence>
        <div className="project-cards">{children}</div>
      </AnimatePresence>
    </motion.section>
  );
};

export default AnimatedSection;
