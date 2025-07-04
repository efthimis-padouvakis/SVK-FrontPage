import React from "react";
import { motion } from "framer-motion";

// Animation variants
const aboutVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const lineVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const AboutSection = () => {
  return (
    <section id="aboutSection" className="relative scroll-mt-24 pt-4 mt-20">
      <motion.div
        className="max-w-3xl mx-auto px-4 text-center text-white/90 text-base md:text-lg leading-relaxed"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={aboutVariants}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-8"
          variants={lineVariants}
        >
          About us
        </motion.h1>

        <motion.p className="mt-4" variants={lineVariants}>
          We are a technology company creating smart solutions for
          municipalities, businesses, and schools.
        </motion.p>

        <motion.p className="mt-4" variants={lineVariants}>
          Our work spans mobile and web development, as well as automation
          systems using microcontrollers like the ESP32.
        </motion.p>

        <motion.p className="mt-4" variants={lineVariants}>
          We specialize in turning innovative ideas into real-world applications
          — if you have a vision, we can bring it to life.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default AboutSection;
