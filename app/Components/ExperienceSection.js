import {
  Github,
  ExternalLink,
  Calendar,
  MapPin,
  Award,
  Code,
  Database,
  Globe,
  Smartphone,
  GraduationCap,
  BookOpen,
  Trophy,
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectsAndEducation() {
  const [activeTab, setActiveTab] = useState("projects");

  const projectsData = [
    {
      id: 1,
      title: "E-Commerce Web Application",
      description:
        "Full-stack e-commerce platform with user authentication, product catalog, shopping cart, and payment integration. Built with modern web technologies for optimal performance.",
      technologies: ["Angular", "Node.js", "MySQL", "Spring boot", "Razorpay"],
      githubUrl: "https://github.com/grpansare/atoz_store",
      liveUrl: "https://atozstore2.netlify.app/",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&auto=format&q=80",
      featured: true,
      status: "Completed",
    },
    {
      id: 2,
      title: "Big 5 Personality test",
      description:
        "A web-based personality assessment tool using React and Node.js, allowing users to analyze their traits based on the Big Five psychological model.",
      technologies: ["Reactjs", "MongoDB", "Express.js", "Tailwind CSS"],
      githubUrl: "https://github.com/grpansare/big5personalitytest",
      liveUrl: "https://big-5-personality-test.netlify.app/",
      image:
        "https://www.simplypsychology.org/wp-content/uploads/big-five-personality.jpeg",
      featured: false,
      status: "Completed",
    },
    {
      id: 3,
      title: "Smart car parking system",
      description:
        "Smart Car Parking System is an intelligent web-based solution that helps users find and book parking spots in real-time using an interactive map. It features secure user authentication, slot management, dynamic pricing, and seamless online payments.",
      technologies: ["Reactjs", "OpenStreetMap API", "Spring boot", "MySQL", "Razorpay"],
      githubUrl: "https://github.com/grpansare/smart-parking-frontend",
      image:
        "https://b2bblogassets.airtel.in/wp-content/uploads/2022/05/iot-based-smart-parking-scaled.jpg",
      featured: false,
      status: "Completed",
    },
  ];

  const educationData = [
    {
      id: 1,
      degree: "Master of Computer Applications (MCA)",
      institution: "Mes's IMCC",
      location: "Pune, Maharashtra",
      duration: "2024 - 2026",
      status: "Pursuing",
      grade: "Current CGPA: 9.23/10",
      description:
        "Specializing in Software Development and Web Technologies. Coursework includes Advanced Programming, Database Management, Software Engineering, and Machine Learning.",
      logo: "🎓",
    },
    {
      id: 2,
      degree: "Bachelor of Computer Science (BCS)",
      institution: "Yashwantrao Mohite College",
      location: "Pune, Maharashtra",
      duration: "2020 - 2023",
      status: "Completed",
      grade: "Percentage: 79.5%",
      description:
        "Comprehensive program covering programming fundamentals, web development, database systems, and software engineering principles.",
      logo: "🎯",
    },
  ];

  const certifications = [
    {
      title: "Full Stack Java Development",
      issuer: "Seed Infotech",
      date: "2024",
      credentialId: "FCC-12345",
      url: "https://drive.google.com/file/d/1AtJZA5PqkEN9Vlz2NM48e5nNQ5YhlPGP/view?usp=drive_link",
    },
    {
      title: "Web Development Bootcamp",
      issuer: "Udemy",
      date: "2024",
      credentialId: "META-67890",
      url: "https://drive.google.com/file/d/1DNyTlipwBtNKOOyIfU5rd-cmL5g2svH7/view?usp=sharing",
    },
    {
      title: "Docker & Kubernetes",
      issuer: "Udemy",
      date: "2025",
      credentialId: "FCC-54321",
      url: "https://drive.google.com/file/d/1DOUC9fHivXwab1oiSZzsi8W7h5rtLqpF/view?usp=sharing",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const cardHoverVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const tabVariants = {
    inactive: {
      backgroundColor: "rgba(0, 0, 0, 0)",
      color: "#6b7280"
    },
    active: {
      backgroundColor: "#2563eb",
      color: "#ffffff",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const fadeInUpVariants = {
    hidden: { 
      opacity: 0, 
      y: 60 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 md:py-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Section Navigation */}
      <motion.div 
        className="flex justify-center mb-8 md:mb-12"
        variants={itemVariants}
      >
        <motion.div 
          className="bg-white rounded-xl p-1 sm:p-2 shadow-lg border border-gray-100 w-full max-w-md"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="grid grid-cols-2 gap-1">
            <motion.button
              onClick={() => setActiveTab("projects")}
              className="px-3 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 relative overflow-hidden"
              variants={tabVariants}
              animate={activeTab === "projects" ? "active" : "inactive"}
              whileHover="hover"
              whileTap="tap"
              style={{
                backgroundColor: activeTab === "projects" ? "#2563eb" : "transparent",
                color: activeTab === "projects" ? "#ffffff" : "#6b7280"
              }}
            >
              <motion.div
                className="flex items-center justify-center"
                animate={{ scale: activeTab === "projects" ? 1.1 : 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Code className="w-4 h-4 sm:w-5 sm:h-5 inline mr-1 sm:mr-2" />
                <span>Projects</span>
              </motion.div>
            </motion.button>
            <motion.button
              onClick={() => setActiveTab("education")}
              className="px-3 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 relative overflow-hidden"
              variants={tabVariants}
              animate={activeTab === "education" ? "active" : "inactive"}
              whileHover="hover"
              whileTap="tap"
              style={{
                backgroundColor: activeTab === "education" ? "#2563eb" : "transparent",
                color: activeTab === "education" ? "#ffffff" : "#6b7280"
              }}
            >
              <motion.div
                className="flex items-center justify-center"
                animate={{ scale: activeTab === "education" ? 1.1 : 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 inline mr-1 sm:mr-2" />
                <span>Education</span>
              </motion.div>
            </motion.button>
          </div>
        </motion.div>
      </motion.div>

      <AnimatePresence mode="wait">
        {/* Projects Section */}
        {activeTab === "projects" && (
          <motion.div
            key="projects"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6 md:space-y-8"
          >
            <motion.div 
              className="text-center mb-8 md:mb-12"
              variants={fadeInUpVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h2 
                className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3 md:mb-4 px-2"
                animate={{ 
                  backgroundPosition: ["0%", "100%", "0%"] 
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              >
                Featured Projects
              </motion.h2>
              <motion.p 
                className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                A showcase of my development journey through various web
                applications and software solutions
              </motion.p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-6 md:gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {projectsData.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover="hover"
                  className={`group bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 ${
                    project.featured ? "ring-2 ring-blue-500 ring-opacity-20" : ""
                  }`}
                  style={{ transformOrigin: "center" }}
                >
                  <motion.div
                    variants={cardHoverVariants}
                    className="h-full"
                  >
                    {project.featured && (
                      <motion.div 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center py-1.5 sm:py-2 text-xs sm:text-sm font-medium"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.5 }}
                      >
                        <motion.span
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                        >
                          ⭐
                        </motion.span>
                        {" "}Featured Project
                      </motion.div>
                    )}

                    <div className="relative overflow-hidden">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-40 sm:h-48 md:h-52 object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.div 
                        className="absolute top-2 sm:top-4 right-2 sm:right-4"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.2 + 0.8, type: "spring", stiffness: 300 }}
                      >
                        <span
                          className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${
                            project.status === "Completed"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {project.status}
                        </span>
                      </motion.div>
                    </div>

                    <div className="p-4 sm:p-6">
                      <motion.h3 
                        className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.6 }}
                      >
                        {project.title}
                      </motion.h3>
                      <motion.p 
                        className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed line-clamp-3"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.7 }}
                      >
                        {project.description}
                      </motion.p>

                      <motion.div 
                        className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.8 }}
                      >
                        {project.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            className="px-2 sm:px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs sm:text-sm font-medium"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ 
                              delay: index * 0.1 + 0.9 + techIndex * 0.05,
                              type: "spring",
                              stiffness: 300
                            }}
                            whileHover={{ scale: 1.1 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </motion.div>

                      <motion.div 
                        className="flex flex-col sm:flex-row gap-2 sm:gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 1 }}
                      >
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center px-3 sm:px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors duration-200 text-xs sm:text-sm font-medium"
                          variants={buttonVariants}
                          whileHover="hover"
                          whileTap="tap"
                        >
                          <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                          View Code
                        </motion.a>
                        {project.liveUrl && (
                          <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-xs sm:text-sm font-medium"
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                          >
                            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                            Live Demo
                          </motion.a>
                        )}
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}

        {/* Education Section */}
        {activeTab === "education" && (
          <motion.div
            key="education"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6 md:space-y-8"
          >
            <motion.div 
              className="text-center mb-8 md:mb-12"
              variants={fadeInUpVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h2 
                className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3 md:mb-4 px-2"
                animate={{ 
                  backgroundPosition: ["0%", "100%", "0%"] 
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              >
                Education Journey
              </motion.h2>
              <motion.p 
                className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                My academic background and continuous learning path in computer
                science and technology
              </motion.p>
            </motion.div>

            {/* Education Timeline */}
            <div className="relative">
              {/* Animated Timeline line */}
              <motion.div 
                className="hidden md:block absolute left-6 lg:left-8 top-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"
                initial={{ height: 0 }}
                animate={{ height: "100%" }}
                transition={{ duration: 1, ease: "easeOut" }}
              />

              <motion.div 
                className="space-y-6 md:space-y-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {educationData.map((edu, index) => (
                  <motion.div key={edu.id} className="relative" variants={itemVariants}>
                    {/* Animated Timeline dot */}
                    <motion.div 
                      className="hidden md:block absolute left-4 lg:left-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg top-6"
                      initial={{ scale: 0, rotate: 180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ 
                        delay: index * 0.2 + 0.5, 
                        type: "spring", 
                        stiffness: 300 
                      }}
                      whileHover={{ scale: 1.2 }}
                    />

                    <motion.div 
                      className="md:ml-12 lg:ml-16 bg-white rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 w-full"
                      whileHover={{ y: -5, scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      {/* Header section */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-3 sm:gap-4">
                        <div className="flex items-start">
                          <motion.div 
                            className="text-2xl sm:text-3xl mr-3 sm:mr-4 flex-shrink-0"
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ 
                              duration: 2, 
                              repeat: Infinity, 
                              delay: index * 0.5 + 1 
                            }}
                          >
                            {edu.logo}
                          </motion.div>
                          <div className="min-w-0 flex-1">
                            <motion.h3 
                              className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-1 leading-tight"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 + 0.3 }}
                            >
                              {edu.degree}
                            </motion.h3>
                            <motion.p 
                              className="text-sm sm:text-base md:text-lg text-blue-600 font-semibold"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 + 0.4 }}
                            >
                              {edu.institution}
                            </motion.p>
                          </div>
                        </div>
                        <motion.div 
                          className="flex-shrink-0"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + 0.6, type: "spring" }}
                        >
                          <span
                            className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${
                              edu.status === "Pursuing"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-green-100 text-green-800"
                            }`}
                          >
                            {edu.status}
                          </span>
                        </motion.div>
                      </div>

                      {/* Details section */}
                      <motion.div 
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 text-gray-600 mb-4 text-sm sm:text-base"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.5 }}
                      >
                        <motion.div 
                          className="flex items-center"
                          whileHover={{ scale: 1.05 }}
                        >
                          <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
                          <span className="truncate">{edu.duration}</span>
                        </motion.div>
                        <motion.div 
                          className="flex items-center"
                          whileHover={{ scale: 1.05 }}
                        >
                          <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
                          <span className="truncate">{edu.location}</span>
                        </motion.div>
                        <motion.div 
                          className="flex items-center sm:col-span-2 lg:col-span-1"
                          whileHover={{ scale: 1.05 }}
                        >
                          <Award className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
                          <span className="font-semibold truncate">{edu.grade}</span>
                        </motion.div>
                      </motion.div>

                      <motion.p 
                        className="text-sm sm:text-base text-gray-600 leading-relaxed"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.7 }}
                      >
                        {edu.description}
                      </motion.p>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Certifications */}
            <motion.div 
              className="mt-12 md:mt-16"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <motion.h3 
                className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6 md:mb-8 px-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, type: "spring", stiffness: 200 }}
              >
                Certifications & Achievements
              </motion.h3>
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                    variants={itemVariants}
                    whileHover={{ 
                      y: -8, 
                      scale: 1.03,
                      rotateY: 5 
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="text-center">
                      <motion.div 
                        className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4"
                        whileHover={{ 
                          scale: 1.2,
                          rotate: 360 
                        }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 300,
                          duration: 0.6 
                        }}
                      >
                        <Award className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </motion.div>
                      <motion.h4 
                        className="font-bold text-gray-800 mb-2 text-sm sm:text-base leading-tight"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 1.2 }}
                      >
                        {cert.title}
                      </motion.h4>
                      <motion.p 
                        className="text-blue-600 font-semibold mb-1 text-sm sm:text-base"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 1.3 }}
                      >
                        {cert.issuer}
                      </motion.p>
                      <motion.p 
                        className="text-gray-500 text-xs sm:text-sm mb-3 sm:mb-4"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 1.4 }}
                      >
                        {cert.date}
                      </motion.p>
                      <motion.a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-xs sm:text-sm transition-colors duration-200"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 1.5 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Certificate
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                      </motion.a>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}