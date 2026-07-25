import { motion } from 'framer-motion'
import './Preloader.css'

export default function Preloader() {
  return (
    <motion.div 
      className="preloader"
      initial={{ y: 0 }}
      exit={{ y: "-100%", transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }}
    >
      <motion.h1 
        className="preloader-text"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.4 } }}
      >
        Vasant Valley
      </motion.h1>
    </motion.div>
  )
}
