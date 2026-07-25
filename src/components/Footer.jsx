import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="el-footer">
      <div className="ef-container">
        
        {/* Mega Menu Grid */}
        <div className="ef-mega-grid">
          
          <div className="ef-brand-col">
            <h3>Vasant Valley</h3>
            <p>Sector C, Vasant Kunj<br/>New Delhi - 110070</p>
            <a href="mailto:vasantvalley@vasantvalley.org" className="ef-mail">vasantvalley@vasantvalley.org</a>
          </div>

          <div className="ef-link-col">
            <h4>Core Philosophy</h4>
            <Link to="/about">Our Heritage</Link>
            <Link to="/vision">Vision & Philosophy</Link>
            <Link to="/special-education">Special Education Needs</Link>
            <Link to="/cee">Centre for Excellence</Link>
          </div>

          <div className="ef-link-col">
            <h4>Academics & Life</h4>
            <Link to="/academics">Curriculum & Pedagogy</Link>
            <Link to="/admissions">Admissions</Link>
            <Link to="/programmes">Programmes</Link>
            <Link to="/infrastructure">Campus & Infrastructure</Link>
          </div>

          <div className="ef-link-col">
            <h4>Utility & Connect</h4>
            <Link to="/login">Student Portal</Link>
            <Link to="/faqs">FAQs</Link>
            <Link to="/news">News & Events</Link>
            <Link to="/contact">Contact Us</Link>
          </div>

        </div>

        <div className="ef-bottom">
          <span>© 2026 Vasant Valley School. All rights reserved.</span>
          <a href="#" className="ef-back-top" onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}>
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
