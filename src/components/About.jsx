import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// const ServiceCard = ({ index, title, icon }) => (
//   <Tilt
//     tiltMaxAngleX={45}
//     tiltMaxAngleY={45}
//     scale={1}
//     transitionSpeed={450}
//     className="xs:w-[250px] w-full"
//   >
//     <motion.div
//       variants={fadeIn("right", "spring", index * 0.5, 0.75)}
//       className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
//     >
//       <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
//         <img
//           src={icon}
//           alt="web-development"
//           className="w-16 h-16 object-contain"
//         />
//         <h3 className="text-white text-[20px] font-bold text-center">
//           {title}
//         </h3>
//       </div>
//     </motion.div>
//   </Tilt>
// );

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>About SVK Robotics</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        SVK Robotics is a leading provider of innovative robotics and
        mechatronic solutions. We specialize in designing and developing
        advanced robotic systems that cater to a wide range of industries. Our
        team is dedicated to creating cutting-edge custom robotic solutions,
        from industrial automation to tailored projects. In addition to
        providing solutions for businesses, we offer educational robotics kits
        designed to inspire and educate the next generation of engineers and
        innovators. We also offer expertise in PCB (Printed Circuit Board)
        design and assembly, ensuring high-quality components for robotics and
        automation systems.
      </motion.p>

      {/* <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </>
  );
};

// Export default wrapped with SectionWrapper HOC, with 'about' as the ID
export default SectionWrapper(About, "about");
