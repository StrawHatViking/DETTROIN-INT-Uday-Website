import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './App.css'

function App() {
  const scrollRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"]
  })

  // Parallax transform for the large image
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  }

  return (
    <div className="magazine-layout">
      {/* Top Navigation Bar */}
      <nav className="mag-nav">
        <div className="mag-nav-left">
          <span className="mag-brand">Vasant Valley</span>
        </div>
        <div className="mag-nav-center">
          <div className="nav-links">
            <a href="#philosophy">Philosophy</a>
            <a href="#admissions">Admissions</a>
            <a href="#academics">Academics</a>
            <a href="#community">Community</a>
          </div>
        </div>
        <div className="mag-nav-right">
          <a href="#apply" className="nav-apply">Apply Now</a>
        </div>
      </nav>

      {/* Hero Grid Section */}
      <header className="mag-hero">
        <div className="mag-hero-left">
          <div className="mag-hero-tagline">
            <span>Est. 1990</span>
            <span className="divider"></span>
            <span>New Delhi, India</span>
          </div>
          
          <h1 className="mag-hero-title">
            <span className="word-block">Value.</span>
            <span className="word-block italic">Vision.</span>
            <span className="word-block">Vigour.</span>
          </h1>

          <div className="mag-hero-bottom-left">
            <p className="mag-hero-desc">
              Encouraging students to push the boundaries of current understanding and set benchmarks in the field of education since our inception.
            </p>
            <button className="btn-magazine">Discover</button>
          </div>
        </div>

        <div className="mag-hero-right">
          <div className="mag-hero-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop" 
              alt="Academic Excellence" 
              className="mag-hero-img"
            />
          </div>
          <div className="mag-hero-vertical-text">
            <span>Excellence in Deed</span>
          </div>
        </div>
      </header>

      {/* Marquee Section */}
      <section className="mag-marquee">
        <div className="marquee-content">
          <span>Admissions Open 2026</span>
          <span className="dot">•</span>
          <span>Value. Vision. Vigour.</span>
          <span className="dot">•</span>
          <span>Ranked #1 Day School</span>
          <span className="dot">•</span>
        </div>
      </section>

      {/* PHASE 3: CINEMATIC PHILOSOPHY SECTION */}
      <section className="cinematic-philosophy" ref={scrollRef}>
        
        <div className="cp-container">
          {/* Animated Header */}
          <motion.h2 
            className="cp-heading"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            "To nurture original thinking and <br/> develop a sense of national identity."
          </motion.h2>

          {/* Expansive Parallax Image */}
          <div className="cp-image-wrapper">
            <motion.div style={{ y, scale }} className="cp-image-inner">
              <img 
                src="https://images.unsplash.com/photo-1498075702571-ecb018f3752d?q=80&w=2078&auto=format&fit=crop" 
                alt="Vasant Valley Students"
                className="cp-image"
              />
            </motion.div>
          </div>

          {/* Staggered Pillars of Philosophy */}
          <motion.div 
            className="cp-pillars"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="cp-pillar" variants={itemVariants}>
              <span className="cp-pillar-number">01</span>
              <h3 className="cp-pillar-title">Ethical Values</h3>
              <p className="cp-pillar-desc">
                Our core objective is to inculcate ethical values, ensuring our students grow into principled individuals who lead with integrity.
              </p>
            </motion.div>

            <motion.div className="cp-pillar" variants={itemVariants}>
              <span className="cp-pillar-number">02</span>
              <h3 className="cp-pillar-title">Original Thinking</h3>
              <p className="cp-pillar-desc">
                We encourage students to push the boundaries of current understanding, fostering a lifelong habit of intellectual curiosity.
              </p>
            </motion.div>

            <motion.div className="cp-pillar" variants={itemVariants}>
              <span className="cp-pillar-number">03</span>
              <h3 className="cp-pillar-title">Global Citizenship</h3>
              <p className="cp-pillar-desc">
                Rooted in national identity while looking outwards, preparing students to set benchmarks on the global stage.
              </p>
            </motion.div>
          </motion.div>
        </div>

      </section>

      {/* Temporary footer spacer so scrolling works beautifully */}
      <div style={{ height: '20vh', background: 'var(--color-onyx)' }}></div>
    </div>
  )
}

export default App
