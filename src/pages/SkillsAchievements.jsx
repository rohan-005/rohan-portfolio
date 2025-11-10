/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../css/SkillsAchievements.css";

// Devicons component
const Devicon = ({ name, className = "" }) => {
  return <i className={`devicon-${name} ${className}`}></i>;
};

// ThreeJS Logo Component
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

// Git Logo Component
const GitLogo = () => (
  <svg
    className="devicon"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
  </svg>
);

// Webpack Logo Component
const WebpackLogo = () => (
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
  css: { icon: <Devicon name="css3-plain" className="devicon" />, name: "CSS" },
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
  threejs: { icon: <ThreeJSLogo />, name: "ThreeJS" },
  sql: {
    icon: <Devicon name="mysql-plain" className="devicon" />,
    name: "SQL",
  },
  php: { icon: <Devicon name="php-plain" className="devicon" />, name: "PHP" },
  git: { icon: <GitLogo />, name: "Git" },
  webpack: { icon: <WebpackLogo />, name: "Webpack" },
};

const SkillsAchievements = () => {
  // Skills Data with levels (beginner, intermediate, advanced, expert)
  const skillsData = [
    {
      id: 1,
      title: "Programming Languages",
      icon: "💻",
      skills: [
        { name: "JavaScript", level: "intermediate", tech: "javascript" },
        { name: "TypeScript", level: "intermediate", tech: "typescript" },
        { name: "Data Structures", level: "intermediate", tech: "cpp" },
        { name: "C#", level: "Basic", tech: "csharp" },
        { name: "C++", level: "intermediate", tech: "cpp" },
        { name: "PHP", level: "intermediate", tech: "php" },
      ],
    },
    {
      id: 2,
      title: "Frontend Development",
      icon: "🎨",
      skills: [
        { name: "React", level: "advanced", tech: "react" },
        { name: "Next.js", level: "advanced", tech: "nextjs" },
        { name: "HTML5", level: "expert", tech: "html" },
        { name: "CSS3", level: "expert", tech: "css" },
        { name: "Tailwind CSS", level: "advanced", tech: "tailwind" },
        { name: "Three.js", level: "intermediate", tech: "threejs" },
      ],
    },
    {
      id: 3,
      title: "Backend & Databases",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: "advanced", tech: "nodejs" },
        { name: "Express.js", level: "advanced", tech: "express" },
        { name: "MongoDB", level: "intermediate", tech: "mongodb" },
        { name: "SQL", level: "intermediate", tech: "sql" },
      ],
    },
    {
      id: 4,
      title: "Game Development",
      icon: "🎮",
      skills: [
        { name: "Unity 3D", level: "expert", tech: "unity" },
        { name: "Blender", level: "intermediate", tech: "blender" },
        { name: "3D Modeling", level: "intermediate", tech: "blender" },
        { name: "C# AI", level: "advanced", tech: "csharp" },
      ],
    },
    {
      id: 5,
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: [
        { name: "Git", level: "advanced", tech: "git" },
        { name: "Vite", level: "advanced", tech: "vite" },
      ],
    },
  ];

  // Specializations Data
  const specializationsData = [
    {
      id: 1,
      title: "Full Stack Development",
      icon: "🌐",
      description:
        "End-to-end web application development with modern frameworks and best practices",
      technologies: ["React", "Node.js", "MongoDB", "Express", "TypeScript"],
    },
    {
      id: 2,
      title: "Game Development",
      icon: "🎮",
      description:
        "Creating immersive 2D/3D gaming experiences with Unity and Unreal Engine",
      technologies: ["Unity", "C#", "Blender", "Unreal Engine", "C++"],
    },
  ];

  // Achievements Data
  const achievements = [
    {
      id: 1,
      icon: "🏆",
      title: "State Level Basketball Winner",
      description:
        "First place in national game development competition with 'The Heist Sprint'",
      date: "2024",
    },
    {
      id: 2,
      icon: "🚀",
      title: "Deloyment",
      description:
        "Successfully deployed and maintained web applications with active users",
      date: "2023",
    },
    {
      id: 4,
      icon: "🎮",
      title: "Game Published on Unity",
      description:
        "Successfully published and marketed a commercial game on Unity platform",
      date: "2024",
    },
  ];

  // Certifications Data
  const certifications = [
    {
      id: 2,
      icon: "🎓",
      title: "Unity Junior Programmer",
      issuer: "Unity Technologies",
      date: "2024",
    },
    {
      id: 3,
      icon: "🔐",
      title: "Unity Essiential Programmer",
      issuer: "Unity Technologies",
      date: "2023",
    },
  ];

  // Stats Data
  const stats = [
    { id: 1, number: "15+", label: "Projects Completed" },
    { id: 3, number: "200+", label: "LeetCode Questions" },
    { id: 4, number: "10k+", label: "Lines of Code" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const SkillItem = ({ skill }) => {
    const techData = TechLogos[skill.tech] || {
      icon: <div className="skill-icon">💻</div>,
      name: skill.name,
    };

    return (
      <motion.div
        className="skill-item"
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <div className="skill-icon">{techData.icon}</div>
        <div className="skill-content">
          <div className="skill-name">{skill.name}</div>
          <div className={`skill-level ${skill.level}`}>
            {skill.level.charAt(0).toUpperCase() + skill.level.slice(1)}
          </div>
        </div>
      </motion.div>
    );
  };

  const SkillCategory = ({ category }) => (
    <motion.div className="skills-category" variants={itemVariants}>
      <h3 className="category-title">{category.title}</h3>
      <div className="skills-items">
        {category.skills.map((skill, index) => (
          <SkillItem key={`${category.id}-${index}`} skill={skill} />
        ))}
      </div>
    </motion.div>
  );

  const SpecializationCard = ({ specialization }) => (
    <motion.div
      className="specialization-card"
      variants={itemVariants}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="specialization-icon">{specialization.icon}</div>
      <h3 className="specialization-title">{specialization.title}</h3>
      <p className="specialization-description">{specialization.description}</p>
      <div className="specialization-technologies">
        {specialization.technologies.map((tech, index) => (
          <span key={index} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );

  return (
    <div className="skills-achievements bg-linear-to-r from-blue-900 to-gray-900 w-full">
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
              ][Math.floor(Math.random() * 1)]
            }
          </motion.span>
        ))}
      </div>
      <div className="skills-container">
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
          className="skills-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="skills-title">Skills & Achievements</h1>
          <p className="skills-subtitle">
            Mastering technologies, delivering excellence
          </p>
        </motion.div>

        {/* Main Skills Grid */}
        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Technical Skills Section */}
          <motion.div className="skills-section" variants={itemVariants}>
            <div className="section-header">
              <div className="section-icon">💻</div>
              <h2 className="section-title">Technical Skills</h2>
            </div>

            {skillsData.slice(0, 3).map((category) => (
              <SkillCategory key={category.id} category={category} />
            ))}
          </motion.div>

          {/* Specializations Section */}
          <motion.div className="skills-section" variants={itemVariants}>
            <div className="section-header">
              <div className="section-icon">🎯</div>
              <h2 className="section-title">Specializations</h2>
            </div>

            <div className="specializations-grid">
              {specializationsData.map((specialization) => (
                <SpecializationCard
                  key={specialization.id}
                  specialization={specialization}
                />
              ))}
            </div>

            {/* Additional Skills Categories */}
            {skillsData.slice(3).map((category) => (
              <SkillCategory key={category.id} category={category} />
            ))}
          </motion.div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          className="skills-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="section-header">
            <div className="section-icon">🏆</div>
            <h2 className="section-title">Key Achievements</h2>
          </div>

          <div className="achievements-grid">
            {achievements.map((achievement) => (
              <motion.div
                key={achievement.id}
                className="achievement-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="achievement-icon">{achievement.icon}</div>
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-description">
                  {achievement.description}
                </p>
                <div className="achievement-date">{achievement.date}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          className="skills-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="section-header">
            <div className="section-icon">📜</div>
            <h2 className="section-title">Certifications</h2>
          </div>

          <div className="certifications-grid">
            {certifications.map((certification) => (
              <motion.div
                key={certification.id}
                className="certification-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="certification-icon">{certification.icon}</div>
                <h3 className="certification-title">{certification.title}</h3>
                <div className="certification-issuer">
                  {certification.issuer}
                </div>
                <div className="certification-date">{certification.date}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="stats-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="stat-card"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                delay: 0.5 + index * 0.1,
              }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
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

export default SkillsAchievements;
