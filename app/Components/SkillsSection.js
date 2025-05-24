import { Palette, Server, Database, Globe } from 'lucide-react'

export default function SkillsSection() {
  const skillCategories = [
    {
      category: "Frontend",
      icon: <Palette className="w-7 h-7" />,
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"],
      color: "blue"
    },
    {
      category: "Backend",
      icon: <Server className="w-7 h-7" />,
      skills: ["Node.js", "Express.js", "Python", "Java", "RESTful APIs","Spring boot"],
      color: "green"
    },
    {
      category: "Database",
      icon: <Database className="w-7 h-7" />,
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
      color: "purple"
    },
    {
      category: "Tools & Others",
      icon: <Globe className="w-7 h-7" />,
      skills: ["Git", "Docker", "AWS", "Vercel", "Figma", "VS Code"],
      color: "orange"
    }
  ]

  const getColorClasses = (color) => {
    const colors = {
      blue: { bg: "bg-blue-100", text: "text-blue-600", skill: "bg-blue-50 text-blue-800 border-blue-200" },
      green: { bg: "bg-green-100", text: "text-green-600", skill: "bg-green-50 text-green-800 border-green-200" },
      purple: { bg: "bg-purple-100", text: "text-purple-600", skill: "bg-purple-50 text-purple-800 border-purple-200" },
      orange: { bg: "bg-orange-100", text: "text-orange-600", skill: "bg-orange-50 text-orange-800 border-orange-200" }
    }
    return colors[color]
  }

  return (
    <section className="mb-16">
      <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center lg:text-left">
        Technical Skills
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => {
          const colors = getColorClasses(category.color)
          return (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-gray-200 transform hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <div className={`${colors.bg} rounded-xl p-4 ${colors.text} mr-5`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  {category.category}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className={`${colors.skill} px-4 py-3 rounded-xl text-sm font-semibold border transition-all duration-200 hover:scale-105`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}