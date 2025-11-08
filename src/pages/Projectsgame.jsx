/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../css/ProjectsShowcase.css";

// Devicons component
const Devicon = ({ name, className = "" }) => {
  return <i className={`devicon-${name} ${className}`}></i>;
};

const TechLogos = {
  react: {
    icon: <Devicon name="react-original" className="devicon" />,
    name: "React",
  },
  javascript: {
    icon: <Devicon name="javascript-plain" className="devicon" />,
    name: "JavaScript",
  },
  typescript: {
    icon: <Devicon name="typescript-plain" className="devicon" />,
    name: "TypeScript",
  },
  tailwind: {
    icon: <Devicon name="tailwindcss-plain" className="devicon" />,
    name: "Tailwind CSS",
  },
  vite: {
    icon: <Devicon name="vite-plain" className="devicon" />,
    name: "Vite",
  },
  css: { icon: <Devicon name="css3-plain" className="devicon" />, name: "CSS" },
  nextjs: {
    icon: <Devicon name="nextjs-plain" className="devicon" />,
    name: "Next.js",
  },
  unity: {
    icon: <Devicon name="unity-original" className="devicon" />,
    name: "Unity",
  },
  blender: {
    icon: <Devicon name="blender-original" className="devicon" />,
    name: "Blender",
  },
  nodejs: {
    icon: <Devicon name="nodejs-plain" className="devicon" />,
    name: "Node.js",
  },
  mongodb: {
    icon: <Devicon name="mongodb-plain" className="devicon" />,
    name: "MongoDB",
  },
  express: {
    icon: <Devicon name="express-original" className="devicon" />,
    name: "Express",
  },
  csharp: {
    icon: <Devicon name="csharp-plain" className="devicon" />,
    name: "C#",
  },
  cpp: {
    icon: <Devicon name="cplusplus-plain" className="devicon" />,
    name: "C++",
  },
  python: {
    icon: <Devicon name="python-plain" className="devicon" />,
    name: "Python",
  },
  firebase: {
    icon: <Devicon name="firebase-plain" className="devicon" />,
    name: "Firebase",
  },
  docker: {
    icon: <Devicon name="docker-plain" className="devicon" />,
    name: "Docker",
  },
  redis: {
    icon: <Devicon name="redis-plain" className="devicon" />,
    name: "Redis",
  },
  socketio: {
    icon: <Devicon name="socketio-original" className="devicon" />,
    name: "Socket.io",
  },
  tensorflow: {
    icon: <Devicon name="tensorflow-original" className="devicon" />,
    name: "TensorFlow",
  },
  unreal: {
    icon: <Devicon name="unrealengine-original" className="devicon" />,
    name: "Unreal Engine",
  },
};

