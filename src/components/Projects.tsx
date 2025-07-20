'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Eye, Folder, Github } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    title: "EKUID - Securities Crowdfunding App",
    description: "A comprehensive securities crowdfunding platform that connects investors with promising startups. Built with advanced Flutter architecture, featuring real-time data synchronization, secure authentication, and seamless cross-platform experience.",
    technologies: ["Flutter", "BLoC", "Realm", "GraphQL", "Firebase", "Codemagic CI/CD"],
    liveUrl: "https://apps.apple.com/id/app/ekuid-investasi-crowdfunding/id1607289110?l=id",
    githubUrl: null, // private
    image: "/placeholder-project-1.jpg",
    isPrivate: true
  },
  {
    title: "Sayo Read & Listen",
    description: "An innovative reading and listening platform that combines traditional reading with AI-powered audio features. Developed with Flutter Web and integrated with OpenAI services for enhanced user experience.",
    technologies: ["Flutter", "Riverpod", "Firebase", "OpenAI", "RESTful API"],
    liveUrl: "https://read.sayo.ai/",
    githubUrl: null, // private
    image: "/placeholder-project-2.jpg",
    isPrivate: true
  },
  {
    title: "Hofung Reading Platform",
    description: "A specialized reading platform designed for Hofung College, featuring Firebase integration, user authentication, and cloud storage. Built with Flutter Web for optimal performance and accessibility.",
    technologies: ["Flutter", "Riverpod", "Firebase", "Firebase Hosting", "OpenAI"],
    liveUrl: "https://hofung-reading.web.app/",
    githubUrl: null, // private
    image: "/placeholder-project-3.jpg",
    isPrivate: true
  },
  {
    title: "Agape88 Warehouse Dashboard",
    description: "A comprehensive warehouse management dashboard built for inventory tracking and administration. Features real-time data updates, user management, and streamlined warehouse operations interface.",
    technologies: ["Flutter", "BLoC", "Firebase", "Firebase Hosting", "Cloud Firestore"],
    liveUrl: "https://gamisjktstock.online/",
    githubUrl: null, // private
    image: "/projects/agape88/hero-banner.png",
    isPrivate: true,
    detailUrl: "/projects/agape88"
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
              <div className="h-48 relative bg-gradient-to-br from-blue-400 to-purple-500">
                {project.image && project.image !== '/placeholder-project-4.jpg' ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="h-full flex items-center justify-center">
                    <Folder size={64} className="text-white opacity-50" />
                  </div>
                )}
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
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                  
                  {project.detailUrl && (
                    <Link
                      href={project.detailUrl}
                      className="flex items-center space-x-2 px-4 py-2 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition-colors text-sm"
                    >
                      <Eye size={16} />
                      <span>View Details</span>
                    </Link>
                  )}
                  
                  {project.isPrivate ? (
                    <div className="flex items-center space-x-2 px-4 py-2 border-2 border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-500 rounded-lg text-sm">
                      <Github size={16} />
                      <span>Private</span>
                    </div>
                  ) : (
                    <a
                      href={project.githubUrl || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-sm"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  )}
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
