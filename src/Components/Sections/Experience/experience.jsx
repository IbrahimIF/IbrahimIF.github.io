import styled from 'styled-components';
import { useState } from 'react';
import Work from './Timeline/work';
import Education from './Timeline/education';

function Experience() {
  const [activeTab, setActiveTab] = useState('work');

  return (
    <ExperienceSection id="Experience">
      <div className="box">
        <ToggleSection>
          <div className="radio-inputs">
            <label className="radio">
              <input type="radio" name="radio" checked={activeTab === 'work'} onChange={() => setActiveTab('work')}/>
              <span className="name">Work Experiance</span>
            </label> 
            <label className="radio">
              <input type="radio" name="radio" checked={activeTab === 'education'} onChange={() => setActiveTab('education')}/>
              <span className="name">Education</span>
            </label>  
          </div>
        </ToggleSection>
        {activeTab == 'work' && <Education/>}
        {activeTab == 'education' && <Work/>}
      </div>
    </ExperienceSection>
  )
}
export default Experience


const ExperienceSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  align-items: center;
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


.box {
  width: 100%;
  overflow: hidden;
  min-height: 72vh;
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

const ToggleSection = styled.div`
  display: 'flex';
  position: relative;
  width: 100%;


.radio-inputs {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  border-radius: 0.5rem;
  box-sizing: border-box;
  box-shadow: 0 0 0px 1px rgba(0, 0, 0, 0.06);
  padding: 0.25rem;
  width: 300px;
  font-size: 14px;
  color: #fff;
  background-color:rgba(172, 167, 217, 0.8);
}

.radio-inputs .radio {
  flex: 1 1 auto;
  text-align: center;
}

.radio-inputs .radio input {
  display: none;
}

.radio-inputs .radio .name {
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  border: none;
  padding: .5rem 0;
  color: rgb(0, 0, 0);
  transition: all .15s ease-in-out;
}

.radio-inputs .radio input:checked + .name {
  color: #fff;
  font-weight: 600;
  background-color: #010017;
}
`;