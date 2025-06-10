import React from 'react'
import './Hero.css'
import profile from '../../assets/headshot1_2.jpg'
import { 
  DiPython,
  DiJavascript1,
  DiJava,
  DiMysql,
  DiHtml5,
  DiCss3,
  DiC,
  DiLatex,
  DiNodejs,
  DiReact,
  DiGit,
  DiVisualstudio,
  DiJira,
  DiAzure
} from 'devicons-react'
// Import your project screenshots here




import datanzScreenshot from '../../assets/DATANZ.png'
import minesweeperScreenshot from '../../assets/minesweeper.png'

const SkillIcon = ({ Icon, name }) => {
  if (!Icon) return null
  
  return (
    <div className="skill-icon" title={name}>
      <Icon size={40} />
    </div>
  )
}

const Hero = () => {
  const languages = [
    { name: 'Python', Icon: DiPython },
    { name: 'JavaScript', Icon: DiJavascript1 },
    { name: 'Java', Icon: DiJava },
    { name: 'SQL', Icon: DiMysql },
    { name: 'HTML', Icon: DiHtml5 },
    { name: 'CSS', Icon: DiCss3 },
    { name: 'C', Icon: DiC },
    { name: 'LaTeX', Icon: DiLatex }
  ]

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React.js', icon: 'devicon-react-original' },
        { name: 'Next.js', icon: 'devicon-nextjs-original' },
        { name: 'HTML5', icon: 'devicon-html5-plain' },
        { name: 'CSS3', icon: 'devicon-css3-plain' },
        { name: 'JavaScript', icon: 'devicon-javascript-plain' },
        { name: 'TypeScript', icon: 'devicon-typescript-plain' },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: 'devicon-nodejs-plain' },
        { name: 'Python', icon: 'devicon-python-plain' },
        { name: 'Java', icon: 'devicon-java-plain' },
        { name: 'PostgreSQL', icon: 'devicon-postgresql-plain' },
        { name: 'MongoDB', icon: 'devicon-mongodb-plain' },
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', icon: 'devicon-git-plain' },
        { name: 'Docker', icon: 'devicon-docker-plain' },
        { name: 'AWS', icon: 'devicon-amazonwebservices-original' },
        { name: 'Linux', icon: 'devicon-linux-plain' },
      ]
    }
  ];

  const frameworks = [
    { name: 'Node.js', Icon: DiNodejs },
    { name: 'React.js', Icon: DiReact }
  ]

  const tools = [
    { name: 'Git', Icon: DiGit },
    { name: 'VSCode', Icon: DiVisualstudio },
    { name: 'Jira', Icon: DiJira },
    { name: 'Microsoft Azure', Icon: DiAzure }
  ]

  return (
    <div className="hero">
      <section id="home" className="section">
        <div className="profile-container">
          <img src={profile} alt="Nora Shaipi" className="profile-image" />
        </div>
        <h3>Hi there, I'm Nora. I'm a Computer Science and Mathematics student at Lafayette College. I am a quantum computing researcher and am interested in software development and machine learning.</h3>
        <div className="contact-links">
          <a href="https://www.linkedin.com/in/nora-shaipi/" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
          <a href="https://github.com/nshaipi27" target="_blank" rel="noopener noreferrer">GitHub</a>
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

      <section id="skills" className="skills-section">
      <div className="container">
        <h2>My Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <i className={skill.icon}></i>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
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
