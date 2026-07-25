import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './NoticeBoard.css'

export default function NoticeBoard() {
  const noticeRef = useRef(null)
  const { scrollYProgress: noticeProgress } = useScroll({
    target: noticeRef,
    offset: ["start end", "end start"]
  })
  const xLeft = useTransform(noticeProgress, [0, 1], ["0%", "-30%"])
  const xRight = useTransform(noticeProgress, [0, 1], ["-30%", "0%"])

  return (
    <section className="el-notice" ref={noticeRef} id="news">
      <div className="en-header">
        <h2>Latest News</h2>
      </div>
      
      <div className="en-track-wrapper">
        <motion.div className="en-track" style={{ x: xLeft }}>
          <span className="en-item">Senior School Exhibition: "Visionaries"</span>
          <span className="en-separator">✦</span>
          <span className="en-item">Admissions Process Commences for Class XI</span>
          <span className="en-separator">✦</span>
          <span className="en-item">Inter-School Debate Championship Results</span>
        </motion.div>

        <motion.div className="en-track en-track-solid" style={{ x: xRight }}>
          <span className="en-item">New State-of-the-art Learning Center Inauguration</span>
          <span className="en-separator">✦</span>
          <span className="en-item">Founders Day Celebrations</span>
          <span className="en-separator">✦</span>
          <span className="en-item">Annual Sports Meet</span>
        </motion.div>
      </div>
    </section>
  )
}
