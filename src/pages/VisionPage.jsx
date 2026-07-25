import { motion } from 'framer-motion'
import './StandardPage.css'

export default function VisionPage() {
  return (
    <div className="std-page">
      <div className="std-hero" style={{ backgroundColor: 'var(--color-crimson)' }}>
        <h1>Vision & Philosophy</h1>
      </div>

      <div className="std-content">
        <div className="std-grid">
          <div className="std-left">
            <h2>Our<br/>Vision</h2>
          </div>
          <div className="std-right">
            <p className="std-lead">
              To be a premier institution of learning that develops leaders who will shape the future with excellence and integrity.
            </p>
            <p>
              At Vasant Valley School, our philosophy is centered around the holistic development of every child. We believe that education is not merely the acquisition of facts, but the development of independent thinking, character, and a lifelong passion for learning.
            </p>
            <p>
              Our educators are facilitators who guide students to discover their potential, pushing the boundaries of their understanding in a nurturing and inclusive environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
