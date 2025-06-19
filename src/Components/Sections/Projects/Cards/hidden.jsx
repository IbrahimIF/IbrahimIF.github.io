import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Hidden() {
  const projects = [
    {
      id: 1,
      banner: 'Project Harvester',
      title: "Project Harvester",
      description: "A Full-Stack web scraper application that searches for vercel websites, filtering using keywords from the name.",
      technologies: ["React.ts + Vite", "Python", "AWS"],
      githubLink: "#"
    },
    {
      id: 2,
      banner: 'Proximity Map',
      title: "Proximity Map",
      description: "An interactive map to find the distance from a user's location to multiple other points, helping to identify the closest one.",
      technologies: ["React.ts + Vite", "Python", "AWS"],
      githubLink: "#"
    },
    {
      id: 3,
      banner: 'Project Scribe',
      title: "Project Scribe",
      description: "Project Scribe",
      technologies: ["Python", "Discord"],
      githubLink: "#"
    },
    {
      id: 4,
      banner: 'MoonBaseAlpha',
      title: "MoonBaseAlpha",
      description: "A Full-Stack application that converts text to speech.",
      technologies: ["React.ts + Vite", "Python", "AWS"],
      githubLink: "#"
    },
    { 
      id: 5,
      banner: 'Prompt.exe', 
      title: "Prompt.exe", 
      description: " A game made with C#, speak to a computer giving prompts, with hidden secrets and achievments.", 
      technologies: ["C#"],
      githubLink: "#"
    },
    { 
      id: 6,
      banner: 'VisionNumReader',  
      title: "Project 3", 
      description: "A Python application that uses computer vision to detect and read numbered cards from a camera feed, then converts the recognized numbers to speech.", 
      technologies: ["Python"],
      githubLink: "#"
    },
    { 
      id: 7,
      banner: 'Dhikr Project',  
      title: "Dhikr Project", 
      description: "Dhikr is a form of Islamic worship where phrases or prayers are repeatedly recited to remember God.", 
      technologies: ["React.js + Vite", "Javascript", "CSS"],
      githubLink: "#"
    },
    { 
      id: 8,
      banner: 'PS2-Bios-Menu-Sounds',  
      title: "PS2-Bios-Menu-Sounds", 
      description: "Based on the Garry'sMod mod that adds a PS2 Bios sounds to the menu and buttons, this will be for VScode as an extension ", 
      technologies: ["Typescript", "Vscode-extension"],
      githubLink: "https://github.com/IbrahimIF/PS2-Bios-Menu-Sounds"
    },
    { 
      id: 9, 
      banner: 'Not A Site', 
      title: "Note A Site", 
      description: "Remake of a 2016 idea and a 2019 project named This-Is-Not-A-Web-Site, A usless Website that does nothing but waste your time. ", 
      technologies: ["React.js + Vite", "Javascript", "CSS"],
      githubLink: "https://github.com/IbrahimIF/Not-A-Site"
    },
  ];

return (
    <HiddenSection id="Hidden">
        <ProjectsGrid>
        {projects.map((project) => (
          <ProjectCard key={project.id}>
            <div className="project-card">
              <div className="image-placeholder">
                {project.title}
              </div>
              
              <div className="card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                {project.technologies && (
                  <div className="technologies-section">
                    <h4>Technologies:</h4>
                    <div className="tech-tags">
                      {project.technologies.map((tech, index) => (
                        <span key={index}>{tech}</span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="action-buttons">
                  {project.demoLink && (
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  )}
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faGithub} className="icon" /> &nbsp; <div> Github </div>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </HiddenSection>
  )
}
export default Hidden

const HiddenSection = styled.section`
  display: flex;
  justify-content: center;
  padding: 0;
  padding-top: 4rem;
  height: 100%;
`;


const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(200px, auto);
  gap: 3rem;
  width: 100%;
  padding: 0 1rem;

  @media (max-width: 1234px) {
      grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 928px) {
      grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  background-image: linear-gradient(163deg,rgb(0, 6, 86) 0%, #3700ff 100%);
  border-radius: 12px;
  transition: all .3s;

  &:hover {
    box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.30);
  }  

.project-card {
  width: 100%;
  height: 100%;
  background-color: #1a1a1a;
  border-radius: 10px;
  transition: all 0.2s;
  color: white;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: scale(0.98);
  border-radius: 12px;
}

.image-placeholder {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 12rem;
  background-color: white;
  color: black;
  border: 2px solid rgb(90, 90, 90);
  border-radius: 10px;
}

.card-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
}

.card-content h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color:rgb(190, 190, 191);
  margin-bottom: 0.5rem;
}

.card-content p {
  color:rgb(179, 179, 179);
  font-size: 0.875rem;
  margin-bottom: 1rem;
  flex-grow: 1;
  line-height: 1.625;
}

.technologies-section {
  margin-bottom: 1rem;
  margin-top: auto;
}

.technologies-section h4 {
  font-size: 0.875rem;
  font-weight: 600;
  color:rgb(166, 168, 170);
  margin-bottom: 0.5rem;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tags span {
  background-color: #dbeafe;
  color: #1e40af;
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.125rem 0.625rem;
  border-radius: 9999px;
}

.action-buttons {
  display: flex;
  justify-content: flex-start;
  gap: 0.75rem;
  margin-top: 1rem;
}

.action-buttons a {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  color: white;
  font-weight: 600;
  font-size: 0.875rem;
  border-radius: 0.375rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  transition: all 300ms;
}

.action-buttons a:hover {
  transform: translateY(-0.125rem);
}

.action-buttons a:first-child {
  background: linear-gradient(to right, #3b82f6, #2563eb);
}

.action-buttons a:first-child:hover {
  background: linear-gradient(to right, #2563eb, #1d4ed8);
}

.action-buttons a:last-child {
  background: linear-gradient(to right, #374151, #1f2937);
}

.action-buttons a:last-child:hover {
  background: linear-gradient(to right, #1f2937, #111827);
}

`;
