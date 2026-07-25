import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CustomCursor from '../components/CustomCursor'
import './StandardPage.css'
import './HubPages.css'

export default function ProgrammesPage() {
  return (
    <div className="hub-page">
      <div className="hub-hero crimson">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Programmes
        </motion.h1>
        <p>Going beyond the classroom to build character, resilience, and global awareness.</p>
      </div>

      <div className="hub-content">
        <div className="hub-grid">
          <div className="hub-card">
            <h3>Duke of Edinburgh</h3>
            <div className="std-image-wrapper" style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
              <img src="https://static.vasantvalley.org/wp-content/uploads/2026/07/17193236/laissez_faire_202612.jpeg" alt="Duke of Edinburgh" />
            </div>
            <p>An internationally recognized youth development program empowering students to discover their potential through skill-building, physical recreation, and voluntary service.</p>
          </div>
          <div className="hub-card">
            <h3>Model UN (MUN)</h3>
            <div className="std-image-wrapper" style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
              <img src="https://static.vasantvalley.org/wp-content/uploads/2026/07/25095940/synapse_2026_4.jpeg" alt="MUN" />
            </div>
            <p>Developing global awareness, diplomacy, and debate skills through rigorous preparation and participation in national and international conferences.</p>
          </div>
          <div className="hub-card">
            <h3>Outbound Trips</h3>
            <div className="std-image-wrapper" style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
              <img src="https://static.vasantvalley.org/wp-content/uploads/2021/04/image-vasant.png" alt="Outbound Trips" />
            </div>
            <p>Fostering independence, teamwork, and a connection with nature through meticulously planned expeditions, camping, and cultural immersions.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
