import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="mag-nav">
      <div className="mag-nav-left">
        <Link to="/" className="mag-brand" style={{textDecoration: 'none'}}>Vasant Valley</Link>
      </div>
      <div className="mag-nav-center">
        <div className="nav-links">
          <Link to="/about">About Us</Link>
          <Link to="/academics">Academics</Link>
          <Link to="/admissions">Admissions</Link>
        </div>
      </div>
      <div className="mag-nav-right">
        <Link to="/contact" className="nav-apply" style={{textDecoration: 'none'}}>Contact</Link>
      </div>
    </nav>
  )
}
