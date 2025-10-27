import styled from 'styled-components';
import TechBall from './3D Components/TechScene'
import PostCarousel from './Carousels/linkedin-carousel'
import EventCarousel from './Carousels/events-carousel'

function Overview() {

  return (
    <OverviewSection id="Overview">
      <div className="grid">
        <div className="top-row">
          <div className="grid-container">
            <div>
              <h2 className="grid-headtext">Professional Overview</h2>
              <p className="grid-subtext">
              Recent Computer Science graduate with a BSc in Software Engineering, skilled in Python, Java and TypeScript. I focus on building functional, reliable software that solves real-world problems.
              <br/>
              <br/>
              My experience covers a range of technical and collaborative roles. As a Software Engineering Intern at Offdays, I took ownership of a key application, managing everything from planning and development through to deployment. I have also worked closely with clients in a non-profit setting, refining requirements and delivering features using Agile and Scrum practices.
              <br/>
              <br/>
              I am confident using Git and GitHub for version control and collaborative workflows. I have also taught coding to beginners, which helped me develop the ability to explain complex ideas in simple and practical ways.
              <br/>
              <br/>
              Currently expanding my knowledge of cloud computing, Linux and networking through the AWS re/Start programme, with a focus on core AWS services.
              <br/>
              <br/>
              Looking for a graduate or entry level technical role where I can contribute to meaningful projects, continue learning and work within a collaborative team environment.
              </p>
            </div>
          </div>
        </div>

        <div className="top-row">
          <div className="grid-container" style={{height:'800px', width:'100%'}}>
                <TechBall/>
            <div>
            </div>
          </div>
        </div>

        <div className="top-row">
          <div className="grid-container">
            <PostCarousel/>
          </div>
        </div>

        <div className="mid-col-xl">
          <div className="grid-container">
          <img
              src="https://raw.githubusercontent.com/ibrahimif/github-snake/output/github-snake-dark.svg"
              alt="GitHub Contribution Snake"
              style={{ width: "100%", maxWidth: "800px" }}
            />
          </div>
        </div>

        <div className="mid-row">
          <div className="grid-container">
            <div>
              <h2 className="grid-headtext">Currently Learning</h2>
              <div className="image-container">
                <img src="/assets/Courses/aws_cloud_practitioner.png" alt="grid-1" className="course-image"/>
                <img src="/assets/Courses/platform_administrator.png" alt="grid-1" className="course-image"/>
                <img src="/assets/Courses/azure.png" alt="grid-1" className="course-image"/>
                <img src="/assets/Courses/istqb.png" alt="grid-1" className="course-image"/>
              </div>
            </div>
          </div>
        </div>

        
        <div className="bottom-col-xl">
          <div className="grid-container">
            <h2 className="grid-headtext">Attended Events</h2>
            <EventCarousel/>
          </div>
        </div>

      </div>
    </OverviewSection>
  );
}

export default Overview;

const OverviewSection = styled.section`
  display: flex;
  position: relative;
  margin-top: calc(-1 * var(--section-gap));
  background-image: radial-gradient(
    circle at center,
    rgb(0, 0, 2) 0%,
    rgb(0, 0, 0) 40%,
    rgba(0, 0, 0, 0.7) 60%,
    rgba(0, 0, 0, 0.5) 80%,
    rgba(0, 0, 0, 0.74) 95%,
    rgb(0, 0, 0) 100%
  );

  .grid {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 1.25rem;
    width: 100%;
  }

  .grid-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    height: 100%;
    padding: 1.5rem;
    background-color: rgba(3, 1, 14, 0.2);
    box-shadow: 
      rgba(0, 24, 72, 0.2) 0px 54px 55px,  
      rgba(40, 60, 110, 0.1) 0px -12px 30px,  
      rgba(40, 60, 120, 0.1) 0px 4px 6px,  
      rgba(24, 33, 53, 0.15) 0px 12px 13px,  
      rgba(255, 255, 255, 0.08) 0px -3px 5px;
    border-radius: 1.5rem;
    overflow: hidden;
  }

  .top-row{
    height: auto;
  }

  @media (min-width: 540px) {
    .grid {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
  }

  @media (min-width: 768px) {
    .grid {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
  }

  @media (min-width: 1200px) {
    .grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .mid-col-xl {
      grid-column: span 2;
    }
    .bottom-col-xl{
      grid-column: span 3;
    }
  }


  @media (max-width: 640px) {
    .grid-image {
      height: fit-content;
    }
  }
  

  .grid-headtext {
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    font-size: 2rem;
    font-weight: 600;
    color: #f1f1f1;
    margin-bottom: 1.5rem;
    text-align: center;
    letter-spacing: 0.5px;
    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
    border-bottom: 2px solid rgba(255,255,255,0.1);
    padding-bottom: 0.5rem;
  }

  @media (max-width: 1428px) and (min-width: 1279px) {
  .grid-headtext {
    font-size: 2rem;
    font-weight: 500;
  }
}

  .grid-subtext {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.5;
  }
  
  @media (max-width: 1428px) and (min-width: 1200px) {
  .grid-subtext {
    font-size: 0.9rem;
  }
}
  
  .Circle {
    display: flex;
    align-items: center;
    height: 260px;
    width: 260px;
    border: 4px solid rgb(134, 134, 134);
    border-radius: 50%;
  }


  .image-container{
    display: grid;
    grid-template-columns: repeat(4, 1fr); 
    gap: 1rem;
    width: 100%;
    justify-items: center;
    align-items: center;
  }

  @media (max-width: 450px) {
  .image-container {
    grid-template-columns: repeat(2, 1fr); /* Force 2 columns */
  }
}

  .course-image{
    max-width: 100%;
    height: auto;
    display: block;
    object-fit: contain;
    padding: 5px;
  }

  .course-image.trailhead {
    max-width: 120%;
    transform: scale(1.3);
  }
`;
