import { motion } from 'framer-motion'
import './StandardPage.css'

export default function SENPage() {
  return (
    <div className="std-page">
      <div className="std-hero" style={{ backgroundColor: 'var(--color-onyx)' }}>
        <h1>Special Education Needs</h1>
      </div>

      <div className="std-content">
        <div className="std-grid">
          <div className="std-left">
            <h2>Inclusive<br/>Education</h2>
            <p className="std-lead">
              Every child has the right to an education that meets their unique needs and abilities.
            </p>
            <p>
              Our Special Education Needs (SEN) department is dedicated to providing comprehensive support to students with diverse learning profiles. We believe in an inclusive mainstream environment where every student feels valued and empowered.
            </p>
            <p>
              Our team of specialized educators, counselors, and therapists work collaboratively with parents and teachers to develop individualized education plans (IEPs) that ensure academic and personal success.
            </p>
          </div>
          <div className="std-right">
            <div className="split-image-wrapper">
              <img src="https://static.vasantvalley.org/wp-content/uploads/2026/07/20114506/laissez_faire_2026_7-1.jpeg" alt="Students Learning" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
