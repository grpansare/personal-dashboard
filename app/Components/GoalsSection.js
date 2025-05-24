import { Target, Heart } from 'lucide-react'

export default function GoalsSection() {
  const goals = [
    {
      category: "Professional Goals",
      icon: <Target className="w-7 h-7" />,
      items: [
        "Land a full-time software engineering role at a tech company",
        "Contribute to open-source projects and build a strong GitHub profile",
        "Learn cloud technologies (AWS, Azure) and DevOps practices",
        "Develop expertise in machine learning and AI applications"
      ],
      color: "indigo"
    },
    {
      category: "Personal Interests",
      icon: <Heart className="w-7 h-7" />,
      items: [
        "Photography and digital art creation",
        "Hiking and outdoor adventures",
        "Reading tech blogs and staying updated with industry trends",
        "Volunteering for coding bootcamps and mentoring students"
      ],
      color: "rose"
    }
  ]

  const getColorClasses = (color) => {
    const colors = {
      indigo: { bg: "bg-indigo-100", text: "text-indigo-600" },
      rose: { bg: "bg-rose-100", text: "text-rose-600" }
    }
    return colors[color]
  }

  return (
    <section className="mb-16">
      <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center lg:text-left">
        Goals & Interests
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {goals.map((goalCategory, index) => {
          const colors = getColorClasses(goalCategory.color)
          return (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-gray-200 transform hover:-translate-y-1">
              <div className="flex items-center mb-8">
                <div className={`${colors.bg} rounded-xl p-4 ${colors.text} mr-5`}>
                  {goalCategory.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  {goalCategory.category}
                </h3>
              </div>
              
              <ul className="space-y-4">
                {goalCategory.items.map((item, idx) => (
                  <li key={idx} className="flex items-start group">
                    <div className={`w-3 h-3 ${colors.text === 'text-indigo-600' ? 'bg-indigo-500' : 'bg-rose-500'} rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-110 transition-transform`}></div>
                    <span className="text-gray-700 leading-relaxed text-lg group-hover:text-gray-900 transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </section>
  )
}