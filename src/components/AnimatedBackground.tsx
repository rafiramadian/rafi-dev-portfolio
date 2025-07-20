'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  color: string
  duration: number
  delay: number
}

export default function AnimatedBackground() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    // Generate random particles with elegant colors
    const generateParticles = () => {
      const colors = [
        'rgba(99, 102, 241, 0.15)',   // indigo (more visible)
        'rgba(139, 92, 246, 0.12)',  // violet (visible)
        'rgba(59, 130, 246, 0.10)',  // blue (noticeable)
        'rgba(156, 163, 175, 0.08)', // gray (subtle but visible)
        'rgba(75, 85, 99, 0.06)',    // slate (gentle)
      ]
      
      const newParticles: Particle[] = []
      
      for (let i = 0; i < 20; i++) { // Reduced from 30 to 20 for cleaner look
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 150 + 100, // Larger but more subtle
          color: colors[Math.floor(Math.random() * colors.length)],
          duration: Math.random() * 25 + 15, // Slower movement
          delay: Math.random() * 8,
        })
      }
      
      setParticles(newParticles)
    }

    generateParticles()
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              // Light theme: More visible but still elegant
              'linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(139, 92, 246, 0.03) 30%, rgba(241, 245, 249, 0.8) 70%, rgba(248, 250, 252, 0.6) 100%)',
              'linear-gradient(225deg, rgba(139, 92, 246, 0.05) 0%, rgba(59, 130, 246, 0.03) 30%, rgba(226, 232, 240, 0.8) 70%, rgba(241, 245, 249, 0.6) 100%)',
              'linear-gradient(315deg, rgba(59, 130, 246, 0.05) 0%, rgba(99, 102, 241, 0.03) 30%, rgba(248, 250, 252, 0.8) 70%, rgba(226, 232, 240, 0.6) 100%)',
              'linear-gradient(45deg, rgba(156, 163, 175, 0.05) 0%, rgba(99, 102, 241, 0.03) 30%, rgba(241, 245, 249, 0.8) 70%, rgba(248, 250, 252, 0.6) 100%)',
            ]
          }}
          transition={{
            duration: 20, // Slower, more elegant transitions
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        
        {/* Dark mode overlay */}
        <motion.div
          className="absolute inset-0 dark:opacity-100 opacity-0 transition-opacity duration-500"
          animate={{
            background: [
              'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.8) 50%, rgba(51, 65, 85, 0.6) 100%)',
              'linear-gradient(225deg, rgba(30, 41, 59, 0.95) 0%, rgba(51, 65, 85, 0.8) 50%, rgba(15, 23, 42, 0.6) 100%)',
              'linear-gradient(315deg, rgba(51, 65, 85, 0.95) 0%, rgba(15, 23, 42, 0.8) 50%, rgba(30, 41, 59, 0.6) 100%)',
              'linear-gradient(45deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.8) 50%, rgba(51, 65, 85, 0.6) 100%)',
            ]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </div>

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full blur-xl" // Increased blur for softer effect
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: particle.color,
          }}
          animate={{
            y: ['-30px', '30px', '-30px'],
            x: ['-15px', '15px', '-15px'],
            scale: [0.6, 1, 0.6], // More subtle scaling
            opacity: [0.2, 0.5, 0.2], // More visible in light theme
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Modern Geometric Shapes */}
      <div className="absolute inset-0">
        {/* Large Sophisticated Circle */}
        <motion.div
          className="absolute top-1/6 left-1/12 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, rgba(99, 102, 241, 0.03) 50%, transparent 100%)',
          }}
          animate={{
            scale: [0.8, 1.1, 0.8],
            rotate: [0, 120, 240, 360],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Elegant Ring */}
        <motion.div
          className="absolute top-2/3 right-1/8 w-80 h-80"
          animate={{
            rotate: [0, -180, -360],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <div 
            className="w-full h-full rounded-full border-2 border-slate-200/40 dark:border-slate-700/30"
            style={{
              boxShadow: 'inset 0 0 60px rgba(99, 102, 241, 0.12), 0 0 40px rgba(99, 102, 241, 0.05)',
            }}
          />
        </motion.div>

        {/* Floating Rectangle */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-64 h-32 rounded-3xl"
          style={{
            background: 'linear-gradient(135deg, rgba(156, 163, 175, 0.06) 0%, rgba(99, 102, 241, 0.08) 100%)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(99, 102, 241, 0.1)',
          }}
          animate={{
            y: ['-20px', '20px', '-20px'],
            rotate: [0, 5, 0, -5, 0],
            opacity: [0.6, 0.9, 0.6],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Subtle Grid Pattern */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-60 dark:opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(99, 102, 241, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99, 102, 241, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Elegant Ambient Lights */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full"
            style={{
              left: `${20 + Math.random() * 60}%`, // More controlled positioning
              top: `${20 + Math.random() * 60}%`,
              width: `${8 + Math.random() * 12}px`, // Varied but consistent sizes
              height: `${8 + Math.random() * 12}px`,
              background: 'radial-gradient(circle, rgba(99, 102, 241, 0.25) 0%, rgba(99, 102, 241, 0.08) 50%, transparent 100%)',
              filter: 'blur(2px)',
            }}
            animate={{
              scale: [0.5, 1.2, 0.5],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 4 + Math.random() * 3, // Varied timing
              repeat: Infinity,
              delay: index * 0.8,
              ease: 'easeInOut',
            }}
          />
        ))}
        
        {/* Subtle Star-like Points */}
        {Array.from({ length: 12 }).map((_, index) => (
          <motion.div
            key={`star-${index}`}
            className="absolute w-1 h-1 bg-indigo-300/40 dark:bg-indigo-400/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.8, 1.5, 0.8],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: index * 0.7,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </div>
  )
}
