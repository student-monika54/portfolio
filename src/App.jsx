import { useState } from 'react'
import './App.css'

const projects = [
  {
    title: 'Portfolio Website',
    description:
      'A fast, responsive portfolio built with React and Vite. Includes smooth scrolling, responsive layout, and project cards.',
    tags: ['React', 'Vite', 'CSS'],
    link: '#projects',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80'
  },
  {
    title: 'Task Tracker',
    description: 'A small CRUD app for tracking tasks and status with local storage persistence.',
    tags: ['React', 'Hooks', 'LocalStorage'],
    link: '#projects',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80'
  },
  {
    title: 'Design System Demo',
    description: 'A component library demo showing buttons, cards, and a theme switcher.',
    tags: ['Design', 'UX', 'Components'],
    link: '#projects',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80'
  },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      <header className="header">
        <div className="brand">
          <h1 className="brand__name">Your Name</h1>
          <p className="brand__tag">Full‑stack developer</p>
        </div>
        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`nav ${menuOpen ? 'nav--open' : ''}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </nav>
      </header>

      <main className="main">
        <section id="home" className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              Hi, I'm <span className="hero-highlight">Your Name</span>
            </h1>
            <p className="hero-subtitle">
              I create beautiful, functional web experiences that make a difference.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="button button--primary">
                View My Work
              </a>
              <a href="#contact" className="button">
                Get In Touch
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image">
              {/* You can add an avatar image here */}
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <h2>About me</h2>
          <p>
            I'm a passionate software engineer who loves building clean, accessible web
            applications. With expertise in modern web technologies, I enjoy turning ideas into polished interfaces and
            shipping projects that are fast, responsive, and fun to use.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, contributing to open source,
            or sharing knowledge with the developer community.
          </p>
          <div className="skills">
            <span>JavaScript</span>
            <span>React</span>
            <span>HTML & CSS</span>
            <span>TypeScript</span>
            <span>Node.js</span>
            <span>Git</span>
          </div>
        </section>

        <section id="projects" className="section">
          <h2>Selected projects</h2>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <div className="project-image" style={{backgroundImage: `url(${project.image})`}}></div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a className="button" href={project.link}>
                    View details
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>
          <p>
            Have a project in mind or just want to say hello? I'd love to hear from you.
            Let's create something amazing together!
          </p>
          <div className="contact-info">
            <a className="button button--primary" href="mailto:you@example.com">
              Send Email
            </a>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="LinkedIn">
                LinkedIn
              </a>
              <a href="#" className="social-link" aria-label="GitHub">
                GitHub
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                Twitter
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          Built with ❤️ using React + Vite • <span className="footer__muted">2026</span>
        </p>
      </footer>
    </div>
  )
}
