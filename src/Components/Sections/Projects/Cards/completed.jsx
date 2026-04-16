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
      description: "The current website you are on now.", /* A dynamic 3D interactive portfolio, showcasing my skills and expertise with immersive elements.\nThis site blends creativity and technical finesse, bringing my projects to life. */
      technologies: ["React + Vite", "Node.js", "Three.js"],
      demoLink: "__question__",
      githubLink: "https://github.com/IbrahimIF/IbrahimIF.github.io"
    },
    {
      id: 2,
      banner: './assets/Projects/Banner-BBC.png',
      bgcolor: "#c6f8a1",
      title: " Team Catalyst - Media Analysis Platform",
      description: "AI-powered platform for processing and summarising Royal Society of Chemistry Faraday Discussions using AWS services and Bedrock.",
      technologies: ["AWS Services", "AWS Bedrock", "Python"],
      githubLink: "https://github.com/djoguns/breakingbarrier-catalyst-lon23"
    },
    {
      id: 33,
      banner: './assets/Projects/Banner-EC.png',
      bgcolor: "#f0f0f0",
      title: "Encode AI Hackathon",
      description: "Autonomous ML Optimisation Platform (AutoResearch) built at the Encode Club AI Hackathon, Mar 2026.\nAn agent-driven system automating the machine learning development lifecycle end-to-end.",
      technologies: ["Python", "Machine Learning", "AutoML"],
    },
    {
      id: 3,
      banner: './assets/Projects/Banner-CDS.png',
      bgcolor: "#002439",
      title: "Client Medical Database",
      description: "Built an offline patient database application using TypeScript and SQLite for remote healthcare delivery. \nImplemented secure local persistence and a modular MVP architecture to ensure field-ready scalability.",
      technologies: ["T3", "TypeScript", "SQLite"],
      githubLink: "https://github.com/Covelopers/Client-Database-Application",
    },
    {
      id: 4,
      banner: './assets/Projects/Banner-ATS.png',
      bgcolor: "#1f2937",
      title: "Application Tracking System",
      description: "A desktop solution designed to replace spreadsheets for tracking and analysing job applications.\nIt helps visualise trends and manage recruitment metrics through a robust local database.",
      technologies: ["React + Vite", "Electron", "SQLite"],
      githubLink: "https://github.com/IbrahimIF/Application-Tracker"
    },
    {
      id: 5,
      banner: './assets/Projects/Banner-QY.png',
      bgcolor: "black",
      title: "Qiyaas",
      description: "Daily number game — a logic-driven take on Hangman. Contributed through bug fixing and code quality review, and was recognised as a contributor by the team.",
      technologies: ["Next.js", "TypeScript", "Tailwind"],
      demoLink: "https://www.qiyaasgame.com/"
    },
    {
      id: 6,
      banner: './assets/Projects/Banner-DD.png',
      bgcolor: "#123933",
      title: "Adhkar Daily",
      description: "Dhikr is a form of Islamic worship where phrases or prayers are repeatedly recited to remember God.",
      technologies: ["React + Vite", "JavaScript", "Electron"],
      githubLink: "https://github.com/IbrahimIF/Dhikr-Project",
      demoLink: "https://adkhardaily.netlify.app/"
    },
    {
      id: 34,
      banner: './assets/Projects/Banner-TC.png',
      bgcolor: "#0d2b1a",
      title: "Trump Card",
      description: "A visual card deck for tracking everything you have going for you — plans, opportunities, connections, credentials and resources.\nBuilt so you never forget what's in your hand.",
      technologies: ["React + Vite", "TypeScript", "PWA"],
      demoLink: "https://trump1card.netlify.app/",
      githubLink: "https://github.com/IbrahimIF/trump-card",
    },
    {
      id: 7,
      banner: 'Covelopers',
      title: "Covelopers",
      description: "The official website for Covelopers, a software startup based in London.\nShowcases the team, services and projects with a clean, responsive interface.",
      technologies: ["React + Vite", "TypeScript", "Supabase"],
      githubLink: "https://github.com/Covelopers/Main-Site",
      demoLink: "https://covelopers.com/",
    },
    {
      id: 8,
      banner: './assets/Projects/Banner-OA.png',
      title: "Offdays-Accrual",
      description: "A project developed as part of my work with Offdays, where I built Accrual. \nHelps users calculate their accrued annual leave and pro-rata entitlement quickly and easily.",
      technologies: ["React + Vite", "TypeScript", "Chakra-UI"],
      demoLink: "https://offdays.co.uk/",
    },
    {
      id: 9,
      banner: './assets/Projects/Banner-OT.png',
      title: "Offdays-Toolkit",
      description: "A project developed as part of my work with Offdays, where I built Toolkit. \nServes as a central hub to showcase and access various Offdays tools, improving discoverability and usability for users.",
      technologies: ["React + Vite", "TypeScript", "Chakra-UI"],
      demoLink: "https://offdays-toolkit.vercel.app/",
    },
    {
      id: 10,
      banner: './assets/Projects/Banner-OS.png',
      title: "Offdays-Shareables",
      description: "A project developed as part of my work with Offdays, where I built Shareables. \nHelps users easily create branded, social-media-friendly images to announce their out-of-office status.",
      technologies: ["React + Vite", "TypeScript", "Chakra-UI"],
      demoLink: "https://offdays.co.uk/",
    },
    {
      id: 11,
      banner: './assets/Projects/Banner-F.png',
      bgcolor: "black",
      title: "Frictionless",
      description: "A tool designed to reduce code friction, ensuring consistent structure and identifying syntax errors.\nIt analyses and improves code snippets across multiple programming languages.",
      technologies: ["React + Vite", "MongoDB", "Node.js"],
      demoLink: "https://frictionless-beta.vercel.app/",
      githubLink: "https://github.com/IbrahimIF/Frictionless"
    },
    { 
      id: 12,
      banner: './assets/Projects/Banner-TS.png',
      title: "ToolShed",
      description: "A Full-Stack application that organises my large folder of tools and resources.",
      technologies: ["React + Vite", "Firestore", "Javascript"],
      demoLink: "https://tool-shed.vercel.app/",
      githubLink: "https://github.com/IbrahimIF/ToolShed"
    },
    {
      id: 13,
      banner: './assets/Events/the_orange_trust.png',
      title: "The Orange Trust Site",
      bgcolor: "Orange",
      description: "An interactive website developed for The Orange Trust, an official NGO aiding disadvantaged communities.\nSignificantly increased brand awareness, social engagement, and client interaction for the charity.",
      technologies: ["Figma", "Trello"],
      demoLink: "https://www.orangetrust.co.uk/",
    },
    {
      id: 14,
      banner: './assets/Projects/Banner-PSA.png',
      title: "Pinnacle Studio Architecture",
      description: "A responsive website developed for a private client, showcasing their various architectural projects.\nLed the agile development, managing design and implementation to client specifications.",
      technologies: ["React + Vite", "JavaScript", "CSS"],
    },
    {
      id: 15,
      banner: './assets/Projects/Banner-Z.png',
      bgcolor: "#2e3631",
      title: "Ziphon-LTD",
      description: "A full-stack application providing feedback on energy consumption reduction for residents.\nThis project targets UN Sustainable Development Goals for quality education and clean energy.",
      technologies: ["React", "MySQL", "Node.js"],
      githubLink: "https://github.com/IbrahimIF/Ziphon-LTD"
    },
    { 
      id: 16,
      banner: './assets/Projects/Banner-SERN.png', 
      bgcolor: "#26c3a5",
      title: "Full-Stack Chat-App", 
      description: "A simple Full-stack chat app to send and receive messages.", 
      technologies: ["React + Vite", "Node.js", "Socket.io"],
      demoLink: "https://fs-chat-app.vercel.app/",
      githubLink: "https://github.com/IbrahimIF/FS-Chat-App"
    },
    {
      id: 17,
      banner: './assets/Projects/Banner-FRV.png',
      bgcolor: "#fff4f4",
      title: "F.R.V",
      description: "A serverless full-stack application handling real-time data flow between React and Firestore.\nIt allows users to send and view data instantly without a traditional backend setup.",
      technologies: ["React + Vite", "Firestore", "JavaScript"],
      demoLink: "https://fern-delta.vercel.app/",
      githubLink: "https://github.com/IbrahimIF/FRV"
    },
    {
      id: 18,
      banner: './assets/Projects/Banner-MERN.png',
      bgcolor: "black",
      title: "M.E.R.N",
      description: "A simple full-stack application built with the MERN stack, sending and receiving data.\nUtilising MongoDB, Express, React, and Node.js, this project demonstrates data handling.",
      technologies: ["React + Vite", "MongoDB", "Node.js"],
      demoLink: "https://mern-frontend-kappa-drab.vercel.app/",
      githubLink: "https://github.com/IbrahimIF/MERN"
    },
    {
      id: 19,
      banner: './assets/Projects/Banner-DMY.png',
      bgcolor: "#5864f2",
      title: "Discord Mute Yourself",
      description: "A Python project that automatically mutes Discord users based on detected keywords.\nPerfect for streamers and moderators, it helps maintain a controlled voice channel environment.",
      technologies: ["Python", "Discord", "Pyaudio"],
      githubLink: "https://github.com/IbrahimIF/Discord-Mute-Yourself"
    },
    { 
      id: 20,
      banner: './assets/Projects/Banner-TG.gif',
      bgcolor: "#000",  
      title: "Terminal Games", 
      description: "Repository showcasing python made games that can be played in the terminal of an IDE.", 
      technologies: ["Python", "tkinter", "Curses"],
      githubLink: "https://github.com/IbrahimIF/Terminal-Games"
    },
    {
      id: 21,
      banner: './assets/Projects/Banner-CC.png',
      bgcolor: "#f0f0f0",
      title: "CopyCat",
      description: "A Python project that listens to microphone input, processes speech, and responds via Text-to-Speech.\nIt records audio, converts it to text, and generates spoken replies using the ElevenLabs API.",
      technologies: ["Python", "ElevenLabs", "Pyaudio"],
      githubLink: "https://github.com/IbrahimIF/CopyCat"
    },
    {
      id: 22,
      banner: './assets/Projects/Banner-TCC.png',   
      title: "Twitch-Chat-Clone", 
      description: "A twitch chat clone with React, TypeScript, Tailwind CSS and Socket.io.", 
      technologies: ["TypeScript", "Tailwind CSS", "Socket.io"],
      demoLink: "https://twitch-chat-clone-chi.vercel.app/",
      githubLink: "https://github.com/IbrahimIF/Twitch-Chat-Clone"
    },
    { 
      id: 23,
      banner: './assets/Projects/Banner-P.png',
      bgcolor: "#ff474d", 
      title: "Pokedex", 
      description: "A replica of the pokedex from the pokemon anime.", 
      technologies: ["React + Vite", "Tailwind CSS", "PokeAPI"],
      demoLink: "https://pokedex-bice-zeta.vercel.app/",
      githubLink: "https://github.com/IbrahimIF/Pokedex"
    },
    { 
      id: 24,
      banner: './assets/Projects/Banner-WLS.png',
      bgcolor: "#000000", 
      title: "Watchlist Shelf", 
      description: "A desktop application for tracking watched films and series with a Netflix style interface.", 
      technologies: ["React + Vite", "Electron", "SQLite"],
      githubLink: "https://github.com/IbrahimIF/watchlist-shelf"
    },
    {
      id: 25,
      banner: 'Pneumonia-Detection',
      title: "pneumonia-detection",
      description: "An AI module university assignment focused on accurately detecting pneumonia from X-ray images.\nThis project trains and optimises a deep learning model to differentiate between images.",
      technologies: ["Python", "Jupyter Notebook"],
      githubLink: "https://github.com/IbrahimIF/pneumonia-detection"
    },
    {
      id: 26,
      banner: 'Airport System',
      title: "Airport System",
      description: "A first-year university group project developing an Airport System, including a seating-plan component.\nThis project enhanced Java expertise, testing, and collaborative workflow using Git.",
      technologies: ["Java", "JFrame", "Eclipse"],
      githubLink: "https://github.com/IbrahimIF/Seating-Plan"
    },
    {
      id: 27,
      banner: 'Car-Park-App',
      title: "Car-Park-App",
      description: "A multi-threaded Java client-server application demonstrating a car park management system.\nIt showcases robust network computing, including concurrent access control and socket communication.",
      technologies: ["Java", "Eclipse"],
      githubLink: "https://github.com/IbrahimIF/Car-Park-App"
    },
    ...(counter > 12 ? [
    {
      id: 28,
      banner: './assets/Projects/Banner-PC.png',
      bgcolor: "#142446",
      title: "Paradox-Chrono",
      description: "My first game project, a vibrant 3D platformer developed using Unity and C#.\nThis old assignment evolved into a personal project with custom-created assets.",
      technologies: ["C#", "Unity", "Blender"],
      githubLink: "https://github.com/IbrahimIF/Paradox-Chrono"
    },
    {
      id: 29,
      banner: 'Starship Canvas Animation',
      title: "Starship-Canvas-Animation",
      description: "An animated background featuring iconic Star Wars cruisers and Star Destroyers.\nThis project creates an engaging visual effect using JavaScript",
      technologies: ["JavaScript", "HTML", "CSS"],
      demoLink: "https://starship-canvas-animation.vercel.app/",
      githubLink: "https://github.com/IbrahimIF/Starship-Canvas-Animation"
    },
    {
      id: 30,
      banner: './assets/Projects/Banner-SB.png',
      title: "Switch-Board",
      bgcolor: "white",
      description: "A large interactive display of light switches, inspired by a classic 2006 interactive site.\nBuilt with React, JavaScript, and CSS, it offers an engaging user experience.",
      technologies: ["React + Vite", "JavaScript", "CSS"],
      demoLink: "https://switch-board.vercel.app/",
      githubLink: "https://github.com/IbrahimIF/Switch-Board"
    },
    {
      id: 31,
      banner: './assets/Projects/Banner-RB.png',
      title: "Red Button",
      description: "An interactive website game inspired by Bored Button, where users find and press ten red buttons.\nThe project features a complex loading screen, randomised YouTube videos, and hidden secrets.",
      technologies: ["React", "JavaScript", "CSS"],
      demoLink: "https://mystery-button.vercel.app/",
      githubLink: "https://github.com/IbrahimIF/Red-Button"
    },
    {
      id: 32,
      banner: './assets/Projects/Banner-GT.png',
      title: "University Graduation Timer",
      description: "A Countdown Timer to university graduation, now past its original limit.\nThis project, built with React and JavaScript",
      technologies: ["React + Vite", "JavaScript", "CSS"],
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
                    project.demoLink === "__question__" ? (
                      <StyledButton onClick={() => handleDemoClick(project.demoLink)}>
                        Live Demo
                      </StyledButton>
                    ) : (
                      <a className="LiveButton" href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        Live Demo
                      </a>
                    )
                  )}

                  {project.githubLink && (
                    <a className="GithubButton" href={project.githubLink} target="_blank" rel="noopener noreferrer">
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


const CompletedSection = styled.div`
  display: flex;
  justify-content: center;
  padding: 0;
  padding-top: 4rem;
  margin-bottom: 20px;
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