import { motion } from 'framer-motion'
import './AdmissionsPage.css'

export default function AdmissionsPage() {
  return (
    <div className="page-admissions">
      <div className="ap-hero">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Admissions 2026
        </motion.h1>
        <p>Your journey to excellence begins here. Review our admission criteria and important dates.</p>
      </div>

      <div className="ap-content">
        <div className="ap-section">
          <h2>Admission Criteria</h2>
          <ul>
            <li>Submission of completed application form before the deadline.</li>
            <li>Previous academic records and transfer certificates.</li>
            <li>Interaction session with the admission committee.</li>
            <li>Proof of residence and date of birth.</li>
          </ul>
        </div>
        
        <div className="ap-section">
          <h2>Important Dates</h2>
          <ul>
            <li><strong>Forms Available:</strong> August 1, 2026</li>
            <li><strong>Last Date for Submission:</strong> August 31, 2026</li>
            <li><strong>Interactions Begin:</strong> September 15, 2026</li>
            <li><strong>First List Announced:</strong> October 5, 2026</li>
          </ul>
        </div>
        
        <div className="ap-cta">
          <button className="ad-rect-btn">Download Form</button>
        </div>
      </div>
    </div>
  )
}
