import { motion } from 'framer-motion'
import './ContactPage.css'

export default function ContactPage() {
  return (
    <div className="page-contact">
      <div className="cp-hero">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Get in Touch
        </motion.h1>
      </div>

      <div className="cp-content">
        <div className="cp-grid">
          
          {/* Info Sidebar */}
          <div className="cp-info">
            <div className="cp-block">
              <h4>Address</h4>
              <p>Sector C, Vasant Kunj<br/>New Delhi, India - 110070</p>
            </div>
            <div className="cp-block">
              <h4>Contact</h4>
              <p>Phone: +91 (11) 2689 2787</p>
              <p>Email: contact@vasantvalley.org</p>
            </div>
          </div>

          {/* Form */}
          <div className="cp-form-container">
            <form className="cp-form" onSubmit={(e) => e.preventDefault()}>
              <div className="cp-input-group">
                <input type="text" id="name" placeholder=" " required />
                <label htmlFor="name">Full Name</label>
              </div>
              
              <div className="cp-input-group">
                <input type="email" id="email" placeholder=" " required />
                <label htmlFor="email">Email Address</label>
              </div>

              <div className="cp-input-group">
                <select id="inquiry" required defaultValue="">
                  <option value="" disabled hidden>Select Inquiry Type</option>
                  <option value="admissions">Admissions</option>
                  <option value="general">General Information</option>
                  <option value="alumni">Alumni</option>
                  <option value="careers">Careers</option>
                </select>
              </div>

              <div className="cp-input-group">
                <textarea id="message" placeholder=" " rows="5" required></textarea>
                <label htmlFor="message">Your Message</label>
              </div>

              <button type="submit" className="cp-submit-btn">Send Message</button>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}
