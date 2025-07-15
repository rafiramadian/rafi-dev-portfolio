'use client'

import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: "Mobile & Frontend",
    skills: [
      { name: "Flutter", level: 90 },
      { name: "Next.js", level: 70 },
      { name: "React.js", level: 60 },
      { name: "JavaScript", level: 78 },
      { name: "HTML", level: 85 },
      { name: "Tailwind CSS", level: 65 }
    ]
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Firebase", level: 95 },
      { name: "Firebase Firestore", level: 95 },
      { name: "Supabase", level: 75 },
      { name: "GraphQL", level: 80 },
      { name: "RESTful APIs", level: 85 },
      { name: "Realm Database", level: 85 }
    ]
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git", level: 95 },
      { name: "Codemagic CI/CD", level: 95 },
      { name: "Android Studio", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Bloc/Riverpod", level: 90 },
      { name: "Firebase Hosting", level: 85 }
    ]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I&apos;m always eager to learn new technologies and improve my skills. 
            Currently expanding my expertise in Next.js and React while maintaining 
            my focus on Flutter development. I&apos;m confident in my ability to adapt 
            and deliver quality results across different platforms and technologies.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
