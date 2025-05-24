'use client'

import { useState } from 'react'
import Header from './Components/Header'
import ProfileSection from './Components/ProfileSection'

import SkillsSection from './Components/SkillsSection'
import GoalsSection from './Components/GoalsSection'
import ProjectsAndEducation from './Components/ExperienceSection'

export default function Home() {
  const [activeSection, setActiveSection] = useState('profile')

  const renderSection = () => {
    switch (activeSection) {
      case 'profile':
        return <ProfileSection />
      case 'projects':
        return <ProjectsAndEducation />
      case 'skills':
        return <SkillsSection />
      case 'goals':
        return <GoalsSection />
      default:
        return <ProfileSection />
    }
  }

  return (
    <div className="min-h-screen">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          {renderSection()}
        </div>
      </main>
      
      <footer className="bg-white/80 backdrop-blur-md border-t border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2025 Ganesh Pansare. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}