import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

// Animation variants for "About Us"
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

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      {/* About Us Section */}
      <section className="mt-20">
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
            We specialize in turning innovative ideas into real-world
            applications — if you have a vision, we can bring it to life.
          </motion.p>
        </motion.div>
      </section>

      {/* Timeline Section Title */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What we have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Some of our Projects
        </h2>
      </motion.div>

      {/* Timeline Component */}
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
