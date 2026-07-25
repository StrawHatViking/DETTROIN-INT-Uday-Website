import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CustomCursor from '../components/CustomCursor'
import './StandardPage.css'
import './HubPages.css'

export default function InfrastructurePage() {
  return (
    <div className="hub-page">
      <div className="hub-hero">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Campus & Infrastructure
        </motion.h1>
        <p>A state-of-the-art learning environment spread across 8 acres.</p>
      </div>

      <div className="hub-content">
        <div className="hub-grid">
          <div className="hub-card">
            <h3>Modern Classrooms</h3>
            <div className="std-image-wrapper" style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
              <img src="https://static.vasantvalley.org/wp-content/uploads/2026/07/20114458/laissez_faire_2026_4-1.jpeg" alt="Classrooms" />
            </div>
            <p>Our fully equipped, modern, and spacious classrooms provide a conducive environment for interactive and collaborative learning.</p>
          </div>
          <div className="hub-card">
            <h3>Science & Tech Labs</h3>
            <div className="std-image-wrapper" style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
              <img src="https://static.vasantvalley.org/wp-content/uploads/2026/07/25095940/synapse_2026_4.jpeg" alt="Laboratories" />
            </div>
            <p>Advanced laboratories designed to foster scientific inquiry, experimentation, and a deeper understanding of technology and research.</p>
          </div>
          <div className="hub-card">
            <h3>Sports & Athletics</h3>
            <div className="std-image-wrapper" style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
              <img src="https://static.vasantvalley.org/wp-content/uploads/2026/07/18123855/Under-17-Girls-Table-Tennis--300x225.jpeg" alt="Sports Fields" />
            </div>
            <p>Expansive sports fields, a multi-purpose gymnasium, and specialized coaching for track, football, basketball, and squash.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
