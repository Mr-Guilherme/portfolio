import { useEffect, useState } from 'react';
import './App.css'
import LinkedInIcon from './assets/linkedin.svg?react';
import GitHubIcon from './assets/github.svg?react';
import EmailIcon from './assets/email.svg?react';

function App(): React.JSX.Element {
  const titles: string[] = ['Full Stack', 'SR Backend', 'SR Software'];
  const [animationKey, setAnimationKey] = useState<number>(0);
  const [availabilityText, setAvailabilityText] = useState<string>('');
  const [showAvailabilityCursor, setShowAvailabilityCursor] = useState<boolean>(true);

  const availabilityFullText: string = 'Ready to elevate your next project with cutting-edge solutions';

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey(prev => prev + 1);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let currentIndex = 0;
    let timeoutId: ReturnType<typeof setTimeout>;
    let cursorInterval: ReturnType<typeof setInterval>;
    
    const typingSpeed = (): number => Math.random() * 50 + 30;
    
    const typeAvailabilityText = (): void => {
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

  const handleDownloadCV = (): void => {
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
              <span className="skill" role="button" tabIndex={0}>TypeScript</span>
              <span className="skill" role="button" tabIndex={1}>JavaScript</span>
              <span className="skill" role="button" tabIndex={2}>Node</span>
              <span className="skill" role="button" tabIndex={3}>React</span>
              <span className="skill" role="button" tabIndex={4}>PostgreSQL</span>
              <span className="skill" role="button" tabIndex={5}>Docker</span>
              <span className="skill" role="button" tabIndex={6}>Infra as Code</span>
              <span className="skill" role="button" tabIndex={7}>CI/CD</span>
              <span className="skill" role="button" tabIndex={8}>AI</span>
              <span className="skill" role="button" tabIndex={9}>AWS</span>
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
              <LinkedInIcon aria-hidden="true" />
            </a>

            <a 
              href="https://github.com/mr-guilherme" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-icon"
              aria-label="Guilherme Rodrigues GitHub repositories"
              title="GitHub"
            >
              <GitHubIcon aria-hidden="true" />
            </a>
            
            <a 
              href="mailto:guilherme.m.rods@gmail.com" 
              className="contact-icon"
              aria-label="Send email to guilherme.m.rods@gmail.com"
              title="Email"
            >
              <EmailIcon aria-hidden="true" />
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
