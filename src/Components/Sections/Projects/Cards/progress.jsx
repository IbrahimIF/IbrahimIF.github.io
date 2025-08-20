import styled from 'styled-components';
import { useState } from 'react';
import { FaGithub, FaChevronDown, FaChevronUp } from "react-icons/fa6";


function InProgress() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => setShowMore(!showMore);

  const projects = [
    { 
      id: 1,
      banner: './assets/Projects/Banner-SERN.png', 
      bgcolor: "#26c3a5",
      title: "Full-Stack Chat-App", 
      description: "A simple Full-stack chat app to send and receive messages.", 
      technologies: ["React + Vite", "Node.js", "Socket.io"],
      demoLink: "https://fs-chat-app.vercel.app/",
      githubLink: "https://github.com/IbrahimIF/FS-Chat-App"
    },
    { 
      id: 2, 
      banner: 'CV Mix and Match', 
      title: "CV Mix and Match", 
      description: "A way to mix and match the different sections of your CV to help with making your CV releveant to company.", 
      technologies: ["React + Vite, Django, Postgres"],
      githubLink: "#"
    },
    { 
      id: 3,
      banner: './assets/Projects/Banner-P.png',
      bgcolor: "#ff474d", 
      title: "Pokedex", 
      description: "A replica of the pokedex from the pokemon anime.", 
      technologies: ["React + Vite", "Tailwind CSS", "PokeAPI"],
      demoLink: "https://pokedex-bice-zeta.vercel.app/",
      githubLink: "https://github.com/IbrahimIF/Pokedex"
    },
    {
      id: 4,
      banner: 'Project Scribe',
      title: "Project Scribe",
      description: "A discord bot assistant to help organise and sort links, messages and code snippets in private servers.",
      technologies: ["Python", "Discord"],
      githubLink: "#"
    },
    { 
      id: 5,
      banner: './assets/Projects/Banner-DD.png',
      bgcolor: "#00b050",
      title: "Adhkar Daily", 
      description: "Dhikr is a form of Islamic worship where phrases or prayers are repeatedly recited to remember God.", 
      technologies: ["React + Vite", "JavaScript", "Electron"],
      githubLink: "https://github.com/IbrahimIF/Dhikr-Project"
    },
    { 
      id: 6,
      banner: 'Thermal-print-py',  
      title: "Thermal-print-py", 
      description: "A Python application that prints ASCII art to your local printer, via either Bluetooth or USB.", 
      technologies: ["Python"],
      githubLink: "https://github.com/IbrahimIF/thermal-print-py"
    },
  ];

  const visibleProjects = showMore ? projects : projects.slice(0, 6);

return (
    <ProgressSection id="Progress">
      <div style={{ width: '100%' }}>
      <ProjectsGrid>
         {visibleProjects.map((project) => (
          <ProjectCard key={project.id}>
            <div className="project-card">
              <div className="banner-container" style={{background: project.bgcolor }}>
                {project.banner && project.banner.startsWith('./assets/') ? (
                    <img src={project.banner} alt={project.title} className="banner" />
                  ) : (
                    <NoBannerText>{project.title}</NoBannerText>
                )}
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
                    <a className="LiveButton" href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  )}
                  {project.githubLink && (
                    <a className="GithubButton" href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <FaGithub /> &nbsp; <div> Github </div>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </ProjectCard>
         ))}
       </ProjectsGrid>

       {projects.length > 6 && (
          <ToggleButton onClick={toggleShowMore}>
            {showMore ? <FaChevronUp /> : <FaChevronDown />}
            <span>{showMore ? "Show Less" : "Show More"}</span>
          </ToggleButton>
        )}
      </div>
    </ProgressSection>
  )
}
export default InProgress

const ProgressSection = styled.section`
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
  background-image: linear-gradient(163deg,rgb(0, 6, 86) 0%,rgb(33, 0, 153) 100%);
  border-radius: 12px;
  transition: all .3s;

  &:hover {
    box-shadow: 0px 0px 30px 1px rgba(0, 73, 198, 0.3);
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

.banner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 12rem;
  background-color: white;
  color: black;
  border: 2px solid rgb(90, 90, 90);
  border-radius: 10px;
  overflow: hidden;
}

.banner {
  display: flex;
  justify-content: center;
  width: 100%;
  object-fit: cover;
  object-position: center;
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

.LiveButton{
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
  cursor: pointer;
  border: none; /* Ensure no default button border if 'as="button"' is used */
  background: linear-gradient(to right, #3b82f6, #2563eb);

  &:hover {
  background: linear-gradient(to right, #2563eb, #1d4ed8);
    transform: translateY(-0.125rem);
  }
}

.GithubButton{
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
  cursor: pointer;
  border: none; /* Ensure no default button border if 'as="button"' is used */
  background: linear-gradient(to right, #374151, #1f2937);
  

  &:hover {
  background: linear-gradient(to right, #1f2937, #111827);
    transform: translateY(-0.125rem);
  }
}

`;


const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem auto 0 auto;
  padding: 0.75rem 1.5rem;
  background-color: transparent;
  color:rgb(212, 212, 212);
  background-color:rgb(19, 19, 52);
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
  gap: 0.5rem;
  font-size: 1rem;

  &:hover {
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px,rgb(62, 62, 62) 0 -3px 0 inset;
    transform: translateY(-1px);
  }

  svg {
    transition: transform 0.3s ease;
    transform: ${props => (props.showMore ? 'rotate(180deg)' : 'rotate(0deg)')};
  }
`;



const NoBannerText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 12rem;
  color: black;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
`;