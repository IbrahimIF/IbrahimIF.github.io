import React, { useState } from 'react';
import styled from 'styled-components';
import { FaGithub, FaChevronDown, FaChevronUp } from "react-icons/fa6";
import QuestionMessage from '../../Messages/QuestionScreen/QuestionMessage';

function Completed({counter}) {
  const [showQuestionMessage, setShowQuestionMessage] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => setShowMore(!showMore);


  const projects = [
    {
      id: 1,
      banner: './assets/Projects/Banner-IIF.png',
      title: "IbrahimIF.dev",
      bgcolor: "black",
      description: "The current website you are on now.",
      technologies: ["React + Vite", "Node.js", "Three.js"],
      demoLink: "__question__",
      githubLink: "https://github.com/IbrahimIF/IbrahimIF.github.io"
    },
    {
      id: 2,
      banner: './assets/Projects/Banner-F.png',
      bgcolor: "black",
      title: "Frictionless",
      description: "Frictionless - 'Reduce the friction between you and the code.'",
      technologies: ["React + Vite", "MongoDB", "Node.js"],
      demoLink: "https://frictionless-beta.vercel.app/",
      githubLink: "https://github.com/IbrahimIF/Frictionless"
    },
    {
      id: 3,
      banner: './assets/Projects/Banner-PSA.png',
      title: "Pinnacle Studio Architecture",
      description: "A privated client project.",
      technologies: ["React + Vite", "Javascript", "CSS"],
      demoLink: "https://pinnaclestudioarchitecture.co.uk/",
      githubLink: "https://github.com/IbrahimIF/Architecture-Site"
    },
    {
      id: 4,
      banner: './assets/Projects/Banner-Z.png',
      bgcolor: "#2e3631",
      title: "Ziphon-LTD",
      description: "A website that helps save energy for residents.",
      technologies: ["React", "MySQL", "Node.js"],
      githubLink: "https://github.com/IbrahimIF/Ziphon-LTD"
    },
    {
      id: 5,
      banner: './assets/Projects/Banner-FRV.png',
      bgcolor: "#fff4f4",
      title: "F.R.V",
      description: "A simple Full-Stack, serverless application that sends, receives and displays data.",
      technologies: ["React + Vite", "FireBase", "Javascript"],
      demoLink: "https://fern-delta.vercel.app/",
      githubLink: "https://github.com/IbrahimIF/FRV"
    },
    {
      id: 6,
      banner: './assets/Projects/Banner-MERN.png',
      bgcolor: "black",
      title: "M.E.R.N",
      description: "A simple Full-Stack application that sends, receives and displays data.",
      technologies: ["React + Vite", "MongoDB", "Node.js"],
      demoLink: "https://mern-frontend-kappa-drab.vercel.app/",
      githubLink: "https://github.com/IbrahimIF/MERN"
    },
    {
      id: 7,
      banner: './assets/Projects/Banner-DMY.png',
      bgcolor: "#5864f2",
      title: "Discord Mute Yourself",
      description: "A python project that Mutes your microphone on discord, using voice detection from both input and output sources.",
      technologies: ["Python", "Discord", "PyAudio"],
      githubLink: "https://github.com/IbrahimIF/Discord-Mute-Yourself"
    },
    {
      id: 8,
      banner: './assets/Projects/Banner-PC.png',
      bgcolor: "#142446",
      title: "Paradox-Chrono",
      description: "My first games project created on unity game engine.",
      technologies: ["C#", "Unity", "Blender"],
      githubLink: "https://github.com/IbrahimIF/Paradox-Chrono"
    },
    {
      id: 9,
      banner: 'Pneumonia-Detection',
      title: "pneumonia-detection",
      description: "Detecting pneumonia based on xray images using AI and Iteration",
      technologies: ["Python", "Jupiter-notebook"],
      githubLink: "https://github.com/IbrahimIF/pneumonia-detection"
    },
    {
      id: 10,
      banner: 'CopyCat',
      title: "CopyCat",
      description: "A simple Python project, using Text to Speech to copy what is being said through the Microphone.",
      technologies: ["Python", "ElevenLabs", "PyAudio"],
      githubLink: "https://github.com/IbrahimIF/CopyCat"
    },
    {
      id: 11,
      banner: 'Seating-Plan',
      title: "Seating-Plan",
      description: "A 1st year of university group project.",
      technologies: ["Java", "JFrame", "Eclipse"],
      githubLink: "https://github.com/IbrahimIF/Seating-Plan"
    },
    {
      id: 12,
      banner: 'Car-Park-App',
      title: "Car-Park-App",
      description: "A multi-threaded Java client-server application demonstrating a car park management system for the CS3004 Network Computing module.",
      technologies: ["Java", "Eclipse"],
      githubLink: "https://github.com/IbrahimIF/Car-Park-App"
    },
    ...(counter > 12 ? [
    {
      id: 13,
      banner: 'Starship Canvas Animation',
      title: "Starship-Canvas-Animation",
      description: "An animated background full of Iconic Star Wars cruisers and Star Destroyers.",
      technologies: ["Javascript", "HTML", "CSS"],
      demoLink: "https://starship-canvas-animation.vercel.app/",
      githubLink: "https://github.com/IbrahimIF/Starship-Canvas-Animation"
    },
    {
      id: 14,
      banner: './assets/Projects/Banner-SB.png',
      title: "Switch-Board",
      bgcolor: "white",
      description: "A large display of light switches, based on an interactive site founded in 2006.",
      technologies: ["React + Vite", "Javascript", "CSS"],
      demoLink: "https://switch-board.vercel.app/",
      githubLink: "https://github.com/IbrahimIF/Switch-Board"
    },
    {
      id: 15,
      banner: './assets/Projects/Banner-RB.png',
      title: "Red Button",
      description: "Description of project 5 with details about what it does and technologies used.",
      technologies: ["React", "Javascript", "PostgreSQL"],
      demoLink: "https://switch-board.vercel.app/",
      githubLink: "#"
    },
    {
      id: 16,
      banner: './assets/Projects/Banner-GT.png',
      title: "University Graduation Timer",
      description: "A Countdown Timer to Graduation (Its way past its limit).",
      technologies: ["React + Vite", "Javascript", "CSS"],
      demoLink: "https://university-graduation-timer.vercel.app/",
      githubLink: "https://github.com/IbrahimIF/University-Graduation-Timer"
    },
  ] : []),
  ];

  const visibleProjects = showMore ? projects : projects.slice(0, 6);

  const handleDemoClick = (demoLinkValue) => {
    if (demoLinkValue === "__question__") {
      setShowQuestionMessage(true);
      setTimeout(() => {
        setShowQuestionMessage(false);
      }, 4000);
    }
  };

  

  return (
    <CompletedSection id="completed">
      <div style={{ width: '100%' }}>
      <ProjectsGrid>
        {visibleProjects.map((project) => (
          <ProjectCard key={project.id}>
            <div className="project-card">
              <div className="banner-container" style={{background: project.bgcolor }}>
                <img src={project.banner} alt={project.banner} className="banner"/>
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
                    project.demoLink === "__question__" ? (
                      <StyledButton onClick={() => handleDemoClick(project.demoLink)}>
                        Live Demo
                      </StyledButton>
                    ) : (
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        Live Demo
                      </a>
                    )
                  )}

                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <FaGithub className="icon" /> &nbsp; <div> Github </div>
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

      {showQuestionMessage && <QuestionMessage />}
    </CompletedSection>
  );
}

export default Completed;


const CompletedSection = styled.section`
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

const StyledButton = styled.button`
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
  border: none;
  background: linear-gradient(to right, #3b82f6, #2563eb);

  &:hover {
    transform: translateY(-0.125rem);
    background: linear-gradient(to right, #2563eb, #1d4ed8);
  }
`;




const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem auto 0 auto;
  padding: 0.75rem 1.5rem;
  background-color: #1f2937;
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
  gap: 0.5rem;
  font-size: 1rem;

  &:hover {
    background-color: #374151;
  }

  svg {
    transition: transform 0.3s ease;
    transform: ${props => (props.showMore ? 'rotate(180deg)' : 'rotate(0deg)')};
  }
`;