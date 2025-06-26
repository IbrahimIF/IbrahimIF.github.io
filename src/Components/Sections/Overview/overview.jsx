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
            <div className="Circle">
              <img src="/assets/Profile portfolio.png" alt="grid-1" className="grid-pfp"/>
            </div>
            <div>
              <p className="grid-headtext">Hi, I'm Ibrahim</p>
              <p className="grid-subtext">
              I’ve recently graduated with a 2:1 BSc in Computer Science, specialising in Software Engineering.
              <br/>
              <br/>
              Throughout my self-studying and academic journey, I've gained experience in **Python**, Java, and React.js,
              with practical expertise and a solid foundation in databases such as MySQL and MongoDB.
              <br/>
              <br/>
              I have completed a few personal and client projects, all of which demonstrate my ability to develop and optimise software.
              I am passionate about innovation, learning, and technology's potential to solve complex problems. My drive for continuous learning makes me eager to contribute to impactful solutions.
              <br/>
              <br/>
              I am currently looking for a graduate, junior, or entry-level position in software engineering, **full-stack**, software development, **front-end**, or **consulting** to further apply my skills in a professional environment and contribute to meaningful projects.
              </p>
            </div>
          </div>
        </div>

        <div className="top-row">
          <div className="grid-container" style={{height:'1160px'}}>
          <p className="grid-headtext">Tech Stack</p>
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
              <p className="grid-headtext">Current Courses</p>
              <div className="image-container">
                <img src="/assets/Courses/azure.png" alt="grid-1" className="course-image"/>
                <img src="/assets/Courses/trailhead.png" alt="grid-1" className="course-image trailhead"/>
                <img src="/assets/Courses/istqb.png" alt="grid-1" className="course-image"/>
                <img src="/assets/Courses/aws_Cloud-Practitioner.png" alt="grid-1" className="course-image"/>
              </div>
            </div>
          </div>
        </div>

        
        <div className="bottom-col-xl">
          <div className="grid-container">
            <p className="grid-headtext">Attended Events</p>
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

  @media (min-width: 1280px) {
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
  

  .grid-pfp {
    width: 100%;
    height: 276px;
    object-fit: contain;
  }

  .grid-headtext {
    display:flex;
    justify-content:center;
    align-items:center;
    font-size: 1.5rem;
    font-weight: 500;
    color: white;
    margin-bottom: 1rem;
    text-align:center;
  }

  @media (max-width: 1428px) and (min-width: 1279px) {
  .grid-headtext {
    font-size: 1.2rem;
    font-weight: 500;
  }
}

  .grid-subtext {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.5;
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