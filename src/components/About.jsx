import React from "react";
import { motion } from "framer-motion";

import homepageImg from "../assets/homepage2.png";
import homepageImg2 from "../assets/homepage.png";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";

const aboutVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.5, // delay between children animations
    },
  },
};

const lineVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => {
  return (
    <div>
      {/* Top Image */}
      <motion.img
        src={homepageImg}
        alt="SVK Robotics Hand 1"
        className="w-auto h-[25vh] object-contain"
        variants={fadeIn("left", "spring", 0.3, 1)}
        initial="hidden"
        animate="show"
        viewport={{ once: true, amount: 0.6 }}
      />

      {/* Welcome Text */}
      <motion.div
        className="text-center"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.4,
            },
          },
        }}
      >
        <motion.h2
          className="text-2xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-[#a0e9ff] via-white to-[#ffffff] bg-clip-text"
          variants={{
            hidden: { opacity: 0, y: -20 },
            show: { opacity: 1, y: 0 },
          }}
        >
          Welcome too
        </motion.h2>

        <motion.h2
          className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-[#1e6fcc] via-white to-[#3399ff] text-transparent bg-clip-text"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
        >
          {"SVK Robotics".split("").map((char, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
          <span className="ml-1 animate-pulse text-white">|</span>
        </motion.h2>
      </motion.div>

      {/* Bottom Image */}
      <div className="w-full flex justify-end mb-40">
        <motion.img
          src={homepageImg2}
          alt="SVK Robotics Hand 2"
          className="w-auto h-[25vh] object-contain"
          variants={fadeIn("right", "spring", 0.7, 1)}
          initial="hidden"
          animate="show"
          viewport={{ once: true, amount: 0.6 }}
        />
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
