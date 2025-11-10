/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../css/ProjectsShowcase.css";

// Devicons component
const Devicon = ({ name, className = "" }) => {
  return <i className={`devicon-${name} ${className}`}></i>;
};
const ThreeJSLogo = () => (
  <svg
    className="devicon"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);
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
    name: "Tailwind",
  },
  vite: {
    icon: <Devicon name="vite-plain" className="devicon" />,
    name: "Vite",
  },
  css: {
    icon: <Devicon name="css3-plain" className="devicon" />,
    name: "CSS",
  },
  html: {
    icon: <Devicon name="html5-plain" className="devicon" />,
    name: "HTML",
  },
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
  threejs: {
    icon: <ThreeJSLogo />,
    name: "ThreeJS",
  },
  sql: {
    icon: <Devicon name="mysql-plain" className="devicon" />,
    name: "SQL",
  },
  php: {
    icon: <Devicon name="php-plain" className="devicon" />,
    name: "PHP",
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
      title: "Personal Portfolio",
      category: "web",
      year: "November/2025",
      description:
        "Built a personsal portfolio to showcase my projects and skills",
      technologies: [
        "react",
        // "nodejs",
        // "express",
        "mongodb",
        // "javascript",
        "tailwind",
        "css",

      ],
      demoLink: "https://workwithme-virid.vercel.app/",
      repoLink: "https://workwithme-virid.vercel.app/",
      featured: true,
    },
    {
      id: 11,
      title: "Byte-Code",
      category: "web",
      year: "October/2025",
      description:
        "Byte-Code is a full-stack interactive learning platform with support for multiple programming languages. Developed 'Byte-Code', a interactive learning platform using the MERN stack. Implemented live code execution, gamified XP-based progress tracking. Enabled dynamic pagination, user authentication, and advanced data storage",
      technologies: [
        "react",
        "nodejs",
        "express",
        "mongodb",
        "javascript",
        "tailwind",
      ],
      demoLink: "https://bytecode.vercel.app/",
      repoLink: "https://bytecode.vercel.app/",
      featured: true,
    },
    {
      id: 2,
      title: "Timber Curse",
      category: "web",
      year: "September/2025",
      description: "A webpage to showcase a 3d Horror game made using Unity.",
      technologies: ["nextjs", "unity", "typescript", "tailwind"],
      demoLink: "https://the-timber-curse.vercel.app/",
      repoLink: "https://the-timber-curse.vercel.app/",
      featured: true,
    },
    {
      id: 3,
      ttitle: "Renzaar",
      category: "web",
      year: "August/2025 - September/2025",
      description:
        "Renzaar is a web app where creators showcase and sell gaming assets. Built 'Renzaar', a full-stack web app for gaming assets using Next.js. Implemented secure authentication and real-time asset management. Enabled creators to upload, showcase, and sell 3D models and textures",
      technologies: [
        "nextjs",
        "threejs",
        "typescript",
        "tailwind",
        "firebase",
        "mongodb",
      ],
      demoLink: "https://renzaar.vercel.app/",
      repoLink: "https://renzaar.vercel.app/",
      featured: true,
    },
    {
      id: 4,
      title: "StikBit ",
      category: "web",
      year: "August/2025",
      description:
        "StikBit is an e-commerce platform for Stickers with a responsive UI and smooth UX. Implemented product management, and dynamic shopping cart. Integrated RESTful APIs and optimized backend queries for faster product loading and efficient order handling",
      technologies: [
        "react",
        "nodejs",
        "express",
        "mongodb",
        "javascript",
        "tailwind",
      ],
      demoLink: "https://stikbit.vercel.app/",
      repoLink: "https://stikbit.vercel.app/",
      featured: true,
    },

    {
      id: 5,
      title: "Hiest Sprint",
      category: "web",
      year: "July/2025",
      description:
        "Custom React-based website, powered by Vite and styled with TailwindCSS — blending smooth performance with a sleek design",
      technologies: ["react", "javascript", "tailwind"],
      demoLink: "https://hiestsprintweb.vercel.app/",
      repoLink: "https://hiestsprintweb.vercel.app/",
      featured: true,
    },
    {
      id: 6,
      title: "Bid For It",
      category: "web",
      year: "April/2025",
      description:
        "A full-stack web application where clients post projects and freelancers place competitive bids. Built with a responsive frontend (HTML, CSS, JS) and a secure PHP backend with user authentication and real-time bidding features.",
      technologies: ["html", "css", "php", "sql", "javascript", "tailwind"],
      demoLink: "https://github.com/rohan-005/bid_for_it",
      repoLink: "https://github.com/rohan-005/bid_for_it",
      featured: true,
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
    <div className="projects-showcase bg-linear-to-r from-blue-900 to-gray-900 w-full">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden w-full">
        {[...Array(20)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute text-black text-4xl font-codematrix"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: ["0%", "120%"],
              opacity: [0.3, 0.8, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          >
            {
              [
                "<div>",
                "{ }",
                "</>",
                "=>",
                "const",
                "</html>",
                "();",
                "<body>",
                "if()",
                "while()",
                "</script>",
                "<Game />",
                "</Dev>",
                "Ghost",
                "Frosthowl",
              ][Math.floor(Math.random() * 13)]
            }
          </motion.span>
        ))}
      </div>
      <div className="projects-container">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/gamedev" className="back-button">
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
            From Idea to Deployment
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
            Version 1.0: The Start &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            January/2025..........
          </p>
        </motion.div>
      </div>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@600;700;800;900&family=VT323&family=Audiowide&family=Share+Tech+Mono&family=Creepster&display=swap");

        .font-codematrix {
          font-family: "Share Tech Mono", monospace;
        }
      `}</style>
    </div>
  );
};

export default ProjectsShowcase;
