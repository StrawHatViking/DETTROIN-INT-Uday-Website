import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './CustomCursor.css'

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", mouseMove)

    const handleMouseOver = (e) => {
      if (e.target && typeof e.target.closest === 'function' && e.target.closest('a, button, img, h1, h2, h3, h4')) {
        setIsHovering(true)
      }
    }
    
    const handleMouseOut = (e) => {
      if (e.target && typeof e.target.closest === 'function' && e.target.closest('a, button, img, h1, h2, h3, h4')) {
        setIsHovering(false)
      }
    }
    
    document.addEventListener("mouseover", handleMouseOver)
    document.addEventListener("mouseout", handleMouseOut)

    return () => {
      window.removeEventListener("mousemove", mouseMove)
      document.removeEventListener("mouseover", handleMouseOver)
      document.removeEventListener("mouseout", handleMouseOut)
    }
  }, [])

  const cursorVariants = {
    default: { 
      x: mousePosition.x - 8, 
      y: mousePosition.y - 8, 
      height: 16, 
      width: 16, 
      backgroundColor: "var(--color-crimson)", 
      mixBlendMode: "normal",
      border: "1.5px solid var(--color-cream)" 
    },
    hover: { 
      x: mousePosition.x - 40, 
      y: mousePosition.y - 40, 
      height: 80, 
      width: 80, 
      backgroundColor: "var(--color-cream)", 
      mixBlendMode: "difference",
      border: "none" 
    }
  }

  return (
    <motion.div 
      className="custom-cursor"
      variants={cursorVariants}
      animate={isHovering ? "hover" : "default"}
      transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
    />
  )
}
