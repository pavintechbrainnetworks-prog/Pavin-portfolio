import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiBriefcase, FiCalendar, FiMapPin, FiCheckCircle } from 'react-icons/fi'
import './Experience.css'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } }
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
}

const experiences = [
  {
    role: 'Full Stack Developer',
    company: 'TechBrain Networks Pvt Ltd',
    type: 'Full-time',
    period: 'June 2025 – Present',
    location: 'Thanjavur, India',
    current: true,
    description:
      'Building enterprise-grade web applications and AI-powered platforms for automotive, edtech, and fintech verticals. Architecting scalable MERN solutions serving thousands of users.',
    highlights: [
      'Developed and maintained multiple enterprise web platforms across automotive, aerospace, agriculture, education, and chemical technology domains.',
      'Engineered scalable React applications with optimized rendering, lazy loading, and code splitting strategies.',
      'Designed and integrated secure REST APIs using Node.js, Express.js, MongoDB, and JWT authentication.',
      'Implemented SEO best practices, structured data, and performance optimization techniques.',
      'Built AI-powered features and interactive dashboards to improve operational visibility and user engagement.',
      'Contributed to responsive design systems ensuring accessibility and cross-device compatibility.',
    ],
    tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Gemini AI', 'git', 'github','vercel', 'Render'],
  },
  {
    role: 'Frontend Developer (Intern)',
    company: 'Self-Directed Learning & Projects',
    type: 'Self-Learning',
    period: 'Jan 2024 – May 2025',
    location: 'Thanjavur, India',
    current: false,
    description:
      'Intensive self-directed learning phase — built multiple full-stack projects to master the MERN stack, React ecosystem, and modern CSS techniques.',
    highlights: [
      'Built 8+ full-stack projects',
      'Created responsive, high-performance user interfaces with a strong emphasis on user experience and accessibility.',
      'Adopted modern development workflows, including version control, code organization, and deployment best practices.',
      'Demonstrated the ability to independently learn, solve complex technical challenges, and deliver complete software solutions from concept to deployment.',
    ],
    tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Javascript', 'CSS3', 'Git', 'Github', 'Responsive Web Design'],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="experience section" ref={ref}>
      <div className="container">

        <motion.div
          className="section-header"
          variants={stagger}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.span variants={fadeUp} className="section-label">My Journey</motion.span>
          <motion.h2 variants={fadeUp} className="section-title">
            Work <span>Experience</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="section-subtitle">
            Professional milestones and the skills I've honed along the way.
          </motion.p>
        </motion.div>

        <div className="experience__timeline">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company + exp.role}
              className="experience__item"
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 0.7 }}
            >
              {/* Timeline dot */}
              <div className="experience__dot-wrap">
                <div className={`experience__dot ${exp.current ? 'experience__dot--active' : ''}`}>
                  <FiBriefcase size={14} />
                </div>
                {i < experiences.length - 1 && <div className="experience__line" />}
              </div>

              {/* Card */}
              <motion.div
                className="experience__card glass-card"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                {exp.current && (
                  <span className="experience__current-badge">June 2025 – Present</span>
                )}

                <div className="experience__card-header">
                  <div>
                    <h3 className="experience__role">{exp.role}</h3>
                    <p className="experience__company gradient-text">{exp.company}</p>
                  </div>
                  <span className="experience__type-badge">{exp.type}</span>
                </div>

                <div className="experience__meta">
                  <span className="experience__meta-item">
                    <FiCalendar size={13} /> {exp.period}
                  </span>
                  <span className="experience__meta-item">
                    <FiMapPin size={13} /> {exp.location}
                  </span>
                </div>

                <p className="experience__description">{exp.description}</p>

                <ul className="experience__highlights">
                  {exp.highlights.map((h) => (
                    <li key={h} className="experience__highlight-item">
                      <FiCheckCircle size={14} className="experience__check" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="experience__tech-pills">
                  {exp.tech.map((t) => (
                    <span key={t} className="experience__tech-pill">{t}</span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
