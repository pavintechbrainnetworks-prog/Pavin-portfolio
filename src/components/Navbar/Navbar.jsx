import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiCode } from 'react-icons/fi'
import './Navbar.css'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 40)

    const sections = navLinks.map(l => l.href.replace('#', ''))
    const scrollY = window.scrollY + 120

    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i])
      if (el && el.offsetTop <= scrollY) {
        setActiveSection(sections[i])
        break
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="navbar__container">
          {/* Logo */}
          <a
            href="#hero"
            className="navbar__logo"
            onClick={(e) => handleNavClick(e, '#hero')}
          >
            <div className="navbar__logo-icon">
              <FiCode size={18} />
            </div>
            <span className="navbar__logo-text">
              <span className="gradient-text">Pavin kumar</span>
              <span className="navbar__logo-dot"> G </span>
            </span> 
          </a>

          {/* Desktop Links */}
          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`navbar__link ${activeSection === link.href.replace('#', '') ? 'navbar__link--active' : ''}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                  {activeSection === link.href.replace('#', '') && (
                    <motion.span
                      className="navbar__link-indicator"
                      layoutId="nav-indicator"
                      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA
          <a
            href="#contact"
            className="navbar__cta btn btn-primary"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            Hire Me
          </a> */}

          {/* Hamburger */}
          <button
            className="navbar__hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle mobile menu"
            id="nav-hamburger"
          >
            <AnimatePresence mode="wait">
              {menuOpen ? (
                <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <FiX size={22} />
                </motion.span>
              ) : (
                <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <FiMenu size={22} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="mobile-menu__backdrop" onClick={() => setMenuOpen(false)} />
            <motion.div className="mobile-menu__panel">
              <div className="mobile-menu__header">
                <span className="gradient-text" style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '1.3rem' }}>Pavin kumar</span>
                <button onClick={() => setMenuOpen(false)} className="mobile-menu__close" aria-label="Close menu">
                  <FiX size={22} />
                </button>
              </div>
              <ul className="mobile-menu__links">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 + 0.1 }}
                  >
                    <a
                      href={link.href}
                      className={`mobile-menu__link ${activeSection === link.href.replace('#', '') ? 'mobile-menu__link--active' : ''}`}
                      onClick={(e) => handleNavClick(e, link.href)}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              {/* <div className="mobile-menu__footer">
                <a href="#contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={(e) => handleNavClick(e, '#contact')}>
                  Hire Me
                </a>
              </div> */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
