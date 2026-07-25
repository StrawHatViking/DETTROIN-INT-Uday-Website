import { motion } from 'framer-motion'
import './AboutPage.css'

export default function AboutPage() {
  return (
    <div className="page-about">
      <div className="ab-hero">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Heritage
        </motion.h1>
      </div>

      <div className="ab-content">
        <div className="ab-grid">
          <div className="ab-left">
            <h2>Excellence<br/>In Deed</h2>
            <p className="ab-est">EST. 1990</p>
          </div>
          <div className="ab-right">
            <p>
              Vasant Valley School was established in 1990 as a co-educational, English medium school in New Delhi. Since our inception, we have been committed to providing a holistic educational experience that goes beyond the classroom.
            </p>
            <p>
              Our philosophy is rooted in the belief that every child is unique and possesses immense potential. We strive to create an environment that encourages intellectual curiosity, emotional growth, and physical well-being.
            </p>
            <p>
              We are dedicated to nurturing not just students, but future leaders who are equipped with the skills, values, and global perspective needed to thrive in a rapidly changing world. Our alumni network spans the globe, carrying forward the legacy of 'Excellence in Deed'.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
