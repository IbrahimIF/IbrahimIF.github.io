import styled from 'styled-components';
import { useState } from 'react';
import Globe from 'react-globe.gl';

function Overview() {
  const [hasCopied, setHasCopied] = useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText('test@gmail.com');
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <OverviewSection id="Overview">
      <div className="grid">
        <div className="row">
          <div className="grid-container">
            <div className="Circle">
              <img src="/src/assets/Profile placeholder.png" alt="grid-1" className="grid-image"/>
            </div>
            <div>
              <p className="grid-headtext">Hi, I'm Ibrahim</p>
              <p className="grid-subtext">
                With 0 years of experience I have honed my skills in frontend and backend development.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="grid-image" />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                Javascript/Typescript with a focus on React and Next.js ecosystems.
              </p>
            </div>
          </div>
        </div>

        <div className="row row-span-5">
          <div className="grid-container">
            <div className="globe-container">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.jpg"
                labelsData={[{
                  lat: 40, lng: -100,
                  text: "I'm here!",
                  color: 'white',
                  size: 20,
                }]}
              />
            </div>
            <div>
              <p className="grid-headtext">I don't work remotely across most timezones.</p>
              <p className="grid-subtext">I am based in croatia</p>
              <button name="Contact me" className="contact-button">Contact me</button>
            </div>
          </div>
        </div>

        <div className="row xl-col-span-2">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="grid-image" />
            <div>
              <p className="grid-headtext">My Passion for coding is as passionate as a passion fruit</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. 
                Coding isn't just my profession - it is my passion.
              </p>
            </div>
          </div>
        </div>

        <div className="row row-span-1">
          <div className="grid-container">
            <img src="assets/grid4.png" alt="grid-4" className="grid-image-small" />
            <div className="contact-container">
              <p className="grid-subtext text-center">Contact Me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="email-text">test@gmail.com</p>
              </div>
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
  margin-top: 5rem;
  margin-bottom: 5rem;
  position: relative;
  padding-left: 100px;


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
    gap: 1rem;
    height: 100%;
    padding: 1.5rem;
    background: rgba(255, 255, 255, 0.1);
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
    height: 250px;
    width: 250px;
    background-color: #000;
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