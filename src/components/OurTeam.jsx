import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import linkedinIcon from "../assets/linkedin.webp";
const FeedbackCard = ({
  index,
  testimonial,
  linkedin,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <div className="mt-1">
      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px] flex items-center gap-2">
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-medium text-[16px] flex items-center gap-2 hover:underline"
            >
              <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5" />
              {name}
            </a>
          </p>
          <p className="mt-1 text-secondary text-[12px]">{designation}</p>
        </div>
        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
    <p className="text-white tracking-wider text-[18px] mt-6">{testimonial}</p>
  </motion.div>
);

const Feedbacks = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const shouldUseSlider = testimonials.length > 1;

  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          {/* <p className={styles.sectionSubText}>What others say</p> */}
          <h2 className={styles.sectionHeadText}>Our Team</h2>
        </motion.div>
      </div>

      <div className={`-mt-20 pb-14 ${styles.paddingX}`}>
        {shouldUseSlider ? (
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.name} className="px-4">
                <FeedbackCard index={index} {...testimonial} />
              </div>
            ))}
          </Slider>
        ) : (
          <div className="flex justify-center">
            <FeedbackCard index={0} {...testimonials[0]} />
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
