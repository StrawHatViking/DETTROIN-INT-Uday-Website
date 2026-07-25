import { motion } from 'framer-motion'
import './AcademicsPage.css'

export default function AcademicsPage() {
  return (
    <div className="page-academics">
      <div className="apage-hero">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Academics
        </motion.h1>
        <p>Pushing the boundaries of current understanding and setting benchmarks in the field of education.</p>
      </div>

      <div className="apage-content">
        <div className="apage-intro">
          <p>
            Vasant Valley School encourages students to push the boundaries of current understanding and set benchmarks in the field of education. Our objective is to inculcate in our students ethical values, nurture original thinking and develop a sense of national identity as well as global citizenship.
          </p>
        </div>

        <div className="apage-grid">
          <div className="apage-card">
            <h3>Junior School</h3>
              <div className="std-image-wrapper" style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
                <img src="https://static.vasantvalley.org/wp-content/uploads/2021/04/learning-image-image.png" alt="Junior School" />
              </div>
            <p>The formative years are crucial. We focus on building a strong foundation in literacy and numeracy while encouraging creative expression, physical development, and social skills in a nurturing environment.</p>
          </div>
          
          <div className="apage-card">
            <h3>Middle School</h3>
            <div className="std-image-wrapper" style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
              <img src="https://www.vasantvalley.org/wp-content/themes/vasant/images/ji.jpg" alt="Middle School" />
            </div>
            <p>As students grow, our curriculum expands to foster independent thinking and problem-solving. We emphasize experiential learning, scientific inquiry, and a deeper understanding of humanities and arts.</p>
          </div>
          
          <div className="apage-card">
            <h3>Senior School</h3>
            <div className="std-image-wrapper" style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
              <img src="https://static.vasantvalley.org/wp-content/uploads/2026/07/25095946/synapse_2026_6.jpeg" alt="Senior School" />
            </div>
            <p>Preparing for the future, the Senior School curriculum is rigorous and specialized. We offer diverse subject choices, career counseling, and leadership opportunities to prepare students for higher education and global citizenship.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
