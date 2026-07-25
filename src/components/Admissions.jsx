import { Link } from 'react-router-dom'
import './Admissions.css'

export default function Admissions() {
  return (
    <section className="el-admissions" id="apply">
      <div className="ad-container">
        <p className="ad-desc">
          Admissions for the upcoming academic session are now open. We seek students who are curious, motivated, and eager to make a difference.
        </p>
        <Link to="/admissions" className="ad-rect-btn">Apply for 2026</Link>
      </div>
    </section>
  )
}
