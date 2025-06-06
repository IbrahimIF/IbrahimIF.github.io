import styled from 'styled-components';
import TechBall from './3D Components/TechScene'
import PostCarousel from './Linkedin Carousel/carousel.jsx'

function Overview() {

  return (
    <OverviewSection id="Overview">
      <div className="grid">
        <div className="row">
          <div className="grid-container">
            <div className="Circle">
              <img src="/assets/Profile portfolio.png" alt="grid-1" className="grid-image"/>
            </div>
            <div>
              <p className="grid-headtext">Hi, I'm Ibrahim</p>
              <p className="grid-subtext">
              I’ve recently graduated with a 2:1 BSc in Computer Science, specialising in Software Engineering.
              <br/>
              <br/>
              Throughout my self-studying and academic journey, I've gained experience in python, Java and React.js.
              With practical expertise and a solid foundation in databases such as MySQL and MongoDB. 
              <br/>
              <br/>
              I have completed a few personal and client projects, all of which demonstrate my ability to develop and optimise software.
              I am passionate about innovation, learning and technology's potential to solve complex problems. My drive for continuous learning, makes me eager to contribute to impactful solutions.
              <br/>
              <br/>
              I am currently looking for a graduate, junior, or entry-level position in software engineering, Full-stack, software development, frontend or consultant to further apply my skills in a professional environment and contribute to meaningful projects.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="grid-container">
          <p className="grid-headtext">Tech Stack</p>
                <TechBall/>
            <div>
            </div>
          </div>
        </div>

        <div className="row row-span-5">
          <div className="grid-container">
           <PostCarousel/>
          </div>
        </div>

        <div className="row xl-col-span-2">
          <div className="grid-container">

          <img
              src="https://raw.githubusercontent.com/ibrahimif/github-snake/output/github-snake-dark.svg"
              alt="GitHub Contribution Snake"
              style={{ width: "100%", maxWidth: "800px" }}
            />
          </div>
        </div>

        <div className="row row-span-1">
          <div className="grid-container">

            <div>
              <p className="grid-headtext">VERY NICE</p>
              <p className="grid-subtext">
                I like coding.
              </p>
            </div>
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
  padding: var(--section-padding);
  margin-bottom: var(--section-gap);
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

  .row {
    grid-column: span 1;
  }

  .row-span-5 {
    height: 100%;
  }

  .grid-container {
    display: flex;
    flex-direction: column;
    align-items: center;
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

  .grid-image {
    width: 100%;
    height: 276px;
    object-fit: contain;
  }

  .grid-headtext {
    font-size: 1.5rem;
    font-weight: 600;
    color: white;
    margin-bottom: 0.5rem;
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

  @media (min-width: 768px) {
    .grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (min-width: 1280px) {
    .grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .xl-col-span-2 {
      grid-column: span 2;
    }
  }

  @media (max-width: 640px) {
    .grid-image {
      height: fit-content;
    }
  }
`;