import styled from 'styled-components';
import { useState } from 'react';
import Work from './Timeline/work';
import Education from './Timeline/education';
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

function Experience({ counter, setCounter }) {
  const [showMoreWork, setShowMoreWork] = useState(false);
  const [showMoreEducation, setShowMoreEducation] = useState(false);

  const toggleShowMoreWork = () => setShowMoreWork(!showMoreWork);
  const toggleShowMoreEducation = () => setShowMoreEducation(!showMoreEducation);

  return (
     <ExperienceSection id="Experience">
      <div className="box">
      <Title>Work Experience</Title>
        <Work counter={counter} setCounter={setCounter} showMore={showMoreWork} toggleShowMore={toggleShowMoreWork} />
      </div>
      <div className="box">
      <Title>Education</Title>
        <Education showMore={showMoreEducation} toggleShowMore={toggleShowMoreEducation} />
      </div>
    </ExperienceSection>
  )
}
export default Experience

const Title = styled.h1`
  font-size: 2rem;
  color: #fff;
  padding: 10px;
  margin-bottom: 1rem;
  text-align: center;
  width: 100%;

  @media (max-width: 1170px) {
    text-align: left;
  }
`;

const ExperienceSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
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


.box {
  width: 100%;
  overflow: hidden;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border-radius: 15px;
  transition: 1s;
  padding: 20px;
  margin: 10px;
  margin-bottom: 10px;
  z-index: 0;
  
  background-color: rgba(3, 1, 14, 0.2);
  box-shadow: 
  rgba(0, 24, 72, 0.2) 0px 54px 55px,  
  rgba(40, 60, 110, 0.1) 0px -12px 30px,  
  rgba(40, 60, 120, 0.1) 0px 4px 6px,  
  rgba(24, 33, 53, 0.15) 0px 12px 13px,  
  rgba(255, 255, 255, 0.08) 0px -3px 5px;
}
`;
