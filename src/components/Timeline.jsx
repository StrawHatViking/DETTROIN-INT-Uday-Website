import { motion } from 'framer-motion'
import './Timeline.css'

export default function Timeline() {
  return (
    <section className="el-timeline" id="timeline">
      <div className="tl-container">
        
        {/* Left Sidebar Info */}
        <div className="tl-sidebar">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            A Timeline of<br/>Recent Events
          </motion.h2>
        </div>

        {/* The Horizontal Timeline Area */}
        <div className="tl-main">
          {/* The dotted line spanning across */}
          <div className="tl-dotted-line"></div>
          
          <div className="tl-grid">
            
            {/* Item 1 */}
            <div className="tl-card">
              <motion.div 
                className="tl-hex-wrapper"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img src="https://static.vasantvalley.org/wp-content/uploads/2026/07/25095946/synapse_2026_6.jpeg" alt="Synapse 2026" />
                <div className="tl-overlay"></div>
              </motion.div>
              <div className="tl-node"></div>
              <div className="tl-text">
                <h3>Synapse 2026</h3>
                <span>22 July 2026 - 23 July 2026</span>
              </div>
            </div>

            {/* Item 2 */}
            <div className="tl-card tl-card-up">
              <motion.div 
                className="tl-hex-wrapper"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <img src="https://static.vasantvalley.org/wp-content/uploads/2026/07/20114458/laissez_faire_2026_4-1.jpeg" alt="Laissez Faire" />
                <div className="tl-overlay"></div>
              </motion.div>
              <div className="tl-node"></div>
              <div className="tl-text tl-text-down">
                <h3>The 23rd Edition of Laissez Faire</h3>
                <span>17 July 2026</span>
              </div>
            </div>

            {/* Item 3 */}
            <div className="tl-card">
              <motion.div 
                className="tl-hex-wrapper"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <img src="https://static.vasantvalley.org/wp-content/uploads/2026/07/18123855/Under-17-Girls-Table-Tennis--300x225.jpeg" alt="Tennis Tournament" />
                <div className="tl-overlay"></div>
              </motion.div>
              <div className="tl-node"></div>
              <div className="tl-text">
                <h3>Inter-School Tennis Zonal Tournament</h3>
                <span>13 July 2026 - 15 July 2026</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
