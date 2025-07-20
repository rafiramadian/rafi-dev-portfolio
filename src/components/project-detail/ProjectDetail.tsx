'use client'

import { ProjectData } from '@/types/project'
import { motion } from 'framer-motion'
import { ArrowLeft, Award, Calendar, ChevronLeft, ChevronRight, ExternalLink, Github, Globe, Lightbulb, LucideIcon, Smartphone, Target, TrendingUp, Users, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface ProjectDetailProps {
  project: ProjectData
}

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  Target,
  Lightbulb,
  Award,
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  // Combine main screenshots with mobile screenshots for lightbox
  const allScreenshots = [
    ...project.screenshots,
    ...(project.mobileScreenshots || [])
  ]

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return

      switch (e.key) {
        case 'Escape':
          setSelectedImage(null)
          break
        case 'ArrowLeft':
          setSelectedImage(selectedImage === 0 ? allScreenshots.length - 1 : selectedImage - 1)
          break
        case 'ArrowRight':
          setSelectedImage(selectedImage === allScreenshots.length - 1 ? 0 : selectedImage + 1)
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage, allScreenshots.length])

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedImage])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Back Button */}
      <div className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/#projects"
            className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Projects</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                {project.title}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                  <Calendar size={18} />
                  <span>{project.metrics.developmentDuration} development</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                  <Users size={18} />
                  <span>{project.metrics.teamSize}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                  <Globe size={18} />
                  <span>{project.category}</span>
                </div>
              </div>

              <div className="flex space-x-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span>View Live Site</span>
                  </a>
                )}
                {project.isPrivate ? (
                  <div className="inline-flex items-center space-x-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-500 rounded-lg">
                    <Github size={18} />
                    <span>Private Repository</span>
                  </div>
                ) : project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Github size={18} />
                    <span>View Code</span>
                  </a>
                ) : null}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src={project.heroImage}
                  alt={project.title}
                  width={800}
                  height={500}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Overview Section */}
      <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
        {/* Glassmorphism background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 dark:from-blue-900/10 dark:to-purple-900/10"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 dark:bg-blue-800/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 dark:bg-purple-800/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Project Overview
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive solution that delivers exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="backdrop-blur-lg bg-white/70 dark:bg-gray-800/70 rounded-2xl p-6 shadow-xl border border-white/20 dark:border-gray-700/20"
            >
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {project.metrics.developmentDuration}
              </div>
              <div className="text-sm font-medium text-gray-900 dark:text-white mb-1">Development Time</div>
              <div className="text-xs text-gray-600 dark:text-gray-300">
                {project.metrics.approach}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="backdrop-blur-lg bg-white/70 dark:bg-gray-800/70 rounded-2xl p-6 shadow-xl border border-white/20 dark:border-gray-700/20"
            >
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                {project.metrics.modules}
              </div>
              <div className="text-sm font-medium text-gray-900 dark:text-white mb-1">Core Modules</div>
              <div className="text-xs text-gray-600 dark:text-gray-300">
                Complete system coverage
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="backdrop-blur-lg bg-white/70 dark:bg-gray-800/70 rounded-2xl p-6 shadow-xl border border-white/20 dark:border-gray-700/20"
            >
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                {project.metrics.totalScreens}
              </div>
              <div className="text-sm font-medium text-gray-900 dark:text-white mb-1">Application Pages</div>
              <div className="text-xs text-gray-600 dark:text-gray-300">
                Comprehensive interface coverage
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="backdrop-blur-lg bg-white/70 dark:bg-gray-800/70 rounded-2xl p-6 shadow-xl border border-white/20 dark:border-gray-700/20 md:col-span-2 lg:col-span-1"
            >
              <div className="text-3xl font-bold text-red-600 dark:text-red-400 mb-2">
                {project.metrics.teamSize}
              </div>
              <div className="text-sm font-medium text-gray-900 dark:text-white mb-1">Team Size</div>
              <div className="text-xs text-gray-600 dark:text-gray-300">
                End-to-end development
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="backdrop-blur-lg bg-gradient-to-br from-yellow-500/20 to-orange-500/20 dark:from-yellow-400/20 dark:to-orange-400/20 rounded-2xl p-6 shadow-xl border border-yellow-200/50 dark:border-yellow-700/50 md:col-span-2"
            >
              <div className="flex items-center mb-3">
                <TrendingUp className="text-yellow-600 dark:text-yellow-400 mr-2" size={24} />
                <div className="text-2xl font-bold text-yellow-700 dark:text-yellow-300">
                  {project.metrics.performanceImpact}
                </div>
              </div>
              <div className="text-sm font-medium text-gray-900 dark:text-white mb-1">Performance Impact</div>
              <div className="text-xs text-gray-600 dark:text-gray-300">
                Significant improvement in efficiency and user satisfaction
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Development Timeline Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Development Journey
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A comprehensive approach to building exceptional solutions
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-blue-200 dark:bg-blue-800"></div>
            
            <div className="space-y-12">
              {project.timeline.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 rounded-2xl p-6 shadow-lg border border-white/20 dark:border-gray-700/20">
                      <div className="flex items-center mb-3">
                        {index % 2 === 0 ? (
                          <>
                            <div className="text-sm font-medium text-blue-600 dark:text-blue-400 mr-3">{phase.date}</div>
                            <div className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full">{phase.duration}</div>
                          </>
                        ) : (
                          <>
                            <div className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full mr-3">{phase.duration}</div>
                            <div className="text-sm font-medium text-blue-600 dark:text-blue-400">{phase.date}</div>
                          </>
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{phase.phase}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{phase.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="relative z-10 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions Section */}
      <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50/30 to-yellow-50/30 dark:from-red-900/10 dark:to-yellow-900/10"></div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-red-200/20 dark:bg-red-800/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-yellow-200/20 dark:bg-yellow-800/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Challenges & Solutions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Key challenges faced during development and innovative solutions implemented
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {project.challenges.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group hover:scale-105 transition-transform duration-300"
              >
                <div className="backdrop-blur-lg bg-white/80 dark:bg-gray-800/80 rounded-2xl p-6 shadow-xl border border-white/20 dark:border-gray-700/20 h-full">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mr-4">
                      {(() => {
                        const IconComponent = iconMap[item.icon]
                        return IconComponent ? <IconComponent className="text-white" size={24} /> : null
                      })()}
                    </div>
                    <div className="text-xs bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-3 py-1 rounded-full font-medium">
                      Challenge
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                    {item.challenge}
                  </h3>
                  
                  <div className="mb-4">
                    <div className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full font-medium mb-2 inline-block">
                      Solution
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {item.solution}
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full font-medium mb-2 inline-block">
                      Impact
                    </div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {item.impact}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Technology Stack
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Built with modern technologies for optimal performance and scalability
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {project.techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-white dark:bg-gray-900 rounded-lg p-6 group-hover:shadow-lg transition-all duration-300">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={64}
                    height={64}
                    className="mx-auto mb-4"
                  />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {tech.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {tech.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Key Features
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive capabilities designed for efficiency and user satisfaction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-lg ${
                  feature.highlight 
                    ? 'bg-blue-100 dark:bg-blue-900 border-2 border-blue-200 dark:border-blue-800' 
                    : 'bg-gray-50 dark:bg-gray-800'
                } shadow-lg`}
              >
                <h3 className={`text-lg font-semibold mb-3 ${
                  feature.highlight 
                    ? 'text-blue-900 dark:text-blue-100' 
                    : 'text-gray-900 dark:text-white'
                }`}>
                  {feature.title}
                </h3>
                <p className={`text-sm ${
                  feature.highlight 
                    ? 'text-blue-700 dark:text-blue-200' 
                    : 'text-gray-600 dark:text-gray-300'
                }`}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Gallery */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Complete Application Gallery
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive showcase of all {project.screenshots.length} screens and features
            </p>
          </motion.div>

          {/* Featured Screenshots Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="relative bg-gradient-to-br from-blue-900 to-purple-900 rounded-2xl p-8 shadow-2xl">
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={project.screenshots[currentSlide]?.src || project.screenshots[0].src}
                  alt={project.screenshots[currentSlide]?.title || project.screenshots[0].title}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Carousel Controls */}
              <div className="flex justify-between items-center mt-6">
                <button
                  onClick={() => setCurrentSlide(currentSlide === 0 ? project.screenshots.length - 1 : currentSlide - 1)}
                  className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                >
                  <ChevronLeft className="text-white" size={24} />
                </button>
                
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.screenshots[currentSlide]?.title || project.screenshots[0].title}
                  </h3>
                  <p className="text-blue-200 text-sm">
                    {project.screenshots[currentSlide]?.description || project.screenshots[0].description}
                  </p>
                  <div className="text-white/60 text-xs mt-2">
                    {currentSlide + 1} of {project.screenshots.length}
                  </div>
                </div>
                
                <button
                  onClick={() => setCurrentSlide(currentSlide === project.screenshots.length - 1 ? 0 : currentSlide + 1)}
                  className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                >
                  <ChevronRight className="text-white" size={24} />
                </button>
              </div>

              {/* Slide Indicators */}
              <div className="flex justify-center space-x-2 mt-4">
                {project.screenshots.slice(0, 8).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      currentSlide === index ? 'bg-white' : 'bg-white/40'
                    }`}
                  />
                ))}
                {project.screenshots.length > 8 && (
                  <div className="text-white/60 text-xs ml-2">
                    +{project.screenshots.length - 8} more
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Complete Grid Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
            {project.screenshots.map((screenshot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <div className="relative aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <Image
                    src={screenshot.src}
                    alt={screenshot.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <div className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 text-center transform scale-90 group-hover:scale-100">
                      <div className="text-sm font-medium px-2">{screenshot.title}</div>
                      <div className="text-xs opacity-80 mt-1 px-2">Click to view</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Screenshots Section - Conditional for Agape88 */}
          {project.mobileScreenshots && project.mobileScreenshots.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-20"
            >
              {/* Mobile Section Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg">
                    <Smartphone className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    Mobile Super Admin Interface
                  </h3>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Responsive mobile interface designed specifically for super admin role with optimized touch controls and streamlined navigation
                </p>
              </div>

              {/* Mobile Screenshots Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {project.mobileScreenshots.map((screenshot, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group cursor-pointer"
                    onClick={() => setSelectedImage(project.screenshots.length + index)}
                  >
                    <div className="relative max-w-sm mx-auto">
                      {/* Phone Frame */}
                      <div className="relative bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl mx-auto" style={{ width: '280px' }}>
                        <div className="relative bg-black rounded-[2rem] p-2">
                          <div className="relative bg-gray-100 dark:bg-gray-800 rounded-[1.75rem] overflow-hidden" style={{ height: '500px' }}>
                            <Image
                              src={screenshot.src}
                              alt={screenshot.title}
                              fill
                              className="object-contain group-hover:scale-105 transition-transform duration-500"
                              sizes="280px"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                          </div>
                        </div>
                        {/* Phone Details */}
                        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-20 h-1.5 bg-gray-700 rounded-full"></div>
                        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-700 rounded-full"></div>
                      </div>
                      
                      {/* Screenshot Info */}
                      <div className="mt-6 text-center px-4">
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {screenshot.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                          {screenshot.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Features Highlight */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-200/50 dark:border-blue-700/50"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">📱</div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-1">Touch Optimized</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Designed for finger navigation with large tap targets</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">⚡</div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-1">Fast Loading</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Optimized for mobile networks and quick access</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">🎯</div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-1">Role-Specific</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Tailored interface for super admin tasks on mobile</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Lightbox Modal */}
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
              onClick={() => setSelectedImage(null)}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-60 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white hover:text-gray-300 transition-all duration-200"
              >
                <X size={24} />
              </button>

              {/* Main Image Container */}
              <div className="relative w-full h-full max-w-7xl max-h-full flex flex-col" onClick={(e) => e.stopPropagation()}>
                {/* Image */}
                <div className="relative flex-1 min-h-0 flex items-center justify-center">
                  <div className="relative w-full h-full max-w-full max-h-full">
                    <Image
                      src={allScreenshots[selectedImage].src}
                      alt={allScreenshots[selectedImage].title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 95vw, (max-width: 1200px) 90vw, 85vw"
                    />
                  </div>
                </div>
                
                {/* Image Info */}
                <div className="flex-shrink-0 text-center mt-4 px-4 md:px-8">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                    {allScreenshots[selectedImage].title}
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto">
                    {allScreenshots[selectedImage].description}
                  </p>
                  <p className="text-gray-400 text-xs mt-2">
                    {selectedImage + 1} of {allScreenshots.length}
                  </p>
                </div>

                {/* Navigation arrows */}
                <button
                  onClick={() => setSelectedImage(selectedImage === 0 ? allScreenshots.length - 1 : selectedImage - 1)}
                  className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 p-2 md:p-3 bg-black/50 rounded-full hover:bg-black/70 transition-all duration-200 text-white hover:scale-110"
                >
                  <ChevronLeft size={20} className="md:w-6 md:h-6" />
                </button>
                
                <button
                  onClick={() => setSelectedImage(selectedImage === allScreenshots.length - 1 ? 0 : selectedImage + 1)}
                  className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 p-2 md:p-3 bg-black/50 rounded-full hover:bg-black/70 transition-all duration-200 text-white hover:scale-110"
                >
                  <ChevronRight size={20} className="md:w-6 md:h-6" />
                </button>
              </div>

              {/* Keyboard hint */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-400 text-xs">
                Press ESC to close • Use arrow keys to navigate
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 dark:bg-blue-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to See More Projects?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Explore my other projects or get in touch to discuss how we can work together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#projects"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                View All Projects
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
