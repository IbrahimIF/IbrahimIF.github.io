import styled from 'styled-components';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import React, { useState } from 'react';

function Work({ counter }) {
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <WorkTimeline id="Work">
      <VerticalTimeline>

      <VerticalTimelineElement
        contentStyle={{ background: "#010017", color: "#fff" }}
        contentArrowStyle={{ borderRight: '10px solid rgb(255, 255, 255)' }}
        date="Jul 2025 - Present"
        iconStyle={{ background: 'rgb(0, 36, 57)', color: '#fff' }}
        icon={ <div className="img-container"><img src="/assets/Company/covelopers.png" alt="covelopers Logo" className="img"/></div>}
      >
        <h3 className="vertical-timeline-element-title">covelopers</h3>
        <h4 className="vertical-timeline-element-subtitle">London | Startup</h4>
        <p>
          <strong>Position</strong> | Software Engineer <br />
          <strong>Skills</strong> | Leadership, AWS, AI
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        contentStyle={{ background: "#010017", color: "#fff" }}
        contentArrowStyle={{ borderRight: '10px solid rgb(255, 255, 255)' }}
        date="Jun 2025 - Present"
        iconStyle={{ background: 'rgb(30, 49, 97)', color: '#fff' }}
        icon={ <div className="img-container"><img src="/assets/Company/salesforce.png" alt="Salesforce Logo" className="img"/></div>}
      >
        <h3 className="vertical-timeline-element-title">Salesforce</h3>
        <h4 className="vertical-timeline-element-subtitle">London | Trainee</h4>
        <p>
          <strong>Position</strong> | Salesforce Trainee <br />
          <strong>Skills</strong> | Salesforce, CRM, Cloud Computing
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        contentStyle={{ background: "#010017", color: "#fff" }}
        contentArrowStyle={{ borderRight: '10px solid rgb(255, 255, 255)' }}
        date="Sep 2025 - Dec 2025"
        iconStyle={{ background: '#161d27', color: '#fff' }}
        icon={ <div className="img-container"><img src="/assets/Company/aws.jpg" alt="AWS Logo" className="img"/></div>}
      >
        <h3 className="vertical-timeline-element-title">Amazon Web Services (AWS)</h3>
        <h4 className="vertical-timeline-element-subtitle">London, England | Trainee</h4>
        <p>
          <strong>Position</strong> | AWS re/Start Program Trainee <br />
          <strong>Skills</strong> | AWS, Linux, Python
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        contentStyle={{ background: "#010017", color: "#fff" }}
        contentArrowStyle={{ borderRight: '10px solid rgb(255, 255, 255)' }}
        date="Jun 2025 - Dec 2025"
        iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
        icon={ <div className="img-container"><img src="/assets/Company/offdays.jpg" alt="OffDays Logo" className="img"/></div>}
      >
        <h3 className="vertical-timeline-element-title">OffDays</h3>
        <h4 className="vertical-timeline-element-subtitle">London | Internship</h4>
        <p>
          <strong>Position</strong> | Software Engineer Intern <br />
          <strong>Skills</strong> | TypeScript, Git, Software Engineering
        </p>
      </VerticalTimelineElement>
  
      <VerticalTimelineElement
        contentStyle={{ background: "#010017", color: "#fff" }}
        contentArrowStyle={{ borderRight: '10px solid rgb(255, 255, 255)' }}
        date="Feb 2025 - Jul 2025"
        iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
        icon={ <div className="img-container"><img src="/assets/Company/innovation_pod.jpg" alt="Innovation Pod Logo" className="img"/></div>}
      >
        <h3 className="vertical-timeline-element-title">Innovation Pod</h3>
        <h4 className="vertical-timeline-element-subtitle">London | Part-time</h4>
        <p>
          <strong>Position</strong> | Coding Teacher <br />
          <strong>Skills</strong> | Teaching, Python, Coding
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        contentStyle={{ background: "#010017", color: "#fff" }}
        contentArrowStyle={{ borderRight: '10px solid rgb(255, 255, 255)' }}
        date="Jan 2025 - Feb 2025"
        iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
        icon={ <div className="img-container"><img src="/assets/Company/innovation_pod.jpg" alt="Innovation Pod Logo" className="img"/></div>}
      >
        <h3 className="vertical-timeline-element-title">Innovation Pod</h3>
        <h4 className="vertical-timeline-element-subtitle">London | Part-time</h4>
        <p>
          <strong>Position</strong> | Coding Teaching Assistant <br />
          <strong>Skills</strong> | Teaching, Python, Coding
        </p>
      </VerticalTimelineElement>
  
      <VerticalTimelineElement
        contentStyle={{ background: "#010017", color: "#fff" }}
        contentArrowStyle={{ borderRight: '10px solid rgb(255, 255, 255)' }}
        date="Jun 2023 - Mar 2025"
        iconStyle={{ background: '#faaf49', color: '#fff' }}
        icon={ <div className="img-container"><img src="/assets/Company/orange_trust.jpg" alt="The Orange Trust Logo" className="img"/></div>}
      >
        <h3 className="vertical-timeline-element-title">The Orange Trust</h3>
        <h4 className="vertical-timeline-element-subtitle">London | Volunteering</h4>
        <p>
          <strong>Position</strong> | Software Developer <br />
          <strong>Skills</strong> | Client Communication, Collaboration, Problem Solving
        </p>
      </VerticalTimelineElement>

      {showMore && (
        <>
        <VerticalTimelineElement
          contentStyle={{ background: "#010017", color: "#fff" }}
          contentArrowStyle={{ borderRight: '10px solid rgb(255, 255, 255)' }}
          date="Oct 2022 - Jun 2023"
          iconStyle={{ background: '#faaf49', color: '#fff' }}
          icon={ <div className="img-container"><img src="/assets/Company/orange_trust.jpg" alt="The Orange Trust Logo" className="img"/></div>}
        >
          <h3 className="vertical-timeline-element-title">The Orange Trust</h3>
          <h4 className="vertical-timeline-element-subtitle">London | Volunteering</h4>
          <p>
            <strong>Position</strong> | Web Developer <br />
            <strong>Skills</strong> | Client Communication, Collaboration, Problem Solving
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: "#010017", color: "#fff" }}
          contentArrowStyle={{ borderRight: '10px solid rgb(255, 255, 255)' }}
          date="Nov 2024 - Feb 2025"
          iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
          icon={ <div className="img-container"><img src="/assets/Company/el_waterworks.jpg" alt="East London Waterworks Park Logo" className="img"/></div>}
        >
          <h3 className="vertical-timeline-element-title">East London Waterworks Park</h3>
          <h4 className="vertical-timeline-element-subtitle">Online | Volunteering</h4>
          <p>
            <strong>Position</strong> | Volunteer Web Developer <br />
            <strong>Skills</strong> | Web Applications, PHP, SQL
          </p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          contentStyle={{ background: "#010017", color: "#fff" }}
          contentArrowStyle={{ borderRight: '10px solid rgb(255, 255, 255)' }}
          date="Jun 2024"
          iconStyle={{ background: '#3d3c3a', color: '#fff' }}
          icon={ <div className="img-container"><img src="/assets/Company/bright_network.jpg" alt="Bright Network Logo" className="img"/></div>}
        >
          <h3 className="vertical-timeline-element-title">Bright Network</h3>
          <h4 className="vertical-timeline-element-subtitle">Online | Internship</h4>
          <p>
            <strong>Position</strong> | IEUK 2024 Technology Intern <br />
            <strong>Skills</strong> | Technology, Career Development, Networking
          </p>
        </VerticalTimelineElement>
      
        <VerticalTimelineElement
          contentStyle={{ background: "#010017", color: "#fff" }}
          contentArrowStyle={{ borderRight: '10px solid rgb(255, 255, 255)' }}
          date="Nov 2023 - May 2024"
          iconStyle={{ background: '#344f73', color: '#fff' }}
          icon={ <div className="img-container"><img src="/assets/Company/union_brunel.jpg" alt="Union Of Brunel Students Logo" className="img"/></div>}
        >
          <h3 className="vertical-timeline-element-title">Union Of Brunel Students</h3>
          <h4 className="vertical-timeline-element-subtitle">London | Society</h4>
          <p>
            <strong>Position</strong> | Technical Secretary <br />
            <strong>Skills</strong> | Society Management, Documentation, Coordination
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: "#010017", color: "#fff" }}
          contentArrowStyle={{ borderRight: '10px solid rgb(255, 255, 255)' }}
          date="Jun 2023 - Apr 2024"
          iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
          icon={ <div className="img-container"><img src="/assets/Company/eep.jpg" alt="EEP Logo" className="img"/></div>}
        >
          <h3 className="vertical-timeline-element-title">EEP</h3>
          <h4 className="vertical-timeline-element-subtitle">London | Part-Time</h4>
          <p>
            <strong>Position</strong> | Customer Service & Security Guard <br />
            <strong>Skills</strong> | Customer Service, Communication, Security
          </p>
        </VerticalTimelineElement>
      
        <VerticalTimelineElement
          contentStyle={{ background: "#010017", color: "#fff" }}
          contentArrowStyle={{ borderRight: '10px solid rgb(255, 255, 255)' }}
          date="Nov 2020 - Feb 2021"
          iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
          icon={ <div className="img-container"><img src="/assets/Company/ncc.jpg" alt="New City College Logo" className="img"/></div>}
        >
          <h3 className="vertical-timeline-element-title">New City College</h3>
          <h4 className="vertical-timeline-element-subtitle">London | Volunteering</h4>
          <p>
            <strong>Position</strong> | IT Help Desk <br />
            <strong>Skills</strong> | IT Support, Customer Service, Troubleshooting
          </p>
        </VerticalTimelineElement>
        </>
      )}

      </VerticalTimeline>
      <ToggleButton onClick={toggleShowMore} showMore={showMore}>
          {showMore ? <FaChevronUp /> : <FaChevronDown />}
          <span>{showMore ? "Show Less" : "Show More"}</span>
      </ToggleButton>
    </WorkTimeline>
  )
}
export default Work

const WorkTimeline = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

.img-container{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.img{
  width: 70%;
  object-fit: contain;
}
`;

const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem auto 0 auto;
  padding: 0.75rem 1.5rem;
  background-color: transparent;
  color: rgb(212, 212, 212);
  background-color: rgb(19, 19, 52);
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
  gap: 0.5rem;
  font-size: 1rem;

  &:hover {
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, rgb(62, 62, 62) 0 -3px 0 inset;
    transform: translateY(-1px);
  }

  svg {
    transition: transform 0.3s ease;
    transform: ${props => (props.showMore ? 'rotate(180deg)' : 'rotate(0deg)')};
  }
`;