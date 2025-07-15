'use client'

import { motion } from 'framer-motion'
import { Code, Coffee, Heart, User } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get to know me better and learn about my journey as a developer
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <User className="text-blue-600 dark:text-blue-400 mr-3" size={28} />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  My Story
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                I am a passionate Flutter Developer with nearly three years of experience building 
                high-quality, cross-platform applications. My journey began with a solid academic 
                foundation at Universitas Pendidikan Indonesia, but it was during my time at Alterra 
                Academy that I sharpened my practical skills by developing a fully functional mobile 
                application as a capstone project.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Since then, I&apos;ve advanced through various roles, including internships and freelance 
                projects, where I delivered web and mobile solutions using Flutter. I&apos;ve worked 
                extensively with Firebase, RESTful and GraphQL APIs, and applied state management 
                solutions like Bloc and Riverpod to create scalable, responsive apps.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Currently, I work as a Mobile Engineer at Ekuid, where I develop and maintain 
                performance-driven applications for Android and iOS. I collaborate closely with 
                designers and product managers to create user-friendly interfaces and ensure a 
                seamless experience through CI/CD pipelines with Codemagic. In parallel, I also 
                work as a Freelance Flutter Developer with the Applied Artificial Intelligence 
                Laboratory (AAIL) in Hong Kong, where I help integrate AI-powered educational 
                solutions into mobile and web applications.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg text-center">
                <Code className="text-blue-600 dark:text-blue-400 mx-auto mb-4" size={32} />
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Cross-Platform
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Advanced Flutter development for Android, iOS, and Web
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg text-center">
                <Heart className="text-red-600 dark:text-red-400 mx-auto mb-4" size={32} />
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Performance
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Optimized, scalable applications with focus on user experience
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg text-center sm:col-span-2">
                <Coffee className="text-yellow-600 dark:text-yellow-400 mx-auto mb-4" size={32} />
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Modern Architecture
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  State management with Bloc/Riverpod, Firebase integration, and CI/CD
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
