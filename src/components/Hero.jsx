import { motion } from 'framer-motion'
import './Hero.css'

export default function Hero() {
  return (
    <header className="mag-hero">
      <div className="mag-hero-left">
        <div className="mag-hero-tagline">
          <span>Est. 1990</span>
          <span className="divider"></span>
          <span>New Delhi, India</span>
        </div>
        
        <h1 className="mag-hero-title">
          <motion.span 
            className="word-block"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >Value.</motion.span>
          <motion.span 
            className="word-block italic"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >Vision.</motion.span>
          <motion.span 
            className="word-block"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >Vigour.</motion.span>
        </h1>

        <div className="mag-hero-bottom-left">
          <p className="mag-hero-desc">
            Encouraging students to push the boundaries of current understanding and set benchmarks in the field of education since our inception.
          </p>
          <button className="btn-magazine">Discover</button>
        </div>
      </div>

      <div className="mag-hero-right">
        <div className="mag-hero-image-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop" 
            alt="Academic Excellence" 
            className="mag-hero-img"
          />
        </div>
        <div className="mag-hero-vertical-text">
          <span>Excellence in Deed</span>
        </div>
      </div>
    </header>
  )
}
