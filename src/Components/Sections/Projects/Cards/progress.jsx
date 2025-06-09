import styled from 'styled-components';

function InProgress() {
    const projects = [
        { id: 1, title: "Project 1", description: "In-Progress Projects - Description 1" },
        { id: 2, title: "Project 2", description: "In-Progress Projects - Description 2" },
        { id: 3, title: "Project 3", description: "In-Progress Projects - Description 3" },
        { id: 4, title: "Project 4", description: "In-Progress Projects - Description 4" },
        { id: 5, title: "Project 5", description: "In-Progress Projects - Description 5" },
        { id: 6, title: "Project 6", description: "In-Progress Projects - Description 6" },
        { id: 7, title: "Project 7", description: "In-Progress Projects - Description 7" },
        { id: 8, title: "Project 8", description: "In-Progress Projects - Description 8" },
        { id: 9, title: "Project 9", description: "In-Progress Projects - Description 9" },
        { id: 10, title: "Project 10", description: "In-Progress Projects - Description 10" },
        { id: 11, title: "Project 11", description: "In-Progress Projects - Description 11" },
        { id: 12, title: "Project 12", description: "In-Progress Projects - Description 12" },
      ];

return (
    <ProgressSection id="Progress">
      <ProjectsGrid>
         {projects.map((project) => (
           <ProjectCard key={project.id}>
             <div className="card2">
               <h3>{project.title}</h3>
               <p>{project.description}</p>
             </div>
           </ProjectCard>
         ))}
       </ProjectsGrid>
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
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: minmax(200px, auto);
  gap: 3rem;
  width: 100%;
  padding: 0 1rem;

@media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 600px) {
    grid-template-columns: 1fr;
}
`;

const ProjectCard = styled.div`
  width: 190px;
  height: 254px;
  background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
  border-radius: 20px;
  transition: all .3s;

  &:hover {
    box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.30);
  }

.card2{
  width: 100%;
  height: 100%;
  background-color: #1a1a1a;
  border-radius: 18px;
  transition: all .2s;
  padding: 1.5rem;
  transition: all 0.2s;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.card2:hover {
  transform: scale(0.98);
  border-radius: 20px;
}


h3 {
    margin-bottom: 1rem;
    color:rgb(195, 195, 195);
}

p {
    color: #ccc;
}

`;
