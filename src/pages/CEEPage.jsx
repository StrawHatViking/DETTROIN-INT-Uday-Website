import { motion } from 'framer-motion'
import './StandardPage.css'

export default function CEEPage() {
  return (
    <div className="std-page">
      <div className="std-hero" style={{ backgroundColor: 'var(--color-crimson)' }}>
        <h1>Centre for Excellence</h1>
      </div>

      <div className="std-content">
        <div className="std-grid">
          <div className="std-left">
            <h2>Advancing<br/>Pedagogy</h2>
          </div>
          <div className="std-right">
            <p className="std-lead">
              The Centre for Excellence in Education (CEE) is the research and development wing of Vasant Valley School.
            </p>
            <p>
              Committed to pedagogical innovation, the CEE focuses on continuous teacher training, curriculum enhancement, and educational research. It serves as a hub for educators to collaborate, share best practices, and implement the latest advancements in teaching methodologies.
            </p>
            <p>
              Through workshops, seminars, and ongoing research projects, the CEE ensures that our educational practices remain at the forefront of global standards.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
