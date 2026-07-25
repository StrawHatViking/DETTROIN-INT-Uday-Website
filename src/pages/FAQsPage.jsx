import { motion } from 'framer-motion'
import './StandardPage.css'

export default function FAQsPage() {
  return (
    <div className="std-page">
      <div className="std-hero" style={{ backgroundColor: 'var(--color-onyx)' }}>
        <h1>Frequently Asked Questions</h1>
      </div>

      <div className="std-content" style={{ maxWidth: '900px' }}>
        <div className="faq-list">
          <div className="faq-item">
            <h3>What are the admission criteria?</h3>
            <p>Admissions are granted based on the guidelines set by the Directorate of Education, emphasizing neighborhood proximity, alumni relationships, and sibling priority.</p>
          </div>
          <div className="faq-item">
            <h3>Does the school offer transportation?</h3>
            <p>Yes, we provide a comprehensive fleet of GPS-enabled, air-conditioned buses covering major routes across New Delhi and NCR.</p>
          </div>
          <div className="faq-item">
            <h3>What boards is the school affiliated with?</h3>
            <p>Vasant Valley School is affiliated with the Central Board of Secondary Education (CBSE) and also offers international curriculum options in senior years.</p>
          </div>
          <div className="faq-item">
            <h3>What is the student-teacher ratio?</h3>
            <p>We maintain an optimal student-teacher ratio to ensure personalized attention, typically capping classes at 25 students.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
