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
                BSc Computer Science graduate specialising in Software Engineering, with a focus on Python, Java and TypeScript. I turn complex requirements into working solutions.
                <br/>
                <br/>
                During my Software Engineering internship at Offdays, I delivered three projects and managed the full lifecycle of applications, from planning to deployment. I also worked directly with clients to translate requirements into features using Agile.
                <br/>
                <br/>
                I am comfortable using Git and GitHub for version control and collaboration. Teaching coding to beginners strengthened my ability to explain technical concepts clearly.
                <br/>
                <br/>
                I have recently developed hands-on experience with Linux, networking and core AWS services through the AWS re/Start programme.
                <br/>
                I am seeking a graduate or junior role where I can contribute to a technical team, continue developing my software and cloud skills, and work on real-world problems.
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
            <a
              href="https://www.credly.com/users/ibrahimif"
              target="_blank"
              rel="noopener noreferrer"
              className="credly-container"
            >
              <div>
                <h2 className="grid-headtext">Currently Learning</h2>
                <div className="image-container">
                  <img src="/assets/Courses/aws_cloud_practitioner.png" alt="grid-1" className="course-image"/>
                  <img src="/assets/Courses/platform_administrator.png" alt="grid-1" className="course-image"/>
                  <img src="/assets/Courses/azure.png" alt="grid-1" className="course-image"/>
                  <img src="/assets/Courses/istqb.png" alt="grid-1" className="course-image"/>
                </div>
              </div>
            </a>
          </div>
        </div>

        
        <div className="bottom-col-xl">
          <div className="grid-container">
            <h2 className="grid-headtext">Events & Hackathons</h2>
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

  .credly-container {
  display: block;
  text-decoration: none;
  color: inherit;
  padding: 1.25rem;
  border-radius: 16px;
  border: 2px solid transparent;
  transition: all 0.25s ease;
  cursor: pointer;
  }

  .credly-container:hover {
    border-color: #001848ff;
    background-color: rgba(2, 0, 46, 0.05);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);
    transform: translateY(-3px);
  }

  .credly-container:focus-visible {
    outline: 3px solid #001848ff;
    outline-offset: 4px;
  }

`;
