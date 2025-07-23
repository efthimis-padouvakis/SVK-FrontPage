import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import successImg from "../assets/success.png";
import failImg from "../assets/fail.png";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          setError(false);
          setForm({
            name: "",
            email: "",
            message: "",
          });

          // Hide success message after 5 seconds
          setTimeout(() => setSuccess(false), 5000);
        },
        (error) => {
          setLoading(false);
          setSuccess(false);
          setError(true);
          console.error(error);

          // Hide error message after 5 seconds
          setTimeout(() => setError(false), 5000);
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-semibold mb-2 text-lg">
              Full Name
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              aria-label="Full Name"
              required
              className="bg-tertiary py-4 px-6 placeholder:text-gray-400 text-white rounded-lg outline-none border-2 border-transparent focus:border-white focus:ring-2 focus:ring-white transition-all duration-300 font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-semibold mb-2 text-lg">
              Email Address
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              aria-label="Email Address"
              required
              className="bg-tertiary py-4 px-6 placeholder:text-gray-400 text-white rounded-lg outline-none border-2 border-transparent focus:border-white focus:ring-2 focus:ring-white transition-all duration-300 font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-semibold mb-2 text-lg">
              Message
            </span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message here"
              aria-label="Message"
              required
              className="bg-tertiary py-4 px-6 placeholder:text-gray-400 text-white rounded-lg outline-none border-2 border-transparent focus:border-white focus:ring-2 focus:ring-white transition-all duration-300 font-medium resize-none"
            />
          </label>

          {/* Success message and image */}
          {success && (
            <div className="flex flex-col items-center mb-4">
              <img src={successImg} alt="Success" className="w-12 h-12 mb-2" />
              <p className="text-green-500 font-semibold text-center">
                We received your message. We will contact you as soon as
                possible.
              </p>
            </div>
          )}

          {/* Error message and image */}
          {error && (
            <div className="flex flex-col items-center mb-4">
              <img src={failImg} alt="Error" className="w-12 h-12 mb-2" />
              <p className="text-red-500 font-semibold text-center">
                Something went wrong. Please try again.
              </p>
            </div>
          )}

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-primary transition-colors duration-300"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
