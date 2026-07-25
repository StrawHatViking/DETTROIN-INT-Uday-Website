import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import './Navbar.css'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [isMenuOpen])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  return (
    <>
      <nav className="mag-nav">
        <div className="mag-nav-left">
          <Link to="/" className="mag-brand" style={{textDecoration: 'none'}}>Vasant Valley</Link>
        </div>
        <div className="mag-nav-center">
          <div className="nav-links">
            <Link to="/about">About Us</Link>
            <Link to="/academics">Academics</Link>
            <Link to="/admissions">Admissions</Link>
          </div>
        </div>
        <div className="mag-nav-right">
          <Link to="/contact" className="nav-apply" style={{textDecoration: 'none'}}>Contact</Link>
          <button className="hamburger-btn" onClick={() => setIsMenuOpen(true)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="mobile-menu-header">
              <span className="mag-brand">Vasant Valley</span>
              <button className="close-menu-btn" onClick={() => setIsMenuOpen(false)}>&times;</button>
            </div>
            <div className="mobile-menu-links">
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/vision">Vision</Link>
              <Link to="/academics">Academics</Link>
              <Link to="/admissions">Admissions</Link>
              <Link to="/programmes">Programmes</Link>
              <Link to="/infrastructure">Campus</Link>
              <Link to="/news">News & Events</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
