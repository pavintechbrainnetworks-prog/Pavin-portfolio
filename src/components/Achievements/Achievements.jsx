import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiAward, FiStar, FiZap, FiTrendingUp } from 'react-icons/fi'
import './Achievements.css'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
}

const achievements = [
  {
    icon: FiAward,
    color: 'gold',
    title: 'Enterprise Solutions Developer',
    subtitle: 'TechBrain Networks • 2025',
    description:
      'Contributed to the development of enterprise web platforms across diverse industries, creating scalable, maintainable, and user-focused digital solutions.',
  },
  {
    icon: FiStar,
    color: 'blue',
    title: 'MERN Stack Professional',
    subtitle: 'Independent Learning & Project Development • 2024',
    description:
      'Demonstrated proficiency in the MERN stack by designing and deploying 8+ full-stack applications, covering frontend development, backend services, database design, and API integration.',
  },
  {
    icon: FiZap,
    color: 'purple',
    title: 'Full-Stack Web Application Architect',
    subtitle: 'Personal Project – 2025',
    description:
      'Built and optimized complete web solutions, transforming business requirements into high-performance applications with modern development practices.',
  },
  {
    icon: FiTrendingUp,
    color: 'cyan',
    title: 'Performance & Optimization Focus',
    subtitle: 'TechBrain Networks – 2025',
    description:
      'Improved application efficiency through component optimization, lazy loading, code splitting, and responsive design techniques, delivering smooth experiences across devices.',
  },
]

const stats = [
  { number: '8+', label: 'Projects Built', icon: '🚀' },
  { number: '1+', label: 'Year Experience', icon: '⏱️' },
  { number: '120+', label: 'Product Pages Created', icon: '📄' },
  { number: '10+', label: 'Technologies Used', icon: '🛠️' },
  { number: '80%', label: 'Performance Gains', icon: '⚡' },
  { number: '100%', label: 'Client Satisfaction', icon: '✅' },
]

export default function Achievements() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="achievements" className="achievements section" ref={ref}>
      <div className="container">

        <motion.div
          className="section-header"
          variants={stagger}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.span variants={fadeUp} className="section-label">Milestones</motion.span>
          <motion.h2 variants={fadeUp} className="section-title">
            Achievements & <span>Recognition</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="section-subtitle">
            Key milestones and accomplishments from my professional journey.
          </motion.p>
        </motion.div>

        {/* Achievement Cards */}
        <div className="achievements__grid">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              className="achievements__card glass-card"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              whileHover={{ y: -6 }}
            >
              <div className={`achievements__icon-wrap achievements__icon--${a.color}`}>
                <a.icon size={22} />
              </div>
              <h3 className="achievements__card-title">{a.title}</h3>
              <span className="achievements__subtitle">{a.subtitle}</span>
              <p className="achievements__desc">{a.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Banner */}
        <motion.div
          className="achievements__stats glass-card"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          {stats.map((s, i) => (
            <div key={s.label} className="achievements__stat">
              <span className="achievements__stat-icon">{s.icon}</span>
              <span className="achievements__stat-number gradient-text">{s.number}</span>
              <span className="achievements__stat-label">{s.label}</span>
              {i < stats.length - 1 && <div className="achievements__stat-divider" />}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
