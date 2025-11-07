/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { GlobeDemo } from "../Globedemo";
import Navbar from "../Navbar";
import LiquidChrome from "../bg/LiquidCrome";
import RotatingText from "../text/Rotatingtext";
import emailjs from "@emailjs/browser";

const Custombg = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [notification, setNotification] = useState({ show: false, message: "", type: "" });

  const showNotification = (message, type) => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification({ show: false, message: "", type: "" });
    }, 4000);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_rqqgcjq", // replace with your EmailJS Service ID
        "template_vcczbnb", // replace with your EmailJS Template ID
        e.target,
        "TASXWRDBxS5N39b1y" // replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSending(false);
          showNotification("Message sent successfully!", "success");
          setShowContactModal(false);
        },
        (error) => {
          console.log(error.text);
          setIsSending(false);
          showNotification("Oops! Something went wrong. Please try again.", "error");
        }
      );

    e.target.reset(); // clear the form
  };

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-gray-950 m-0 p-0">
      <LiquidChrome baseColor={[0, 0, 0.05]} speed={0.1} amplitude={0.1} interactive={true} />
      <Navbar />

      {/* Notification */}
      {notification.show && (
        <div className={`fixed top-4 right-4 z-50 px-6 py-4 rounded-xl shadow-2xl border-l-4 ${
          notification.type === "success" 
            ? "bg-green-500/20 border-green-400 text-green-100" 
            : "bg-red-500/20 border-red-400 text-red-100"
        } backdrop-blur-md transform transition-all duration-300 ease-in-out animate-in slide-in-from-right-full`}>
          <div className="flex items-center gap-3">
            {notification.type === "success" ? (
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            )}
            <span className="font-medium">{notification.message}</span>
          </div>
        </div>
      )}

      <div className="first absolute top-7 w-[97%] h-auto lg:h-[60%] bg-white/10 backdrop-blur-2xl rounded-2xl drop-shadow-2xl overflow-hidden flex flex-col lg:flex-row items-center justify-center py-7">
        <div className="container sm:px-6 lg:ml-10 lg:mb-5 z-10 relative flex justify-center lg:justify-end items-center w-full lg:w-170">
          <div className="max-w-xl text-center lg:text-left">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white  ">
              Hi, I'm Rohan
              <span className="block text-7xl text-transparent bg-clip-text bg-linear-to-r from-gray-100 to-white"></span>
              <span className="text-base sm:text-2xl md:text-5xl font-bold mt-3 block text-red-500">
                <RotatingText
                  texts={["Unity3D", "Unreal Engine", "C#", "C++", "Blender", "Mixamo", "2D Games", "3D Games", "Level Design"]}
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
              </span>
            </h1>
            <p className="mt-4 text-sm sm:text-base md:text-lg w-170 text-white bg-gray-600/50 p-6 sm:p-8 rounded-2xl hover:scale-[1.02] transition-all duration-300">
              Creative Game Developer skilled in building immersive 2D and 3D experiences using Unity, Blender, and Mixamo. Experienced in developing games like <span className="font-semibold text-red-500">The Heist Sprint</span> (reflex-based mini-game) and <span className="font-semibold text-red-500">The Timber Curse</span> (psychological survival horror). Strong background in C#, C++, and Java with solid problem-solving and algorithmic skills, blending technical precision with engaging gameplay design.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-6 w-full lg:w-1/2 my-6 lg:my-10 lg:mr-90">
          <button
            onClick={() => (window.location.href = "/")}
            className="w-full max-w-xs px-8 py-4 text-lg font-semibold rounded-full bg-linear-to-r from-gray-100 to-gray-300 text-gray-900 shadow-lg hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] hover:scale-[1.02] transition-all duration-300"
          >
            Switch Profile
          </button>

          <a
            href="/Rohan_Dhanerwal_CV.pdf"
            download="Rohan_Dhanerwal_CV.pdf"
            className="w-full max-w-xs px-8 py-4 text-lg font-semibold rounded-full border-2 border-gray-200 text-gray-200 hover:bg-gray-200 hover:text-gray-900 shadow-lg hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] hover:scale-[1.02] transition-all duration-300 text-center"
          >
            Download CV
          </a>

          <button
            onClick={() => setShowContactModal(true)}
            className="w-full max-w-xs px-8 py-4 text-lg font-semibold rounded-full border-2 border-gray-200 text-gray-200 hover:bg-gray-200 hover:text-gray-900 shadow-lg hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] hover:scale-[1.02] transition-all duration-300"
          >
            Contact Me
          </button>
        </div>

        <div className="hidden lg:flex w-1/3 h-[97%] absolute right-0 top-10">
          <div className="absolute inset-0">
            <GlobeDemo />
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/6 backdrop-blur-md" onClick={() => setShowContactModal(false)}>
          <div 
            className="bg-linear-to-br from-gray-400 to-gray-600 p-8 rounded-2xl w-[90%] max-w-md shadow-2xl relative border border-gray-700 transform transition-all duration-300 scale-95 animate-in fade-in-0 zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowContactModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-700 transition-all duration-200 hover:scale-110"
              disabled={isSending}
            >
              &times;
            </button>

            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-black">Get In Touch</h2>
              <p className="text-gray-700 text-sm mt-2">I'll get back to you soon</p>
            </div>

            <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-4 pl-10 rounded-xl bg-gray-700/50 text-white border border-gray-600 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 placeholder-gray-400"
                  required
                  disabled={isSending}
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-4 rounded-xl bg-gray-700/50 text-white border border-gray-600 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 placeholder-gray-400 pl-10"
                  required
                  disabled={isSending}
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="w-full p-4 pl-10 rounded-xl bg-gray-700/50 text-white border border-gray-600 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 placeholder-gray-400 resize-none h-32"
                  required
                  disabled={isSending}
                ></textarea>
                <div className="absolute top-4 left-3 flex items-start pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="px-6 py-4 bg-linear-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSending ? (
                  <>
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-900 text-sm">
                Or email me directly at{" "}
                <span className="text-blue-400 hover:text-blue-300 transition-colors duration-200 cursor-pointer">
                  rohandhanerwal@gmail.com
                </span>
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="second absolute top-[58%] w-[97%] h-[40%] bg-cyan-800/70 rounded-2xl backdrop-blur-md"></div>
    </div>
  );
};

export default Custombg;