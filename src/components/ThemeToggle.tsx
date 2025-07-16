'use client'

import { useTheme } from '@/contexts/ThemeContext'
import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'

interface ThemeToggleProps {
  className?: string
  size?: number
}

export default function ThemeToggle({ className = '', size = 20 }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className={`p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-200 hover:scale-110 ${className}`}
      aria-label="Toggle theme"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -180, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'light' ? <Moon size={size} /> : <Sun size={size} />}
      </motion.div>
    </motion.button>
  )
}
