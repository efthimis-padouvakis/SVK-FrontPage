import React, { useEffect, useState } from "react";
import video from "../assets/VideoCompressed.mp4";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react"; // optional icon library

const VideoBackground = () => {
  const [showText, setShowText] = useState(false);
  const [showScrollHint, setShowScrollHint] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setShowText(true), 3000); // show text after 3s
    const hideTimer = setTimeout(() => {
      setShowText(false);
      setShowScrollHint(true);
    }, 5000); // hide text and show scroll hint at 5s

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden overflow-x-hidden">
      {/* Background Video */}
      <video
        src={video}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Animated Text */}
      <AnimatePresence>
        {showText && (
          <motion.div
            className="absolute inset-0 z-10 flex flex-col items-center text-center px-4 pt-20"
            initial="hidden"
            animate="show"
            exit="exit"
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.4 },
              },
              exit: {
                opacity: 0,
                y: -50,
                transition: { duration: 1 },
              },
            }}
          >
            <motion.h2
              className="text-3xl md:text-5xl mt-10 font-bold text-transparent bg-gradient-to-r from-cyan-300 via-white to-blue-200 bg-clip-text drop-shadow-lg"
              variants={{
                hidden: { opacity: 0, y: -20 },
                show: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: -20 },
              }}
            >
              Welcome to
            </motion.h2>

            <motion.h2
              className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-sky-400 via-white to-indigo-300 text-transparent bg-clip-text drop-shadow-xl mt-4"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.05 } },
                exit: {},
              }}
            >
              {"SVK Robotics".split("").map((char, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                    exit: { opacity: 0, y: -10 },
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
              <span className="ml-1 animate-pulse text-white">|</span>
            </motion.h2>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Down Hint */}
      {showScrollHint && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center"
        >
          <p className="text-white text-lg mb-2">Scroll down</p>
          <div className="bg-black bg-opacity-70 p-2 rounded-full flex flex-col items-center justify-center">
            <ChevronDown className="animate-bounce w-10 h-10 text-white" />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default VideoBackground;
