import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import TechBall from './3D Components/TechScene'

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
                Graduate in Computer Science specialised software engineering, with a passion for coding and developing stuff.
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
          <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7307746793004421121" height="100%" width="100%" title="Embedded post"></iframe>
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

  @media (min-width: 768px) {
    .grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (min-width: 1280px) {
    .grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  .row {
    grid-column: span 1;
  }

  .row-span-2 {
    grid-row: span 2;
  }

  .row-span-4 {
    grid-row: span 4;
  }

  .xl-col-span-2 {
    @media (min-width: 1280px) {
      grid-column: span 2;
    }
  }

  .grid-container {
    display: flex;
    flex-direction: column;
    align-items:center;
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
  }

  .grid-image {
    width: 100%;
    height: 276px;
    object-fit: contain;

    @media (max-width: 640px) {
      height: fit-content;
    }
  }

  .grid-image-small {
    width: 100%;
    height: 126px;
    object-fit: cover;
    object-position: top;

    @media (max-width: 640px) {
      height: fit-content;
    }
  }

  .globe-container {
    border-radius: 1.5rem;
    width: 100%;
    height: 326px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 640px) {
      height: fit-content;
    }
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

  .contact-button {
    width: 100%;
    margin-top: 2.5rem;
    padding: 0.75rem 1.5rem;
    background: linear-gradient(90deg, #13ADC7 0%, #945DD6 100%);
    color: white;
    border: none;
    border-radius: 0.5rem;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
  }

  .contact-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
  }

  .copy-container {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 0.5rem;
    transition: background 0.3s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }
  }


  .Circle{
    display:flex;
    align-items:center;
    height: 260px;
    width: 260px;
    border: 4px solid rgb(134, 134, 134);
    border-radius: 50%;

  }

  .email-text {
    font-size: 1.5rem;
    font-weight: 500;
    background: linear-gradient(90deg, #13ADC7 0%, #945DD6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;

    @media (max-width: 1024px) {
      font-size: 1.25rem;
    }

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;