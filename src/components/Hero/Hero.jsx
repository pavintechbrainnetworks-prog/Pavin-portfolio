import { useEffect, useRef, useMemo } from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight, FiDownload, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi'
import './Hero.css'

const PARTICLE_COUNT = 60

function ParticleCanvas() {
  const canvasRef = useRef(null)
  const animRef = useRef(null)
  const particlesRef = useRef([])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let width = window.innerWidth
    let height = window.innerHeight

    canvas.width = width
    canvas.height = height

    const createParticles = () => {
      particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        color: Math.random() > 0.5 ? '37, 99, 235' : Math.random() > 0.5 ? '6, 182, 212' : '139, 92, 246',
      }))
    }

    createParticles()

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      const particles = particlesRef.current

      // Draw connections
      particles.forEach((p, i) => {
        particles.slice(i + 1).forEach(q => {
          const dist = Math.hypot(p.x - q.x, p.y - q.y)
          if (dist < 120) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(37, 99, 235, ${0.08 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.stroke()
          }
        })
      })

      // Draw particles
      particles.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${p.color}, ${p.opacity})`
        ctx.fill()

        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1
      })

      animRef.current = requestAnimationFrame(draw)
    }

    draw()

    const handleResize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
      createParticles()
    }

    window.addEventListener('resize', handleResize, { passive: true })

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="hero__canvas" />
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } }
}

const roles = ['MERN Stack Developer', 'Full Stack Engineer', 'React.js Specialist']

export default function Hero() {
  const scrollToSection = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero">
      <ParticleCanvas />

      {/* Gradient Orbs */}
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />
      <div className="hero__orb hero__orb--3" />

      <div className="container hero__container">
        <motion.div
          className="hero__content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="hero__badge">
            <span className="hero__badge-dot" />
            <span>Available for opportunities</span>
          </motion.div>

          {/* Greeting */}
          {/* <motion.p variants={itemVariants} className="hero__greeting">
            Hello, I'm
          </motion.p> */}

          {/* Name */}
          <motion.h1 variants={itemVariants} className="hero__name">
            <span className="gradient-text">Pavin kumar G</span>
          </motion.h1>

          {/* Animated Role */}
          <motion.div variants={itemVariants} className="hero__role-wrapper">
            {/* <span className="hero__role-prefix">I'm a </span> */}
            <span className="hero__role gradient-text-2">Full-Stack Software Engineer | MERN Stack Developer</span>
          </motion.div>

          {/* Headline */}
          <motion.p variants={itemVariants} className="hero__headline">
            Designing and building scalable web applications, enterprise platforms, and AI-powered digital solutions that deliver measurable business impact.
            <br />
            Currently developing enterprise-grade applications at TechBrain Networks Pvt Ltd.
          </motion.p>

          {/* Company */}
          <motion.div variants={itemVariants} className="hero__company">
            <div className="hero__company-dot" />
            <span>Full Stack Developer @ <strong ><a href="https://techbrainnetworks.com/">TechBrain Networks Pvt Ltd</a></strong></span>
            <span className="hero__company-date">June 2025 – Present</span>
          </motion.div>

          {/* Buttons */}
          <motion.div variants={itemVariants} className="hero__buttons">
            <button
              className="btn btn-primary hero__btn"
              id="hero-view-projects"
              onClick={() => scrollToSection('#projects')}
            >
              View Projects <FiArrowRight size={18} />
            </button>
            <a
              href="/Pavinkumar_Resume.pdf"
              className="btn btn-secondary hero__btn"
              id="hero-download-resume"
              download="Pavinkumar_Resume.pdf"
            >
              <FiDownload size={18} /> Download Resume
            </a>
            <button
              className="btn btn-outline hero__btn"
              id="hero-contact"
              onClick={() => scrollToSection('#contact')}
            >
              <FiMail size={18} /> Contact Me
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="hero__socials">
            <a
              href="https://github.com/pavintechbrainnetworks-prog"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="GitHub"
              id="hero-github"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/pavinkumar-g-890233417?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="LinkedIn"
              id="hero-linkedin"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href="https://mail.google.com/mail/u/0/#sent?compose=CllgCJvnJtGWrhgbGTnwBCSXmzfpCpWRrsDzTfmqlRPwlHHtgDQZRcCvfVDXJfWqKpnwDJCwrbq"
              className="hero__social-link"
              aria-label="Email"
              id="hero-email"
            >
              <FiMail size={20} />
            </a>
            <div className="hero__social-line" />
          </motion.div>
        </motion.div>

        {/* Right: Avatar / Code Card */}
        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="hero__avatar-ring">
            <div className="hero__avatar">
              <div className="hero__avatar-inner">
                <span className="hero__avatar-initials gradient-text">P</span>
              </div>
            </div>
          </div>

          {/* Floating code card */}
          {/* <motion.div
            className="hero__code-card glass-card"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="hero__code-header">
              <span className="hero__code-dot hero__code-dot--red" />
              <span className="hero__code-dot hero__code-dot--yellow" />
              <span className="hero__code-dot hero__code-dot--green" />
              <span className="hero__code-filename">developer.js</span>
            </div>
            <div className="hero__code-body">
              <div><span className="hero__code-keyword">const</span> <span className="hero__code-var">developer</span> <span className="hero__code-op">=</span> {'{'}</div>
              <div className="hero__code-indent"><span className="hero__code-key">name:</span> <span className="hero__code-str">'Pavin'</span>,</div>
              <div className="hero__code-indent"><span className="hero__code-key">role:</span> <span className="hero__code-str">'MERN Dev'</span>,</div>
              <div className="hero__code-indent"><span className="hero__code-key">skills:</span> [<span className="hero__code-str">'React'</span>, <span className="hero__code-str">'Node'</span>],</div>
              <div className="hero__code-indent"><span className="hero__code-key">status:</span> <span className="hero__code-str">'available'</span> ✓</div>
              <div>{'}'}</div>
            </div>
          </motion.div> */}

          {/* Floating stats card */}
          <motion.div
            className="hero__stats-card glass-card"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          >
            <div className="hero__stat">
              <span className="hero__stat-number gradient-text">8+</span>
              <span className="hero__stat-label">Projects</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-number gradient-text-2">1+</span>
              <span className="hero__stat-label">Year Exp</span>
            </div>
          </motion.div>

          {/* Tech pills */}
          {/* {['React', 'Node.js', 'MongoDB'].map((tech, i) => (
            <motion.div
              key={tech}
              className={`hero__tech-pill hero__tech-pill--${i + 1}`}
              animate={{ y: [0, -8 + i * 4, 0] }}
              transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.7 }}
            >
              {tech}
            </motion.div>
          ))} */}
        </motion.div>
      </div>

      {/* Scroll indicator
      <motion.div
        className="hero__scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="hero__scroll-mouse">
          <motion.div
            className="hero__scroll-wheel"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
        <span>Scroll down</span>
      </motion.div> */}
    </section>
  )
}
