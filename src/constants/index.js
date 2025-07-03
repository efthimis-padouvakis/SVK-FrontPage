import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  shell,
  ambu_1,
  ambu_2,
  tripguide,
  threejs,
  robotic_hand,
  digitization_image,
  software,
  educational_robotic_kits,
  jsumo,
  pcb,
  vr_image,
} from "../assets";

import sotirisImage from "../assets/sotiris.jpeg";
import MaraImage from "../assets/mara.jpg";
import danielImage from "../assets/daniel.png";
import Design_3D from "../assets/3d_design.png";
import education from "../assets/adult_education.png";
import software_development from "../assets/software_development.jpg";
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Ambu Squeeze",
    //company_name: "---",
    icon: ambu_1,
    iconBg: "#383E56",
    //date: "March 2020 - April 2021",
    points: [
      "The aim of the project is the development of a device for the automated compression, through a servo system, of the ventilation bag (ambu bag) used to administer oxygen to people in need of emergency respiratory support. The device replaces the manual effort of the nurse or rescuer with an automated, reliable, and easy-to-use system. The operator can adjust the number of breaths per minute offered to the patient using a suitable selector.",
    ],
  },
  {
    title: "BioMechCrete Team Project",
    // company_name: "---",
    icon: ambu_2,
    iconBg: "#383E56",
    // date: "Jan 2021 - Feb 2022",
    points: [
      "The Med Venti project was a student effort to create a fleet of low-cost medical mechanical ventilators that could be manufactured directly in large quantities. This effort was made due to the possibility of a possible shortage of ventilators during the start of the covid-19 pandemic.",
    ],
  },
  {
    title: "Soft Sorter",
    //company_name: "Shopify",
    icon: shell,
    iconBg: "#383E56",
    //date: "Jan 2022 - Jan 2023",
    points: [
      "For over thirty years pneumatic cylinder-paddle configurations are being used in food industries to automatically sort produce in high operating speeds. Despite their benefits, these multi-component assemblies are prone to faults, difficult to clean, and require frequent maintenance that halts the production lines for considerable amount of time. In this paper, we adopt the abundantly occurring spiral motions encountered in nature and translate them to the proof-of-concept designand development of a soft pneumatic actuator (SPA), the SoftER.",
      "This novel actuator has the ability to rapidly unwind when pressurized to deliver impact forces. We explore this inherently low-cost and simple design and its potential to replace existing cylinder-paddle systems by strictly adhering to the requirements set by the industry. Simulation driven optimization methods are leveraged, utilizing quasi-static and dynamic finite element methods models, to create a scalable framework for selecting the best performing design parameters for each application. Using rapid manufacturing processes the optimized actuator is constructed and physical testing validates its high-speed and impact force delivering capabilities.",
    ],
  },
  {
    title: "Robotic Hand",
    //company_name: "Meta",
    icon: robotic_hand,
    iconBg: "#383E56",
    //date: "Jan 2023 - Present",
    points: [
      "In the present thesis, the reconstruction, experimental evaluation, and kinematic analysis of the anthropomorphic robotic hand are studied. Initially a kinematic analysis is made of the movement of the human hand. The experimental evaluation of the anthropomorphic robotic hand in the use of an autonomous handle for grabbing objects is studied, with the use of some pre-handles. As well as various gestures, it has the ability to perform the robotic hand, obeying the commands it receives through the voice recognition system. The kinematic analysis of the robotic hand based on motion equations resulting from the use of computer vision is also studied. The equations of motion are approached by two methods, a linear relation, and a third-degree polynomial relation.",
    ],
  },
];
const testimonials = [
  {
    testimonial:
      "Mechanical Engineer | Robotics-Mechatronics | SVK Robotics | Get 3D | HERO |",
    name: "Sotiris Kalaitzakis",
    designation: "CEO",
    // company: "Acme Co",
    image: sotirisImage,
    linkedin: "https://www.linkedin.com/in/sotiris-kalaitzakis-86b108212/",
  },
  {
    testimonial:
      "Digital Media Graduate | Communication Specialist  | Creative Storyteller ",
    name: "Mara Kallergi",
    designation: "Social Media Manager",
    company: "DEF Corp",
    image: MaraImage,
    linkedin: "https://www.linkedin.com/in/mara-%CE%BA-057a95348/",
  },
  {
    testimonial:
      "Studied Computer Science|Drives our tech strategy with a focus on innovation in robotics and automation.",
    name: "Daniel Dafnis",
    designation: "CTO",
    company: "456 Enterprises",
    image: danielImage,
    linkedin: "https://www.linkedin.com/in/daniel-dafnis-52b15127a/",
  },
];

