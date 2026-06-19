import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FiUser, FiMapPin, FiMail, FiPhone,
  FiCalendar, FiCode, FiExternalLink
} from 'react-icons/fi'
import './About.css'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } }
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
}

const infoItems = [
  { icon: FiUser, label: 'Name', value: 'Pavinkumar G' },
  { icon: FiMapPin, label: 'Location', value: 'Thanjavur, Tamil Nadu, India' },
  { icon: FiMail, label: 'Email', value: 'pavintechbrainnetworks@gmail.com' },
  { icon: FiCalendar, label: 'Started', value: 'June 2025' },
]

const highlights = [
  { number: '8+', label: 'Projects Delivered' },
  { number: '1+', label: 'Year Experience' },
  { number: '15+', label: 'Technologies' },
  { number: '100%', label: 'Dedication' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="about section" ref={ref}>
      <div className="container">

        {/* Header */}
        <motion.div
          className="section-header"
          variants={stagger}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.span variants={fadeUp} className="section-label">Who I Am</motion.span>
          <motion.h2 variants={fadeUp} className="section-title">
            About <span>Me</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="section-subtitle">
            Passionate developer crafting impactful digital experiences.
          </motion.p>
        </motion.div>

        <div className="about__grid">

          {/* Left: Visual */}
          <motion.div
            className="about__visual"
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="about__avatar-wrap">
              <div className="about__avatar-ring">
                <div className="about__avatar-inner">
                  <span className="gradient-text">P</span>
                </div>
              </div>
              <div className="about__badge-pill glass-card">
                <FiCode size={14} />
                <span>Mern Stack Developer</span>
              </div>
            </div>

            {/* Highlight stats */}
            <div className="about__highlights">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  className="about__highlight glass-card"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                >
                  <span className="about__highlight-number gradient-text">{h.number}</span>
                  <span className="about__highlight-label">{h.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            className="about__content"
            variants={stagger}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.h3 variants={fadeUp} className="about__heading">
              Building the Future, <span className="gradient-text">One Line at a Time</span>
            </motion.h3>

            <motion.p variants={fadeUp} className="about__text">
              I'm <strong>Pavin</strong>, a MERN Stack Developer at <strong>TechBrain Networks Pvt Ltd</strong>,
             passionate about building modern web applications that are fast, scalable, and user-friendly. 
             I specialize in full-stack development, turning ideas into impactful digital experiences while continuously exploring new technologies and best practices.
            </motion.p>

            <motion.p variants={fadeUp} className="about__text">
              Leveraging the power of the MERN stack, I build scalable and responsive web applications that balance functionality,
               performance, and design. From backend architecture to polished frontend experiences, I focus on delivering solutions that make an impact.
            </motion.p>

            {/* Info Grid */}
            <motion.div variants={stagger} className="about__info-grid">
              {infoItems.map((item) => (
                <motion.div key={item.label} variants={fadeUp} className="about__info-item">
                  <span className="about__info-icon"><item.icon size={15} /></span>
                  <span className="about__info-label">{item.label}:</span>
                  <span className="about__info-value">{item.value}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="about__cta">
              <a href="/Pavinkumar_Resume.pdf" download="Pavinkumar_Resume.pdf" className="btn btn-primary" id="about-download-resume">
                Download Resume <FiExternalLink size={16} />
              </a>
              <button
                className="btn btn-secondary"
                id="about-contact-btn"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
