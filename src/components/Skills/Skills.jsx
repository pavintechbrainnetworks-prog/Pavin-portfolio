import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FiCode, FiServer, FiDatabase, FiTool, FiCpu, FiLayers
} from 'react-icons/fi'
import './Skills.css'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
}

const skillCategories = [
  {
    icon: FiCode,
    label: 'Frontend',
    color: 'blue',
    skills: [
      { name: 'React.js',    level: 90 },
      { name: 'JavaScript',  level: 90 },
      { name: 'HTML5/CSS3',  level: 92 },
    ]
  },
  {
    icon: FiServer,
    label: 'Backend',
    color: 'cyan',
    skills: [
      { name: 'Node.js',    level: 85 },
      { name: 'Express.js', level: 87 },
      { name: 'REST APIs',  level: 90 },
      { name: 'JWT Auth',   level: 82 },
    ]
  },
  {
    icon: FiDatabase,
    label: 'Database',
    color: 'purple',
    skills: [
      { name: 'MongoDB',    level: 85 },
      { name: 'Mongoose',   level: 83 },
    ]
  },
  // {
  //   icon: FiCpu,
  //   label: 'AI / ML',
  //   color: 'green',
  //   skills: [
  //     { name: 'Python',       level: 72 },
  //     { name: 'LangChain',    level: 65 },
  //     { name: 'Gemini API',   level: 80 },
  //     { name: 'OpenAI API',   level: 78 },
  //   ]
  // },
  {
    icon: FiTool,
    label: 'DevOps & Tools',
    color: 'orange',
    skills: [
      { name: 'Git / GitHub', level: 90 },
      { name: 'Render / Vercel', level: 82 },
      { name: 'Postman',      level: 88 },
      { name: 'VS Code',      level: 95 },
    ]
  },
  {
    icon: FiLayers,
    label: 'Other Skills',
    color: 'pink',
    skills: [
      { name: 'UI/UX Design', level: 95 },
      { name: 'Responsive Design', level: 90 },
      { name: 'SEO Best Practices', level: 90 },
    ]
  },
]

function SkillBar({ name, level, inView, delay = 0 }) {
  return (
    <div className="skill__bar-wrap">
      <div className="skill__bar-header">
        <span className="skill__bar-name">{name}</span>
        <span className="skill__bar-pct">{level}%</span>
      </div>
      <div className="skill__bar-track">
        <motion.div
          className="skill__bar-fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>
    </div>
  )
}

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
              <div className="skills__card-header">
                <div className={`skills__icon-wrap skills__icon-wrap--${cat.color}`}>
                  <cat.icon size={18} />
                </div>
                <h3 className="skills__card-title">{cat.label}</h3>
              </div>
              <div className="skills__bars">
                {cat.skills.map((s, si) => (
                  <SkillBar
                    key={s.name}
                    name={s.name}
                    level={s.level}
                    inView={inView}
                    delay={ci * 0.1 + si * 0.07 + 0.3}
                  />
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
