import { motion } from 'framer-motion'
import './StandardPage.css'

export default function LoginPage() {
  return (
    <div className="std-page login-bg">
      <div className="login-container">
        <motion.div 
          className="login-box"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Portal Login</h2>
          <form className="login-form" onSubmit={(e) => e.preventDefault()}>
            <div className="std-input">
              <input type="text" id="username" placeholder=" " required />
              <label htmlFor="username">Username / Roll No.</label>
            </div>
            <div className="std-input">
              <input type="password" id="password" placeholder=" " required />
              <label htmlFor="password">Password</label>
            </div>
            <button type="submit" className="login-btn">Authenticate</button>
            <a href="#" className="forgot-pwd">Forgot Credentials?</a>
          </form>
        </motion.div>
      </div>
    </div>
  )
}
