import {
  ambu_1,
  robotic_hand,
  bin,
  digitization_image,
  software,
  pcb,
  vr_image,
} from "../assets";

import sotirisImage from "../assets/sotiris.jpeg";
import MaraImage from "../assets/mara.jpg";
import danielImage from "../assets/daniel.png";
import efthimisImage from "../assets/efthimis.jpg"
import Design_3D from "../assets/3d_design.png";
import software_development from "../assets/software_development.jpg";
export const navLinks = [
  {
    id: "aboutSection",
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
  {
    id: "Eshop",
    title: "Eshop",
  },
];


const experiences = [
  {
    title: "IoT Smart Waste Management",
    //company_name: "---",
    icon: bin,
    iconBg: "#383E56",
    //date: "March 2020 - April 2021",
    points: [
      "Our Smart Waste System is designed for public city waste management, using connected smart bins to streamline collection and reduce environmental impact. Through a powerful API, mobile app, and website, users can easily find and interact with bins personalized to their needs. The system collects real-time data to generate actionable statistics, helping cities optimize routes, monitor usage, and make data-driven decisions. ",
    ],
  },
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
    title: "Robotic Hand",
    //company_name: "Meta",
    icon: robotic_hand,
    iconBg: "#383E56",
    //date: "Jan 2023 - Present",
    points: [
      "Robotic hand focuses on the design, reconstruction, and kinematic analysis of an anthropomorphic robotic hand. We began by studying the natural movement of the human hand and replicated it in the robotic model. The hand was tested for object grasping using predefined grip patterns and could also perform various gestures through a voice recognition system. Kinematic behavior was analyzed using motion equations derived from computer vision, modeled with both linear and polynomial approaches.",
    ],
  },
];
const testimonials = [
  {
    testimonial:
      "Mechanical Engineer | Robotics-Mechatronics | SVK Robotics | Get 3D | HERO |",
    name: "Sotiris Kalaitzakis",
    designation: "CEO",
    image: sotirisImage,
    linkedin: "https://www.linkedin.com/in/sotiris-kalaitzakis-86b108212/",
  },
  {
    testimonial:
      "Electrical and Computer Engineer, specializing in software for robotics and automation",
    name: "Daniel Dafnis",
    designation: "CTO",
    image: danielImage,
    linkedin: "https://www.linkedin.com/in/daniel-dafnis-52b15127a/",
  },
  {
    testimonial:
      "Software Engineer | Embedded Systems | Full-Stack Development",
    name: "Efthymios Pantouvakis",
    designation: "Software Engineer",
    image: efthimisImage,
    linkedin: "https://www.linkedin.com/in/padd/",
  },
  {
    testimonial:
      "Digital Media and Communication Graduate| Content creator and audience builder",
    name: "Mara Kallergi",
    designation: "Social Media Manager",
    image: MaraImage,
    linkedin: "https://www.linkedin.com/in/mara-%CE%BA-057a95348/",
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
];

export {experiences, testimonials, projects };
