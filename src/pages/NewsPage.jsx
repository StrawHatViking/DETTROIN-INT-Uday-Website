import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CustomCursor from '../components/CustomCursor'
import './StandardPage.css'
import './HubPages.css'

export default function NewsPage() {
  return (
    <div className="hub-page">
      <div className="hub-hero">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          News & Events
        </motion.h1>
        <p>Stay updated with the vibrant life and achievements of the Vasant Valley community.</p>
      </div>

      <div className="hub-content">
        <div className="hub-grid">
          <div className="hub-card">
            <h3>Founder's Day</h3>
            <div className="std-image-wrapper" style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
              <img src="https://static.vasantvalley.org/wp-content/uploads/2026/07/25095946/synapse_2026_6.jpeg" alt="Founder's Day" />
            </div>
            <p>Our most anticipated annual celebration, bringing together alumni, students, and parents for a showcase of academic and cultural brilliance.</p>
          </div>
          <div className="hub-card">
            <h3>Sports Tournaments</h3>
            <div className="std-image-wrapper" style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
              <img src="https://static.vasantvalley.org/wp-content/uploads/2026/05/25211936/Asian_Junior_Squash_Championship_2026_9-300x257.jpeg" alt="Sports Tournaments" />
            </div>
            <p>From the inter-house athletics meet to national squash championships, our students regularly compete and excel at the highest levels.</p>
          </div>
          <div className="hub-card">
            <h3>Community Service</h3>
            <div className="std-image-wrapper" style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
              <img src="https://static.vasantvalley.org/wp-content/uploads/2026/07/25095943/synapse_2026_5-300x200.jpeg" alt="Community Service" />
            </div>
            <p>Regular drives, fundraising events, and student-led initiatives designed to instill a deep sense of social responsibility and empathy.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
