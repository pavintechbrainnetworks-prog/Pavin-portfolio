import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FiLayers, FiServer, FiGitBranch, FiCloud, FiDatabase,
  FiShield, FiZap, FiSearch, FiMonitor, FiCpu, FiTool, FiGlobe
} from 'react-icons/fi'
import './CoreExpertise.css'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } }
}

const expertiseItems = [
  {
    icon: FiLayers,
    title: 'Full-Stack Web Development',
    color: 'blue',
    description: 'End-to-end web application development with modern frontend frameworks and robust backend services.'
  },
  {
    icon: FiServer,
    title: 'Enterprise Application Development',
    color: 'cyan',
    description: 'Scalable, maintainable enterprise-grade platforms built for performance and business continuity.'
  },
  {
    icon: FiGitBranch,
    title: 'MERN Stack Architecture',
    color: 'purple',
    description: 'MongoDB, Express.js, React, and Node.js for cohesive full-stack solutions.'
  },
  {
    icon: FiCloud,
    title: 'REST API Design',
    color: 'orange',
    description: 'Well-structured RESTful APIs with proper versioning, authentication, and comprehensive documentation.'
  },
  {
    icon: FiDatabase,
    title: 'Database Modeling',
    color: 'teal',
    description: 'Efficient schema design, query optimization, and data architecture for MongoDB and SQL databases.'
  },
  {
    icon: FiShield,
    title: 'Authentication & Authorization',
    color: 'pink',
    description: 'Secure implementation of JWT, OAuth2, role-based access control, and session management.'
  },
  {
    icon: FiZap,
    title: 'Performance Optimization',
    color: 'gold',
    description: 'Achieving top Lighthouse scores through code splitting, lazy loading, and caching strategies.'
  },
  {
    icon: FiSearch,
    title: 'Search Engine Optimization (SEO)',
    color: 'green',
    description: 'Technical SEO, structured data (JSON-LD), semantic HTML, and meta strategies for organic growth.'
  },
  {
    icon: FiMonitor,
    title: 'Responsive UI Development',
    color: 'blue',
    description: 'Pixel-perfect, mobile-first interfaces that deliver seamless experiences across all screen sizes.'
  },
  {
    icon: FiCpu,
    title: 'AI Integration',
    color: 'purple',
    description: 'Integrating AI APIs (Gemini, OpenAI) and building intelligent, context-aware web features.'
  },
  {
    icon: FiTool,
    title: 'Technical Support & Troubleshooting',
    color: 'orange',
    description: 'Rapid diagnosis and resolution of production issues, bugs, and performance bottlenecks.'
  },
]

export default function CoreExpertise() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="core-expertise" className="core-expertise section" ref={ref}>
      <div className="container">

        {/* Section Header */}
        <motion.div
          className="section-header"
          variants={stagger}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.span variants={fadeUp} className="section-label">What I Do</motion.span>
          <motion.h2 variants={fadeUp} className="section-title">
            Core <span>Expertise</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="section-subtitle">
            A refined set of capabilities built through enterprise project delivery and continuous professional growth.
          </motion.p>
        </motion.div>

        {/* Expertise Grid */}
        <motion.div
          className="ce__grid"
          variants={stagger}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {expertiseItems.map((item, i) => (
            <motion.div
              key={item.title}
              className={`ce__card glass-card ce__card--${item.color}`}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              {/* Glow accent top border */}
              <div className="ce__card-accent" />

              <div className={`ce__icon-wrap ce__icon-wrap--${item.color}`}>
                <item.icon size={20} />
              </div>

              <h3 className="ce__card-title">{item.title}</h3>
              <p className="ce__card-desc">{item.description}</p>

              {/* Subtle corner badge */}
              <div className="ce__badge">
                <FiGlobe size={10} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA strip */}
        <motion.div
          className="ce__strip glass-card"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          <div className="ce__strip-content">
            <FiZap size={20} className="ce__strip-icon" />
            <p className="ce__strip-text">
              Delivering <span className="gradient-text">enterprise-grade</span> solutions with a focus on scalability, security, and performance.
            </p>
          </div>
          <a href="#contact" className="btn btn-primary ce__strip-btn">
            Let's Collaborate
          </a>
        </motion.div>

      </div>
    </section>
  )
}
