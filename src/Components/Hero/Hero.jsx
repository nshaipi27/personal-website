import React from 'react'
import './Hero.css'
import profile from '../../assets/headshot1_2.jpg'
// Import your project screenshots here

import datanzScreenshot from '../../assets/DATANZ.png'
import minesweeperScreenshot from '../../assets/minesweeper.png'
const Hero = () => {
  return (
    <div className="hero">
      <section id="home" className="section">
        <div className="profile-container">
          <img src={profile} alt="Nora Shaipi" className="profile-image" />
        </div>
        <h3>Hi there, I'm Nora. I'm a Computer Science and Mathematics student at Lafayette College. I am a quantum computing researcher and am interested in software development and machine learning.</h3>
        <div className="contact-links">
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Selected Projects</h2>
        <div className="projects-content">
          <div className="project">
            <h3>DATANZ</h3>
            <p className="date">May 2025</p>
            <p className="tech-stack">JavaScript, HTML, CSS, Express.js, Node.js, SQLite, Git</p>
            <div className="project-screenshot-container">
              <img src={datanzScreenshot} alt="DATANZ Project Screenshot" className="project-screenshot" />
            </div>
            <ul>
              <li>Built and deployed a healthcare review website where users can view, filter, and compare service quality, as well as login if granted permission.</li>
              <li>Developed a private data-driven dashboard that allows officials to analyze public feedback, identify worst-performing facilities, and support advanced policy search tools.</li>
              <li>Integrated SQLite for efficient local storage and querying of structured health data; supported filtering by region, wait time, satisfaction level, and service type.</li>
              <li>Leveraged Google Maps's public API to pull live and customizable location data about the facilities.</li>
              <li>Deployed with Render: DATANZ (Username: hi@gmail, Password: hi)</li>
            </ul>
          </div>

          <div className="project">
            <h3>Minesweeper</h3>
            <p className="date">February 2025</p>
            <p className="tech-stack">JavaScript, Node.js, SQLite, HTML, CSS</p>
            <div className="project-screenshot-container">
              <img src={minesweeperScreenshot} alt="Minesweeper Project Screenshot" className="project-screenshot" />
            </div>
            <ul>
              <li>Built and deployed a Minesweeper clone using Node.js and EJS.</li>
              <li>Utilized SQLite to store user information and build a dashboard.</li>
              <li>Deployed with Render: Minesweeper</li>
            </ul>
          </div>
        </div>
      </section>

      

      <section id="skills" className="section">
        <h2>Technical Skills</h2>
        <div className="skills-content">
          <div className="skill-category">
            <h3>Languages</h3>
            <p>Python, JavaScript, Java, SQL, HTML, CSS, C, LaTeX</p>
          </div>
          <div className="skill-category">
            <h3>Frameworks</h3>
            <p>Node.js, Express.js</p>
          </div>
          <div className="skill-category">
            <h3>Developer Tools</h3>
            <p>Git, VSCode, Agile, Figma, Jira, Microsoft Azure</p>
          </div>
          <div className="skill-category">
            <h3>Languages</h3>
            <p>Albanian (fluent), Macedonian (fluent), German (beginner-intermediate)</p>
          </div>
        </div>
      </section>

      <section id="experience" className="section">
        <h2>Professional Experience</h2>
        <div className="experience-content">
          <div className="job">
            <h3>Undergraduate Researcher</h3>
            <p className="company">SenSIP REU Site: Quantum Machine Learning Algorithm Design</p>
            <ul>
              <li>Developed and evaluated a Multilayer Perceptron (MLP) classifier using MFCC features to distinguish between healthy and dysarthric speech samples, achieving over 90% classification accuracy.</li>
              <li>Preprocessed audio datasets by normalizing and balancing class distributions through down sampling techniques.</li>
              <li>Designed and simulated a parameterized quantum circuit for speech classification, integrating classical feature extraction with quantum machine learning techniques.</li>
              <li>Stack: Python, PennyLane, Braket, Matplotlib, Numpy, Pandas, TQDM.</li>
            </ul>
          </div>

          <div className="job">
            <h3>Teaching Assistant and Grader</h3>
            <p className="company">Lafayette College Computer Science Department | August 2024 – Present</p>
            <ul>
              <li>Critically engaged students to identify logic, runtime, and compilation errors and regularly achieved above 80% attendance at office hours.</li>
              <li>Provided detailed feedback on homework assignments and quizzes to students.</li>
            </ul>
          </div>

          <div className="job">
            <h3>Undergraduate Research Assistant</h3>
            <p className="company">Lafayette College Policy Studies and Computer Science Department | January 2025 – May 2025</p>
            <ul>
              <li>Cleaned data sets in Python and trained ML models in Azure for policy-focused research.</li>
              <li>Collaborated and communicated with other students in the CS and Policy Studies department to determine required datasets and goals for our research.</li>
              <li>Stack: Python, Microsoft Azure, Numpy, Pandas.</li>
            </ul>
          </div>
        </div>
      </section>


      <section id="education" className="section">
        <h2>Education</h2>
        <div className="education-content">
          <h3>Lafayette College – Easton, PA</h3>
          <p>August 2023 – May 2027 | GPA: 3.98/4.00</p>
          <p>Bachelor of Science in Computer Science and Bachelor of Arts in Mathematics</p>
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <div className="contact-content">
          <p>Feel free to reach out to me through any of the following:</p>
          <div className="contact-links">
            <a href="mailto:your.email@example.com">Email</a>
            <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </section>
    </div>

  )
}

export default Hero
