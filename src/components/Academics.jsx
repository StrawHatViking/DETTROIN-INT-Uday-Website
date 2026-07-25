import { motion } from 'framer-motion'
import './Academics.css'

export default function Academics() {
  return (
    <section className="el-academics" id="academics">
      <div className="ea-container">
        <motion.div 
          className="ea-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <h2>Programs & Pedagogy</h2>
          <p>A rigorous and holistic approach to education designed to inspire the next generation of visionaries.</p>
        </motion.div>

        <div className="ea-grid">
          
          {/* Card 1 */}
          <div className="ea-card">
            <div className="ea-number">01</div>
            <div className="ea-content">
              <h3 className="ea-title">Academics</h3>
              <p>Fostering critical thinking through modern pedagogical methods and continuous evaluation. Our curriculum is designed to challenge students and ignite intellectual curiosity.</p>
            </div>
            <div className="ea-image-container">
              <div className="ea-image-mask arch-mask">
                <img src="https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=2187&auto=format&fit=crop" alt="Academics" />
                <div className="ea-duotone-overlay"></div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="ea-card ea-card-reverse">
            <div className="ea-number">02</div>
            <div className="ea-content">
              <h3 className="ea-title">Sports & Vigour</h3>
              <p>Physical education and team sports are essential for developing discipline, resilience, and sportsmanship across a variety of disciplines.</p>
            </div>
            <div className="ea-image-container">
              <div className="ea-image-mask circle-mask">
                <img src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop" alt="Sports" />
                <div className="ea-duotone-overlay"></div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="ea-card">
            <div className="ea-number">03</div>
            <div className="ea-content">
              <h3 className="ea-title">Arts & Culture</h3>
              <p>Visual and performing arts form a core pillar of our philosophy, allowing students to express their unique vision and creativity.</p>
            </div>
            <div className="ea-image-container">
              <div className="ea-image-mask arch-mask">
                <img src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop" alt="Arts" />
                <div className="ea-duotone-overlay"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
