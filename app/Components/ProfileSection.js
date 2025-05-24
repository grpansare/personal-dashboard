import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Copy, Check } from 'lucide-react'
import { useState } from 'react'

export default function ProfileSection() {
  const [copiedEmail, setCopiedEmail] = useState(false)
  
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

  return (
    <section className="mb-16 mt-8 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-pink-100 to-blue-100 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Profile Image */}
          <div className="flex-shrink-0 group">
            <div className="relative">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full p-2 shadow-2xl group-hover:shadow-3xl transition-all duration-300 group-hover:scale-105">
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden">
                  <img 
                    src="profile.jpg" 
                    alt="Ganesh Pansare - Full Stack Developer" 
                    className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      // Fallback to initials if image fails to load
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-full hidden items-center justify-center text-gray-400 text-8xl font-bold">
                    GP
                  </div>
                </div>
              </div>
              {/* Status indicator */}
              <div className="absolute bottom-4 right-4 w-6 h-6 bg-green-500 border-4 border-white rounded-full shadow-lg animate-pulse"></div>
            </div>
          </div>
                   
          {/* Profile Content */}
          <div className="flex-1 text-center lg:text-left max-w-4xl">
            <div className="mb-6">
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-gray-800 via-blue-700 to-purple-700 bg-clip-text text-transparent mb-4 leading-tight">
                {profileData.name}
              </h1>
              <h2 className="text-2xl lg:text-4xl text-blue-600 mb-2 font-semibold">
                {profileData.title}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto lg:mx-0 rounded-full"></div>
            </div>
            
            <p className="text-xl lg:text-2xl text-gray-600 mb-10 leading-relaxed font-light">
              {profileData.bio}
            </p>
                       
            {/* Contact Information Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              <div className="group flex items-center justify-center lg:justify-start bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white border border-gray-100">
                <MapPin className="w-6 h-6 mr-4 text-blue-500 group-hover:scale-110 transition-transform duration-200" />
                <span className="text-lg font-medium text-gray-700">{profileData.location}</span>
              </div>
              
              <div 
                className="group flex items-center justify-center lg:justify-start bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white border border-gray-100 cursor-pointer"
                onClick={handleEmailCopy}
              >
                <Mail className="w-6 h-6 mr-4 text-blue-500 group-hover:scale-110 transition-transform duration-200" />
                <span className="text-lg font-medium text-gray-700 mr-2">{profileData.email}</span>
                {copiedEmail ? (
                  <Check className="w-5 h-5 text-green-500" />
                ) : (
                  <Copy className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                )}
              </div>
              
              <div className="md:col-span-2 group flex items-center justify-center lg:justify-start bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white border border-gray-100">
                <Github className="w-6 h-6 mr-4 text-blue-500 group-hover:scale-110 transition-transform duration-200" />
                <span className="text-lg font-medium text-gray-700">{profileData.github}</span>
                <ExternalLink className="w-4 h-4 ml-2 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </div>
            </div>
                       
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a 
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-semibold text-lg"
              >
                <Linkedin className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-200" />
                Connect on LinkedIn
                <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </a>
              
              <a 
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl hover:border-gray-800 hover:bg-gray-50 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-semibold text-lg"
              >
                <Github className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-200" />
                View GitHub
                <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </a>
            </div>
            
            {/* Quick Stats or Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-8">
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                Open to Work
              </span>
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                Available for Projects
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                Full Stack
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}