const projects = [
  {
    name: "Robotic/Mechatronic Solutions",
    description:
      "Customizable robotic and mechatronic solutions for automation across industries.",
    tags: [
      // {
      //   name: "react",
      //   color: "blue-text-gradient",
      // },
      // {
      //   name: "mongodb",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "tailwind",
      //   color: "pink-text-gradient",
      // },
    ],
    image: software,
    // source_code_link: "https://github.com/",
  },
  {
    name: "Educational Robotic Kits",
    description:
      "STEM kits to inspire students and hobbyists in robotics and programming.",
    tags: [
      // {
      //   name: "react",
      //   color: "blue-text-gradient",
      // },
      // {
      //   name: "restapi",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "scss",
      //   color: "pink-text-gradient",
      // },
    ],
    image: educational_robotic_kits,
    source_code_link: "https://github.com/",
  },
  {
    name: "PCB Design/Assembly",
    description:
      "Expert PCB design and assembly for reliable electronic products.",
    tags: [
      // {
      //   name: "nextjs",
      //   color: "blue-text-gradient",
      // },
      // {
      //   name: "supabase",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "css",
      //   color: "pink-text-gradient",
      // },
    ],
    image: pcb,
    source_code_link: "https://github.com/",
  },
  {
    name: "3D Design, Scanning & Printing",
    description: "High-precision 3D modeling, scanning, and printing services.",
    tags: [
      // {
      //   name: "nextjs",
      //   color: "blue-text-gradient",
      // },
      // {
      //   name: "supabase",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "css",
      //   color: "pink-text-gradient",
      // },
    ],
    image: Design_3D,
    source_code_link: "https://github.com/",
  },
  {
    name: "VR & AR Applications",
    description: "Innovative Virtual and Augmented Reality solutions.",
    tags: [
      // {
      //   name: "nextjs",
      //   color: "blue-text-gradient",
      // },
      // {
      //   name: "supabase",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "css",
      //   color: "pink-text-gradient",
      // },
    ],
    image: vr_image,
    source_code_link: "https://github.com/",
  },
  {
    name: "Software & Application Development",
    description: "Custom software tailored to your needs.",
    tags: [
      // {
      //   name: "nextjs",
      //   color: "blue-text-gradient",
      // },
      // {
      //   name: "supabase",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "css",
      //   color: "pink-text-gradient",
      // },
    ],
    image: software_development,
    source_code_link: "https://github.com/",
  },
  {
    name: "Digitizations",
    description: "Digitizing physical data into accessible digital formats.",
    tags: [
      // {
      //   name: "nextjs",
      //   color: "blue-text-gradient",
      // },
      // {
      //   name: "supabase",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "css",
      //   color: "pink-text-gradient",
      // },
    ],
    image: digitization_image,
    source_code_link: "https://github.com/",
  },
  {
    name: "Adult Educational Programs",
    description:
      "Specialized training programs for adults in robotics and electronics.",
    tags: [
      // {
      //   name: "nextjs",
      //   color: "blue-text-gradient",
      // },
      // {
      //   name: "supabase",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "css",
      //   color: "pink-text-gradient",
      // },
    ],
    image: education,
    source_code_link: "https://github.com/",
  },
  {
    name: "Official Distributor of JSumo",
    description: "Official supplier of JSumo robotic parts and kits.",
    tags: [
      // {
      //   name: "nextjs",
      //   color: "blue-text-gradient",
      // },
      // {
      //   name: "supabase",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "css",
      //   color: "pink-text-gradient",
      // },
    ],
    image: jsumo,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
