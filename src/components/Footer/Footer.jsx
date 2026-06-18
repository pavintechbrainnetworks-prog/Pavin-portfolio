import { FiGithub, FiLinkedin, FiMail, FiCode, FiHeart } from 'react-icons/fi'
import './Footer.css'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { icon: FiGithub, href: 'https://github.com', label: 'GitHub', id: 'footer-github' },
  { icon: FiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn', id: 'footer-linkedin' },
  { icon: FiMail, href: 'mailto:pavin@example.com', label: 'Email', id: 'footer-email' },
]

export default function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer__glow" />
      <div className="container footer__container">

        {/* Top Row */}
        <div className="footer__top">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <div className="footer__logo-icon"><FiCode size={16} /></div>
              <span className="gradient-text footer__logo-text">Pavin.</span>
            </div>
            <p className="footer__tagline">
              Building scalable web applications and AI-powered platforms that solve real-world problems.
            </p>
            <div className="footer__socials">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="footer__social" aria-label={s.label} id={s.id}>
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div className="footer__nav">
            <h4 className="footer__nav-title">Quick Links</h4>
            <ul className="footer__nav-list">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="footer__nav-link"
                    onClick={(e) => handleNavClick(e, link.href)}
                    id={`footer-nav-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact blurb */}
          <div className="footer__contact">
            <h4 className="footer__nav-title">Contact</h4>
            <div className="footer__contact-items">
              <a href="mailto:pavin@example.com" className="footer__contact-item">
                <FiMail size={14} />
                <span>pavintechbrainnetworks@gmail.com</span>
              </a>
            </div>
            <div className="footer__availability">
              <span className="footer__avail-dot" />
              <span>Available for opportunities</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer__divider" />

        {/* Bottom Row
        <div className="footer__bottom">
          <p className="footer__copy">
            © {new Date().getFullYear()} Pavin. All rights reserved.
          </p>
          <p className="footer__made">
            Made with <FiHeart size={13} className="footer__heart" /> using React & Framer Motion
          </p>
        </div> */}
      </div>
    </footer>
  )
}
