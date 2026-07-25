import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'

import CustomCursor from './components/CustomCursor'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import AdmissionsPage from './pages/AdmissionsPage'
import AboutPage from './pages/AboutPage'
import AcademicsPage from './pages/AcademicsPage'
import ContactPage from './pages/ContactPage'

function App() {
  const [loading, setLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2200)
    return () => clearTimeout(timer)
  }, [])
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      <CustomCursor />

      <AnimatePresence>
        {loading ? (
          <Preloader key="preloader" />
        ) : (
          <motion.div 
            className="hybrid-layout"
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.8, delay: 0.2 } }}
          >
            <Navbar />
            
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/admissions" element={<AdmissionsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/academics" element={<AcademicsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>

            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default App
