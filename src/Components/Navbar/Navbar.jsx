import React, { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'skills', 'experience', 'education', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the section is in view (with some offset for better UX)
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav>
        <ul>
            <li>
              <a 
                href="#home" 
                onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
                className={activeSection === 'home' ? 'active' : ''}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
                className={activeSection === 'projects' ? 'active' : ''}
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#skills" 
                onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}
                className={activeSection === 'skills' ? 'active' : ''}
              >
                Skills
              </a>
            </li>
            <li>
              <a 
                href="#experience" 
                onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}
                className={activeSection === 'experience' ? 'active' : ''}
              >
                Experience
              </a>
            </li>
            <li>
              <a 
                href="#education" 
                onClick={(e) => { e.preventDefault(); scrollToSection('education'); }}
                className={activeSection === 'education' ? 'active' : ''}
              >
                Education
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                className={activeSection === 'contact' ? 'active' : ''}
              >
                Contact
              </a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
