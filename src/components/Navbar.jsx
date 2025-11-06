/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaUnity,
  FaDiscord,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  const socialLinks = [
    { icon: <FaInstagram size={26} />, href: "https://www.instagram.com/_rohan.005/", target: "_blank" },
    { icon: <FaGithub size={26} />, href: "https://github.com/rohan-005", target: "_blank" },
    { icon: <FiMail size={26} />, href: "mailto:rohandhanerwal@gmail.com" },
    { icon: <FaLinkedin size={26} />, href: "https://www.linkedin.com/in/rohan005/", target: "_blank" },
    { icon: <FaUnity size={26} />, href: "https://play.unity.com/en/user/37417cba-6186-4c44-a28d-699258161de6", target: "_blank" },
    { icon: <FaDiscord size={26} />, href: "https://discord.com/users/_rohan005", target: "_blank" },
  ];

  return (
    <>
      {/* Top Navbar */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 12 }}
        className="nav absolute top-7 right-7 z-50 flex items-center justify-end 
        bg-[#077A7D]/90 h-14 w-[40%] pr-4 rounded-r-3xl 
        backdrop-blur-md shadow-lg shadow-cyan-800/40"
      >
        {/* Desktop Icons */}
        <div className="hidden lg:flex items-center gap-7 text-white">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target={link.target}
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.3,
                rotate: 8,
                color: "#00E5FF",
                textShadow: "0px 0px 10px #00E5FF",
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="transition-all hover:drop-shadow-[0_0_10px_#00E5FF]"
            >
              {link.icon}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="block lg:hidden">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowOverlay(true)}
            className="p-2 bg-black/80 text-white rounded-full shadow-lg border border-cyan-400/40 hover:bg-cyan-700/80 transition-all"
          >
            <FaBars size={24} />
          </motion.button>
        </div>
      </motion.div>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-95 z-[999] 
            flex flex-col items-center justify-center space-y-10"
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ rotate: 90, scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowOverlay(false)}
              className="absolute top-6 right-6 text-white text-3xl"
            >
              <FaTimes />
            </motion.button>

            {/* Animated Social Links */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center space-y-8 text-white text-lg"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target={link.target}
                  rel="noopener noreferrer"
                  onClick={() => setShowOverlay(false)}
                  whileHover={{
                    scale: 1.4,
                    color: "#00E5FF",
                    textShadow: "0 0 15px #00E5FF",
                  }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="p-3 rounded-full border border-cyan-400/30 hover:border-cyan-400/70 hover:bg-cyan-600/20 transition-all duration-300"
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