const ProjectsShowcase = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeCard, setActiveCard] = useState(null);
  const cardRefs = useRef([]);
  const [isMobile, setIsMobile] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Timber Curse",
      category: "game",
      year: "September/2025",
      description:
        "Developed “The Timber Curse”, a first-person survival horror game built in Unity (URP) Designed immersives forest environment with dynamic lighting, fog, and adaptive ambience systemsImplemented AI-driven entities, puzzle mechanics, and a sanitybased visual distortion system for psychological depth",
      technologies: ["unity", "csharp", "blender", "Mixamo"],
      demoLink: "https://the-timber-curse.vercel.app/",
      repoLink: "",
      featured: true,
    },
    {
      id: 2,
      title: "Heist Sprint",
      category: "game",
      year: "July/2025",
      description:
        "Designed and developed “The Heist Sprint”, a fast-paced reflex-based mini-game where players dodge traps, lasers, and guards in a high-security vault escape scenario. Implemented smooth player controls, obstacle spawning, and progressive difficulty to enhance engagement and replay value.",
      technologies: ["unity", "csharp", "blender", "Kenny"],
      demoLink: "https://hiestsprintweb.vercel.app/",
      repoLink: "https://hiestsprintweb.vercel.app/",
      featured: true,
    },
    {
      id: 3,
      title: "Gaming Hub",
      category: "game",
      year: "May/2025",
      description:
        "Designed and developed a 3D modular Gaming Hub in Unity, featuring interactive rooms that serve as entry points to multiple mini-games within a single connected environment. Built an expandable hub system allowing seamless integration of future games, and smooth player movement within the environment.",
      technologies: ["unity", "csharp", "blender"],
      demoLink:
        "https://play.unity.com/en/games/984e7c01-2eb4-49b8-855f-2f534d72beee/gaminghub",
      repoLink:
        "https://play.unity.com/en/games/984e7c01-2eb4-49b8-855f-2f534d72beee/gaminghub",
      featured: true,
    },
    {
      id: 4,
      title: "Mission Spikes",
      category: "game",
      year: "July/2024",
      description:
        "Witness the action-packed adventure with fully functional guns, challenging targets, and immersive animations, all crafted using Unity and C#. Check it out and experience the thrill! 🎮",
      technologies: ["unity", "csharp", "blender", "Kenny"],
      demoLink:
        "https://play.unity.com/en/games/890d0e02-f76b-46ee-a4b3-05d2a5bcdf6d/mission-spikes",
      repoLink:
        "https://play.unity.com/en/games/890d0e02-f76b-46ee-a4b3-05d2a5bcdf6d/mission-spikes",
      featured: false,
    },
    {
      id: 5,
      title: "Mario Run",
      category: "game",
      year: "January/2024",
      description:
        "A Unity 2D auto-runner game inspired by Mario Run, featuring dynamic level design, responsive controls, and real-time obstacle generation for endless fun.",
      technologies: ["unity", "csharp"],
      demoLink:
        "https://play.unity.com/en/games/4f90635b-b7f3-428f-ba16-88d81bd28919/mariorun-webgl",
      repoLink:
        "https://play.unity.com/en/games/4f90635b-b7f3-428f-ba16-88d81bd28919/mariorun-webgl",
      featured: false,
    },
  ];

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseMove = (e, cardId) => {
    if (isMobile) return;

    const card = cardRefs.current[cardId];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;

    setMousePosition({ x, y });
    setActiveCard(cardId);

    card.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg) translateY(-12px) scale(1.03)`;
  };

  const handleMouseLeave = (cardId) => {
    if (isMobile) return;

    const card = cardRefs.current[cardId];
    if (card) {
      card.style.transform =
        "perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(0px) scale(1)";
    }
    setActiveCard(null);
  };

  const handleCardClick = (project) => {
    window.open(project.demoLink || project.repoLink, "_blank");
  };

  // Mobile touch feedback
  const handleTouchStart = (cardId) => {
    if (!isMobile) return;

    const card = cardRefs.current[cardId];
    if (card) {
      card.style.transform = "translateY(-5px) scale(1.01)";
    }
  };

  const handleTouchEnd = (cardId) => {
    if (!isMobile) return;

    const card = cardRefs.current[cardId];
    if (card) {
      setTimeout(() => {
        card.style.transform = "translateY(0px) scale(1)";
      }, 150);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".timeline-item");
    elements.forEach((el) => {
      if (!el.classList.contains("fade-in")) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const TechTag = ({ tech }) => {
    const techData = TechLogos[tech] || {
      icon: <div className="devicon">⚙️</div>,
      name: tech,
    };

    return (
      <motion.span
        className={`tech-tag ${tech}`}
        whileHover={{ scale: isMobile ? 1 : 1.05 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        {techData.icon}
        <span>{techData.name}</span>
      </motion.span>
    );
  };

  return (
    <div className="projects-showcase">
      <div className="projects-container">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/gamedev" className="back-button ">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M19 12H5M12 19l-7-7 7-7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Return
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="projects-title">
            Forged in Code & Engines
            <br />
            
          </h1>
          <p className="projects-subtitle">
            Building robust, scalable, and visually engaging digital products.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="timeline">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="timeline-item"
              initial="hidden"
              animate="visible"
              variants={itemVariants}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-year">{project.year}</div>

              <motion.div
                ref={(el) => (cardRefs.current[project.id] = el)}
                className="timeline-content"
                onMouseMove={(e) => handleMouseMove(e, project.id)}
                onMouseLeave={() => handleMouseLeave(project.id)}
                onTouchStart={() => handleTouchStart(project.id)}
                onTouchEnd={() => handleTouchEnd(project.id)}
                onClick={() => handleCardClick(project)}
                whileHover={{
                  transition: { duration: 0.2 },
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="project-category">
                  {project.category === "game"
                    ? "🎮 Interactive Experience"
                    : "💻 Web Application"}
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <TechTag key={techIndex} tech={tech} />
                  ))}
                </div>

                <div className="click-indicator">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <polyline
                      points="15 3 21 3 21 9"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      x1="10"
                      y1="14"
                      x2="21"
                      y2="3"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  {isMobile
                    ? "Tap to explore project"
                    : "Click to explore project"}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          
          <p className="projects-subtitle">
            Level 1: The Beginning &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; May/2023..........
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsShowcase;
