import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Copy, Check } from 'lucide-react'
import { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function ProfileSection() {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })
  
  const profileData = {
    name: "Ganesh Pansare",
    title: "Full Stack Developer & MCA Student",
    bio: "Passionate MCA student with a love for creating innovative web applications. I enjoy solving complex problems and learning new technologies to build impactful digital solutions.",
    location: "Pune, Maharashtra",
    email: "grpansare2002@gmail.com",
    github: "https://github.com/grpansare",
    linkedin: "https://www.linkedin.com/in/ganesh-pansare/"
  }

  const handleEmailCopy = async () => {
    try {
      await navigator.clipboard.writeText(profileData.email)
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    } catch (err) {
      console.log('Failed to copy email')
    }
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -3,
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1
      }
    }
  }

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    }
  }

  return (
    <section className="mb-16 mt-8 relative" ref={ref}>
      {/* Animated background decorative elements */}
      <motion.div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-20 blur-3xl"
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={isInView ? { opacity: 0.2, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: -180 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-pink-100 to-blue-100 rounded-full opacity-20 blur-3xl"
          initial={{ opacity: 0, scale: 0, rotate: 180 }}
          animate={isInView ? { opacity: 0.2, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: 180 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
        />
      </motion.div>

      <motion.div
        className="relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Animated Profile Image */}
          <motion.div
            className="flex-shrink-0 group"
            variants={imageVariants}
          >
            <div className="relative">
              <motion.div 
                className="w-64 h-64 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full p-2 shadow-2xl group-hover:shadow-3xl transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden">
                  <motion.img 
                    src="profile.jpg" 
                    alt="Ganesh Pansare - Full Stack Developer" 
                    className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-full hidden items-center justify-center text-gray-400 text-8xl font-bold">
                    GP
                  </div>
                </div>
              </motion.div>
              {/* Animated status indicator */}
              <motion.div 
                className="absolute bottom-4 right-4 w-6 h-6 bg-green-500 border-4 border-white rounded-full shadow-lg"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
                   
          {/* Animated Profile Content */}
          <div className="flex-1 text-center lg:text-left max-w-4xl">
            <motion.div className="mb-6" variants={textVariants}>
              <motion.h1 
                className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-gray-800 via-blue-700 to-purple-700 bg-clip-text text-transparent mb-4 leading-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {profileData.name.split(' ').map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="inline-block mr-4"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>
              <motion.h2 
                className="text-2xl lg:text-4xl text-blue-600 mb-2 font-semibold"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {profileData.title}
              </motion.h2>
              <motion.div 
                className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto lg:mx-0 rounded-full"
                initial={{ width: 0 }}
                animate={isInView ? { width: 96 } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              />
            </motion.div>
            
            <motion.p 
              className="text-xl lg:text-2xl text-gray-600 mb-10 leading-relaxed font-light"
              variants={itemVariants}
            >
              {profileData.bio}
            </motion.p>
                       
            {/* Animated Contact Information Grid */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10"
              variants={containerVariants}
            >
              <motion.div 
                className="group flex items-center justify-center lg:justify-start bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white border border-gray-100"
                variants={cardVariants}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <MapPin className="w-6 h-6 mr-4 text-blue-500" />
                </motion.div>
                <span className="text-lg font-medium text-gray-700">{profileData.location}</span>
              </motion.div>
              
              <motion.div 
                className="group flex items-center justify-center lg:justify-start bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white border border-gray-100 cursor-pointer"
                variants={cardVariants}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
                onClick={handleEmailCopy}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Mail className="w-6 h-6 mr-4 text-blue-500" />
                </motion.div>
                <span className="text-lg font-medium text-gray-700 mr-2">{profileData.email}</span>
                <motion.div
                  animate={copiedEmail ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 0.3 }}
                >
                  {copiedEmail ? (
                    <Check className="w-5 h-5 text-green-500" />
                  ) : (
                    <Copy className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  )}
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="md:col-span-2 group flex items-center justify-center lg:justify-start bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white border border-gray-100"
                variants={cardVariants}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <Github className="w-6 h-6 mr-4 text-blue-500" />
                </motion.div>
                <span className="text-lg font-medium text-gray-700">{profileData.github}</span>
                <ExternalLink className="w-4 h-4 ml-2 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </motion.div>
            </motion.div>
                       
            {/* Animated Action Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
              variants={containerVariants}
            >
              <motion.a 
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl font-semibold text-lg"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Linkedin className="w-6 h-6 mr-3" />
                </motion.div>
                Connect on LinkedIn
                <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </motion.a>
              
              <motion.a 
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl hover:border-gray-800 hover:bg-gray-50 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl font-semibold text-lg"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <motion.div
                  whileHover={{ rotate: -360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Github className="w-6 h-6 mr-3" />
                </motion.div>
                View GitHub
                <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </motion.a>
            </motion.div>
            
            {/* Animated Quick Stats or Badges */}
            <motion.div 
              className="flex flex-wrap justify-center lg:justify-start gap-3 mt-8"
              variants={containerVariants}
            >
              {['Open to Work', 'Available for Projects', 'Full Stack'].map((badge, index) => (
                <motion.span
                  key={badge}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    index === 0 ? 'bg-blue-100 text-blue-800' :
                    index === 1 ? 'bg-green-100 text-green-800' :
                    'bg-purple-100 text-purple-800'
                  }`}
                  variants={badgeVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                >
                  {badge}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}