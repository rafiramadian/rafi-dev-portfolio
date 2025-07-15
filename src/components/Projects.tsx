'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Folder, Github } from 'lucide-react'

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with Next.js, TypeScript, and Stripe integration. Features include user authentication, product catalog, shopping cart, and payment processing.",
    technologies: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
    liveUrl: "https://ecommerce-demo.vercel.app",
    githubUrl: "https://github.com/rafiramadian/ecommerce-platform",
    image: "/placeholder-project-1.jpg"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with React and Node.js.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    liveUrl: "https://taskmanager-demo.vercel.app",
    githubUrl: "https://github.com/rafiramadian/task-manager",
    image: "/placeholder-project-2.jpg"
  },
  {
    title: "Weather Dashboard",
    description: "A responsive weather application that provides current weather data, forecasts, and location-based weather information with beautiful data visualizations.",
    technologies: ["Vue.js", "Chart.js", "OpenWeather API", "Tailwind CSS"],
    liveUrl: "https://weather-dashboard-demo.vercel.app",
    githubUrl: "https://github.com/rafiramadian/weather-dashboard",
    image: "/placeholder-project-3.jpg"
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js and Framer Motion. Features smooth animations, dark mode support, and optimized performance.",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://rafiramadian.vercel.app",
    githubUrl: "https://github.com/rafiramadian/portfolio",
    image: "/placeholder-project-4.jpg"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <Folder size={64} className="text-white opacity-50" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                  
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-sm"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                </div>
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
          <a
            href="https://github.com/rafiramadian"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 border-2 border-gray-900 dark:border-gray-300 text-gray-900 dark:text-gray-300 rounded-lg hover:bg-gray-900 hover:text-white dark:hover:bg-gray-300 dark:hover:text-gray-900 transition-colors"
          >
            <Github size={20} />
            <span>View More Projects</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
