import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="el-footer">
      <div className="ef-container">
        <div className="ef-content">
          <div className="ef-brand">
            <h3>Vasant Valley</h3>
            <p>Sector C, Vasant Kunj<br/>New Delhi - 110070</p>
          </div>
          <div className="ef-links">
            <Link to="/about">Our Heritage</Link>
            <Link to="/academics">Academics</Link>
            <Link to="/admissions">Admissions</Link>
            <Link to="/contact">Contact</Link>
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
