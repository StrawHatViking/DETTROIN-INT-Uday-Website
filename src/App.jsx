import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import './App.css'

function App() {
  // Loading State
  const [loading, setLoading] = useState(true)

  // Custom Cursor State
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")

  useEffect(() => {
    // Preloader timeout
    setTimeout(() => {
      setLoading(false)
    }, 2200)

    // Cursor tracking
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }
    window.addEventListener("mousemove", mouseMove)
    return () => window.removeEventListener("mousemove", mouseMove)
  }, [])

  const cursorVariants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      height: 16,
      width: 16,
      backgroundColor: "var(--color-crimson)",
      mixBlendMode: "normal"
    },
    hover: {
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      height: 80,
      width: 80,
      backgroundColor: "var(--color-cream)",
      mixBlendMode: "difference"
    }
  }

  const textEnter = () => setCursorVariant("hover")
  const textLeave = () => setCursorVariant("default")

  // Parallax Notice Board
  const noticeRef = useRef(null)
  const { scrollYProgress: noticeProgress } = useScroll({
    target: noticeRef,
    offset: ["start end", "end start"]
  })
  const xLeft = useTransform(noticeProgress, [0, 1], ["0%", "-30%"])
  const xRight = useTransform(noticeProgress, [0, 1], ["-30%", "0%"])

  return (
    <>
      {/* CUSTOM CURSOR */}
      <motion.div 
        className="custom-cursor"
        variants={cursorVariants}
        animate={cursorVariant}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      />

      <AnimatePresence>
        {loading ? (
          <motion.div 
            className="preloader"
            key="preloader"
            initial={{ y: 0 }}
            exit={{ y: "-100%", transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }}
          >
            <motion.h1 
              className="preloader-text"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.4 } }}
            >
              Vasant Valley
            </motion.h1>
          </motion.div>
        ) : (
          <motion.div 
            className="hybrid-layout"
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.8, delay: 0.2 } }}
          >
            
            {/* NAVIGATION */}
            <nav className="mag-nav">
              <div className="mag-nav-left">
                <span className="mag-brand" onMouseEnter={textEnter} onMouseLeave={textLeave}>Vasant Valley</span>
              </div>
              <div className="mag-nav-center">
                <div className="nav-links">
                  <a href="#philosophy" onMouseEnter={textEnter} onMouseLeave={textLeave}>Philosophy</a>
                  <a href="#academics" onMouseEnter={textEnter} onMouseLeave={textLeave}>Academics</a>
                  <a href="#news" onMouseEnter={textEnter} onMouseLeave={textLeave}>News</a>
                  <a href="#community" onMouseEnter={textEnter} onMouseLeave={textLeave}>Community</a>
                </div>
              </div>
              <div className="mag-nav-right">
                <a href="#apply" className="nav-apply" onMouseEnter={textEnter} onMouseLeave={textLeave}>Apply Now</a>
              </div>
            </nav>

            {/* HERO */}
            <header className="mag-hero">
              <div className="mag-hero-left">
                <div className="mag-hero-tagline">
                  <span>Est. 1990</span>
                  <span className="divider"></span>
                  <span>New Delhi, India</span>
                </div>
                
                <h1 className="mag-hero-title" onMouseEnter={textEnter} onMouseLeave={textLeave}>
                  <motion.span 
                    className="word-block"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >Value.</motion.span>
                  <motion.span 
                    className="word-block italic"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  >Vision.</motion.span>
                  <motion.span 
                    className="word-block"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  >Vigour.</motion.span>
                </h1>

                <div className="mag-hero-bottom-left">
                  <p className="mag-hero-desc">
                    Encouraging students to push the boundaries of current understanding and set benchmarks in the field of education since our inception.
                  </p>
                  <button className="btn-magazine" onMouseEnter={textEnter} onMouseLeave={textLeave}>Discover</button>
                </div>
              </div>

              <div className="mag-hero-right" onMouseEnter={textEnter} onMouseLeave={textLeave}>
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

            {/* MARQUEE */}
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

            {/* ACADEMICS */}
            <section className="el-academics" id="academics">
              <div className="ea-container">
                <motion.div 
                  className="ea-header"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1 }}
                >
                  <h2 onMouseEnter={textEnter} onMouseLeave={textLeave}>Programs & Pedagogy</h2>
                  <p>A rigorous and holistic approach to education designed to inspire the next generation of visionaries.</p>
                </motion.div>

                <div className="ea-grid">
                  
                  {/* Card 1 */}
                  <div className="ea-card">
                    <div className="ea-number">01</div>
                    <div className="ea-content">
                      <h3 className="ea-title">Academics</h3>
                      <p>Fostering critical thinking through modern pedagogical methods and continuous evaluation. Our curriculum is designed to challenge students and ignite intellectual curiosity.</p>
                    </div>
                    <div className="ea-image-container" onMouseEnter={textEnter} onMouseLeave={textLeave}>
                      <div className="ea-image-mask arch-mask">
                        <img src="https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=2187&auto=format&fit=crop" alt="Academics" />
                        <div className="ea-duotone-overlay"></div>
                      </div>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="ea-card ea-card-reverse">
                    <div className="ea-number">02</div>
                    <div className="ea-content">
                      <h3 className="ea-title">Sports & Vigour</h3>
                      <p>Physical education and team sports are essential for developing discipline, resilience, and sportsmanship across a variety of disciplines.</p>
                    </div>
                    <div className="ea-image-container" onMouseEnter={textEnter} onMouseLeave={textLeave}>
                      <div className="ea-image-mask circle-mask">
                        <img src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop" alt="Sports" />
                        <div className="ea-duotone-overlay"></div>
                      </div>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="ea-card">
                    <div className="ea-number">03</div>
                    <div className="ea-content">
                      <h3 className="ea-title">Arts & Culture</h3>
                      <p>Visual and performing arts form a core pillar of our philosophy, allowing students to express their unique vision and creativity.</p>
                    </div>
                    <div className="ea-image-container" onMouseEnter={textEnter} onMouseLeave={textLeave}>
                      <div className="ea-image-mask arch-mask">
                        <img src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop" alt="Arts" />
                        <div className="ea-duotone-overlay"></div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </section>

            {/* NOTICE BOARD */}
            <section className="el-notice" ref={noticeRef} id="news">
              <div className="en-header">
                <h2>Latest News</h2>
              </div>
              
              <div className="en-track-wrapper">
                <motion.div className="en-track" style={{ x: xLeft }} onMouseEnter={textEnter} onMouseLeave={textLeave}>
                  <span className="en-item">Senior School Exhibition: "Visionaries"</span>
                  <span className="en-separator">✦</span>
                  <span className="en-item">Admissions Process Commences for Class XI</span>
                  <span className="en-separator">✦</span>
                  <span className="en-item">Inter-School Debate Championship Results</span>
                </motion.div>

                <motion.div className="en-track en-track-solid" style={{ x: xRight }} onMouseEnter={textEnter} onMouseLeave={textLeave}>
                  <span className="en-item">New State-of-the-art Learning Center Inauguration</span>
                  <span className="en-separator">✦</span>
                  <span className="en-item">Founders Day Celebrations</span>
                  <span className="en-separator">✦</span>
                  <span className="en-item">Annual Sports Meet</span>
                </motion.div>
              </div>
            </section>

            {/* FOOTER */}
            <footer className="el-footer">
              <div className="ef-container">
                <div className="ef-top">
                  <div className="ef-col">
                    <h4>Contact</h4>
                    <p>Sector C, Vasant Kunj<br/>New Delhi - 110070</p>
                    <p>contact@vasantvalley.org</p>
                  </div>
                  <div className="ef-col">
                    <h4>Quick Links</h4>
                    <a href="#" onMouseEnter={textEnter} onMouseLeave={textLeave}>Admissions</a>
                    <a href="#" onMouseEnter={textEnter} onMouseLeave={textLeave}>Alumni</a>
                    <a href="#" onMouseEnter={textEnter} onMouseLeave={textLeave}>Careers</a>
                  </div>
                  <div className="ef-col">
                    <h4>Follow Us</h4>
                    <a href="#" onMouseEnter={textEnter} onMouseLeave={textLeave}>Instagram</a>
                    <a href="#" onMouseEnter={textEnter} onMouseLeave={textLeave}>LinkedIn</a>
                    <a href="#" onMouseEnter={textEnter} onMouseLeave={textLeave}>Twitter</a>
                  </div>
                </div>
                <div className="ef-bottom">
                  <motion.h1 
                    className="ef-massive-text"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    onMouseEnter={textEnter}
                    onMouseLeave={textLeave}
                  >
                    Vasant Valley
                  </motion.h1>
                </div>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default App
