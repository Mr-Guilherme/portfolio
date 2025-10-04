import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const titles = ['Full Stack', 'SR Backend', 'SR Software'];
  const [animationKey, setAnimationKey] = useState(0);
  const [availabilityText, setAvailabilityText] = useState('');
  const [showAvailabilityCursor, setShowAvailabilityCursor] = useState(true);

  const availabilityFullText = 'Ready to elevate your next project with cutting-edge solutions';

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey(prev => prev + 1);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let currentIndex = 0;
    let timeoutId;
    let cursorInterval;
    
    const typingSpeed = () => Math.random() * 50 + 30;
    
    const typeAvailabilityText = () => {
      if (currentIndex < availabilityFullText.length) {
        setAvailabilityText(availabilityFullText.slice(0, currentIndex + 1));
        currentIndex++;
        timeoutId = setTimeout(typeAvailabilityText, typingSpeed());
      }
    };

    timeoutId = setTimeout(typeAvailabilityText, 1000);

    cursorInterval = setInterval(() => {
      setShowAvailabilityCursor(prev => !prev);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(cursorInterval);
    };
  }, [availabilityFullText]);

  const handleDownloadCV = () => {
    alert('CV download functionality to be implemented');
  };

  return (
    <main className="container">
      <section className="hero" role="banner">
        <div className="hero-content">
          <header>
            <h1 className="name">Guilherme Rodrigues</h1>
            <div className="title-container">
              <div className="title-carousel">
                <div className="title-scroll" key={animationKey}>
                  {titles.concat(titles).map((title, index) => (
                    <span key={`${title}-${index}`} className="title-part">
                      {title}
                    </span>
                  ))}
                </div>
              </div>
              <span className="title-fixed">Engineer</span>
            </div>
            <p className="subtitle">
              Transforming ideas into digital reality through innovative solutions
            </p>
          </header>
          
          <section className="skills" aria-label="Technologies and skills">
            <h2 className="visually-hidden">Core Technologies</h2>
            <div className="skills-list">
              <span className="skill" role="button" tabIndex="0">TypeScript</span>
              <span className="skill" role="button" tabIndex="0">JavaScript</span>
              <span className="skill" role="button" tabIndex="0">Node</span>
              <span className="skill" role="button" tabIndex="0">React</span>
              <span className="skill" role="button" tabIndex="0">PostgreSQL</span>
              <span className="skill" role="button" tabIndex="0">Docker</span>
              <span className="skill" role="button" tabIndex="0">Infra as Code</span>
              <span className="skill" role="button" tabIndex="0">CI/CD</span>
              <span className="skill" role="button" tabIndex="0">AI</span>
              <span className="skill" role="button" tabIndex="0">AWS</span>
            </div>
          </section>
          
          <section className="availability terminal-style" aria-label="Project availability status">
            <h3 className="visually-hidden">Project Availability</h3>
            <span className="terminal-prompt">/home/gui &gt; </span>
            <span className="terminal-text">{availabilityText}</span>
            {showAvailabilityCursor && <span className="terminal-cursor">|</span>}
          </section>

          <nav className="contact-icons" aria-label="Contact links and social media">
            <h3 className="visually-hidden">Contact and Social Media</h3>
            <a 
              href="https://www.linkedin.com/in/guilherme-m-rodrigues/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-icon"
              aria-label="Guilherme Rodrigues LinkedIn profile"
              title="LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

            <a 
              href="https://github.com/mr-guilherme" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-icon"
              aria-label="Guilherme Rodrigues GitHub repositories"
              title="GitHub"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            
            <a 
              href="mailto:guilherme.m.rods@gmail.com" 
              className="contact-icon"
              aria-label="Send email to guilherme.m.rods@gmail.com"
              title="Email"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
            
            <button 
              onClick={handleDownloadCV}
              className="contact-icon download-cv"
              aria-label="Download resume in PDF format"
              title="Download CV"
            >
              <span className="cv-text">CV</span>
            </button>
          </nav>
        </div>
      </section>
    </main>
  )
}

export default App
