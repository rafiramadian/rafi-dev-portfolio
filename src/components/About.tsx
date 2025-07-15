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
                I&apos;m a passionate full-stack developer with a love for creating 
                innovative solutions. My journey began with curiosity about how 
                websites work, and it has evolved into a career focused on building 
                exceptional digital experiences.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I believe in writing clean, maintainable code and staying up-to-date 
                with the latest technologies. When I&apos;m not coding, you can find me 
                exploring new frameworks, contributing to open source, or sharing 
                knowledge with the developer community.
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
                  Clean Code
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Writing maintainable and scalable code is my priority
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg text-center">
                <Heart className="text-red-600 dark:text-red-400 mx-auto mb-4" size={32} />
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  User Experience
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Creating intuitive and delightful user experiences
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg text-center sm:col-span-2">
                <Coffee className="text-yellow-600 dark:text-yellow-400 mx-auto mb-4" size={32} />
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Continuous Learning
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Always exploring new technologies and improving my skills
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
