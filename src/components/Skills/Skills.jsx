import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiCode, FiServer, FiDatabase, FiTool, FiLayers, FiCheckCircle } from 'react-icons/fi'
import './Skills.css'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } }
}

const skillCategories = [
  {
    icon: FiCode,
    label: 'Frontend',
    color: 'blue',
    skills: ['React.js', 'JavaScript', 'HTML5 / CSS3']
  },
  {
    icon: FiServer,
    label: 'Backend',
    color: 'cyan',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth']
  },
  {
    icon: FiDatabase,
    label: 'Database',
    color: 'purple',
    skills: ['MongoDB', 'Mongoose (ODM)']
  },
  {
    icon: FiTool,
    label: 'DevOps & Tools',
    color: 'orange',
    skills: ['Git / GitHub', 'Render / Vercel', 'Postman', 'VS Code']
  },
  {
    icon: FiLayers,
    label: 'Other Skills',
    color: 'pink',
    skills: ['UI/UX Design', 'Responsive Design', 'SEO Best Practices', 'Technical Support', 'Troubleshooting']
  },
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="skills section" ref={ref}>
      <div className="container">

        <motion.div
          className="section-header"
          variants={stagger}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.span variants={fadeUp} className="section-label">What I Know</motion.span>
          <motion.h2 variants={fadeUp} className="section-title">
            My <span>Skills</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="section-subtitle">
            A comprehensive toolkit built through real-world projects and continuous learning.
          </motion.p>
        </motion.div>

        {/* Category Cards */}
        <div className="skills__grid">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              className={`skills__card glass-card skills__card--${cat.color}`}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: ci * 0.1, duration: 0.6 }}
              whileHover={{ y: -6 }}
            >
              {/* Top accent line */}
              <div className="skills__card-accent" />

              {/* Header */}
              <div className="skills__card-header">
                <div className={`skills__icon-wrap skills__icon-wrap--${cat.color}`}>
                  <cat.icon size={18} />
                </div>
                <h3 className="skills__card-title">{cat.label}</h3>
              </div>

              {/* Skill Tags */}
              <div className="skills__tags">
                {cat.skills.map((skill) => (
                  <span key={skill} className={`skills__tag skills__tag--${cat.color}`}>
                    <FiCheckCircle size={11} />
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Pill Cloud */}
        <motion.div
          className="skills__pill-cloud"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          {['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript', 'Git', 'REST API'].map((t) => (
            <span key={t} className="skills__pill">{t}</span>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
