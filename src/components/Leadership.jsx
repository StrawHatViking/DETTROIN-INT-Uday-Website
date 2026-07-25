import { motion } from 'framer-motion'
import './Leadership.css'

export default function Leadership() {
  return (
    <section className="el-leadership">
      <div className="ld-container">
        <div className="ld-left">
          <motion.div 
            className="ld-image-mask"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <img src="https://static.vasantvalley.org/wp-content/uploads/2021/04/23153756/Arun-Kapur-1.jpg" alt="Arun Kapur" />
            <div className="ld-duotone-overlay"></div>
          </motion.div>
        </div>
        <div className="ld-right">
          <motion.h2 
            className="ld-quote"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            "Our vision is to build a community of learners who are deeply rooted in their heritage, yet equipped with the vision to lead the world."
          </motion.h2>
          <motion.div 
            className="ld-author"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <h3>Arun Kapur</h3>
            <p>Director, Vasant Valley School</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
