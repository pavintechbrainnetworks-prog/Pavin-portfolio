import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMail, FiMapPin, FiPhone, FiSend, FiGithub, FiLinkedin, FiTwitter, FiCheckCircle } from 'react-icons/fi'
import './Contact.css'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
}

const contactInfo = [
  { icon: FiMail, label: 'Email', value: 'pavintechbrainnetworks@gmail.com', href: 'mailto:pavintechbrainnetworks@gmail.com' },
  { icon: FiMapPin, label: 'Location', value: 'Thanjavur, Tamil Nadu, India', href: null },
  { icon: FiPhone, label: 'Phone', value: '+91 9047141532', href: 'tel:+919047141532' },
]

const socials = [
  { icon: FiGithub, label: 'GitHub', href: 'https://github.com/pavintechbrainnetworks-prog', id: 'contact-github' },
  { icon: FiLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/pavinkumar-g-890233417?utm_source=share_via&utm_content=profile&utm_medium=member_android', id: 'contact-linkedin' },
  { icon: FiMail, label: 'Email', href: 'https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=DmwnWrRnXmmjgpffCrNJxmrpkjBJlVpmWmKPSXsbqdxqjZCctVnNmKkdgRJwpMlmZFcRqBjrzhVb', id: 'contact-email' },
]

const initialForm = { Name: '', Email: '', Subject: '', Message: '' }

export default function Contact() {
  const ref = useRef(null)
  const formRef = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Client-side validation check
    if (!form.Name.trim() || !form.Email.trim() || !form.Subject.trim() || !form.Message.trim()) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
      return
    }

    setStatus('sending')
    try {
      const response = await fetch("https://formsubmit.co/ajax/pavintechbrainnetworks@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: form.Name,
          email: form.Email,  
          subject: form.Subject,
          message: form.Message,
          _captcha: "false"
        })
      })

      if (response.ok) {
        setStatus('success')
        setForm(initialForm)
      } else {
        setStatus('error')
      }
    } catch (err) {
      console.error("Form submission error:", err)
      setStatus('error')
    }
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section id="contact" className="contact section" ref={ref}>
      <div className="container">

        <motion.div
          className="section-header"
          variants={stagger}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.span variants={fadeUp} className="section-label">Get In Touch</motion.span>
          <motion.h2 variants={fadeUp} className="section-title">
            Contact <span>Me</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="section-subtitle">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </motion.p>
        </motion.div>

        <div className="contact__grid">

          {/* Left: Info */}
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h3 className="contact__info-heading">
              Let's build something <span className="gradient-text">amazing together</span>
            </h3>
            <p className="contact__info-text">
              I'm currently available for freelance work and full-time opportunities.
              If you have a project that needs some love, or just want to chat — reach out!
            </p>

            <div className="contact__info-items">
              {contactInfo.map((item) => (
                <div key={item.label} className="contact__info-item glass-card">
                  <div className="contact__info-icon">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <span className="contact__info-label">{item.label}</span>
                    {item.href ? (
                      <a href={item.href} className="contact__info-value">{item.value}</a>
                    ) : (
                      <span className="contact__info-value">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="contact__socials">
              <p className="contact__socials-label">Connect with me</p>
              <div className="contact__social-row">
                {socials.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="contact__social-link" aria-label={s.label} id={s.id}>
                    <s.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            className="contact__form-wrap glass-card"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {status === 'success' ? (
              <motion.div
                className="contact__success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <FiCheckCircle size={48} className="contact__success-icon" />
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. I'll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="contact__form" noValidate>
                <h3 className="contact__form-title">Send a Message</h3>

                <div className="contact__form-row">
                  <div className="contact__field">
                    <label htmlFor="contact-name">Your Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      placeholder="Enter Your Name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="contact__field">
                    <label htmlFor="contact-email">Email Address</label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      placeholder="Enter Your Email"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="contact__field">
                  <label htmlFor="contact-subject">Subject</label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    placeholder="Project Collaboration"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact__field">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                {status === 'error' && (
                  <p className="contact__error">Something went wrong. Please try again.</p>
                )}

                <button
                  type="submit"
                  className="btn btn-primary contact__submit"
                  id="contact-submit"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? (
                    <><span className="contact__spinner" /> Sending...</>
                  ) : (
                    <><FiSend size={16} /> Send Message</>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
