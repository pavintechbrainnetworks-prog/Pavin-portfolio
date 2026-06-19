import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FiExternalLink,
  FiMonitor,
  FiActivity,
  FiTruck,
  FiZap,
  FiShield,
  FiBook,
  FiUsers,
  FiCheckCircle,
  FiGlobe,
  FiCode,
  FiLayout,
  FiWifi,
} from 'react-icons/fi'
import './Projects.css'

/* ─── Animation Variants ─────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
}

/* ─── Stats Data ─────────────────────────────────────── */
const stats = [
  { icon: <FiMonitor size={18} />, label: '7+ Industry Platforms' },
  { icon: <FiLayout size={18} />, label: '100% Responsive Design' },
  { icon: <FiGlobe size={18} />, label: 'SEO Optimised' },
  { icon: <FiCode size={18} />, label: 'Modern React Architecture' },
  { icon: <FiCheckCircle size={18} />, label: 'Production Ready' },
]

/* ─── Tech Badges (shared) ───────────────────────────── */
const commonBadges = ['React', 'CSS', 'Vite', 'SEO', 'Responsive Design']

/* ─── Project Data ───────────────────────────────────── */
const projects = [
  {
    id: 'team-monitoring',
    industry: 'Team Monitoring',
    icon: <FiUsers size={28} />,
    iconBg: 'icon-teal',
    cardAccent: 'accent-teal',
    title: 'Team Monitoring Web App',
    description:
      'A real-time workforce analytics platform featuring live activity tracking, productivity dashboards, attendance management, role-based access control, and detailed performance reports — built for modern distributed teams.',
    tech: commonBadges,
    


  },
  {
    id: 'aerospace',
    industry: 'Aerospace Technology',
    icon: <FiWifi size={28} />,
    iconBg: 'icon-indigo',
    cardAccent: 'accent-indigo',
    title: 'Aerospace Technology Platform',
    description:
      'An enterprise aerospace web platform showcasing avionics systems, satellite technologies, propulsion R&D modules, and compliance documentation — with immersive product pages and performance-optimised assets.',
    tech: commonBadges,
    live: 'https://tn-aerospace.vercel.app/',
  },
  {
    id: 'agriculture',
    industry: 'Agriculture Technology',
    icon: <FiActivity size={28} />,
    iconBg: 'icon-green',
    cardAccent: 'accent-green',
    title: 'Agriculture Technology Platform',
    description:
      'A precision agri-tech platform featuring IoT sensor dashboards, crop monitoring analytics, irrigation automation controls, and supply chain visibility tools for modern smart farming operations.',
    tech: commonBadges,
    live: 'https://tn-agriculture.vercel.app/',
  },
  {
    id: 'automotive',
    industry: 'Automotive Technology',
    icon: <FiTruck size={28} />,
    iconBg: 'icon-blue',
    cardAccent: 'accent-blue',
    title: 'Automotive Technology Platform',
    description:
      'An enterprise automotive digital platform with 20+ product pages, AI-integrated dashboards, EV technology showcases, real-time vehicle analytics, and a glassmorphism design system built for OEMs.',
    tech: commonBadges,
    live: 'https://tn-automotive.vercel.app/',
  },
  {
    id: 'chemical',
    industry: 'Chemical Technology',
    icon: <FiZap size={28} />,
    iconBg: 'icon-amber',
    cardAccent: 'accent-amber',
    title: 'Chemical Technology Platform',
    description:
      'A specialised chemical industry platform featuring process simulation tools, safety data management, material property databases, compliance tracking dashboards, and supplier portal integrations.',
    tech: commonBadges,
    live: 'https://tn-chemical.vercel.app/',
  },
  {
    id: 'defence',
    industry: 'Defence Technology',
    icon: <FiShield size={28} />,
    iconBg: 'icon-crimson',
    cardAccent: 'accent-crimson',
    title: 'Defence Technology Platform',
    description:
      'A secure defence technology showcase featuring surveillance systems, cyber-defence modules, mission-critical communication platforms, and procurement portals — adhering to enterprise security standards.',
    tech: commonBadges,
    live: 'https://tn-defence-technology.vercel.app/',
  },
  {
    id: 'education',
    industry: 'Education Technology',
    icon: <FiBook size={28} />,
    iconBg: 'icon-purple',
    cardAccent: 'accent-purple',
    title: 'Education Technology Platform',
    description:
      'A scalable EdTech platform with an interactive LMS, course management, student progress tracking, live classroom integrations, certification modules, and WCAG-compliant accessibility design.',
    tech: commonBadges,
    live: 'https://tn-education.vercel.app/',
  },
]

/* ─── Component ──────────────────────────────────────── */
export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="pw-section" ref={ref} aria-label="Featured Projects">
      <div className="pw-container">

        {/* ── Section Header ── */}
        <motion.div
          className="pw-header"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0}
        >
          <span className="pw-label">My Work</span>
          <h2 className="pw-title">
            Featured <span className="pw-title-gradient">Projects</span>
          </h2>
          <p className="pw-subtitle">
            A collection of industry-focused digital platforms designed and developed with modern
            web technologies, responsive architecture, and optimized user experiences.
          </p>
        </motion.div>

        {/* ── Stats Banner ── */}
        <motion.div
          className="pw-stats"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={1}
        >
          {stats.map((s, i) => (
            <div className="pw-stat" key={i}>
              <span className="pw-stat-icon">{s.icon}</span>
              <span className="pw-stat-label">{s.label}</span>
            </div>
          ))}
        </motion.div>

        {/* ── Project Grid ── */}
        <div className="pw-grid">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              className={`pw-card ${project.cardAccent}`}
              variants={scaleIn}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={i}
              whileHover={{ y: -10, scale: 1.015 }}
              transition={{ type: 'spring', stiffness: 280, damping: 22 }}
              aria-label={project.title}
            >
              {/* Glow Layer */}
              <div className="pw-card-glow" aria-hidden="true" />

              {/* Card Top */}
              <div className="pw-card-top">
                <div className={`pw-icon-wrap ${project.iconBg}`}>
                  {project.icon}
                </div>
                <span className="pw-industry-chip">{project.industry}</span>
              </div>

              {/* Card Body */}
              <div className="pw-card-body">
                <h3 className="pw-card-title">{project.title}</h3>
                <p className="pw-card-desc">{project.description}</p>

                {/* Tech Badges */}
                <div className="pw-badges" aria-label="Technologies used">
                  {project.tech.map((t) => (
                    <span className="pw-badge" key={t}>{t}</span>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="pw-card-footer">
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pw-demo-btn"
                  id={`demo-${project.id}`}
                  aria-label={`Live demo of ${project.title}`}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <FiExternalLink size={15} />
                  Open Website
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  )
}
