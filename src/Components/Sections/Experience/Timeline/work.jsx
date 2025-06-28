import styled from 'styled-components';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Work({ counter }) {
  return (
    <WorkTimeline id="Work">
        <VerticalTimeline>
        {counter > 16 &&
      <VerticalTimelineElement
        contentStyle={{ background: "#010017", color: "#fff" }}
        contentArrowStyle={{ borderRight: '10px solid rgb(255, 255, 255)' }}
        date="Coming Soon"
        iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
        icon={ <div className="img-container"><img src="/assets/Company/Google.png" alt="Google Logo" className="img"/></div>}
      >
        <h3 className="vertical-timeline-element-title">Google</h3>
        <h4 className="vertical-timeline-element-subtitle">London | Shadowing</h4>
        <p>
          <strong>Position</strong> | Software engineer Shadowing <br />
          <strong>Skills</strong> | Software Engineering, Observation
        </p>
      </VerticalTimelineElement>
    }
    {counter > 16 &&
      <VerticalTimelineElement
        contentStyle={{ background: "#010017", color: "#fff" }}
        contentArrowStyle={{ borderRight: '10px solid rgb(255, 255, 255)' }}
        date="Coming Soon"
        iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
        icon={ <div className="img-container"><img src="/assets/Company/vodafone.jpg" alt="Vodafone Logo" className="img"/></div>}
      >
        <h3 className="vertical-timeline-element-title">Vodafone</h3>
        <h4 className="vertical-timeline-element-subtitle">London | Shadowing</h4>
        <p>
          <strong>Position</strong> | Software engineer Shadowing <br />
          <strong>Skills</strong> | Software Engineering, Industry Insights
        </p>
      </VerticalTimelineElement>
    }

    <VerticalTimelineElement
      contentStyle={{ background: "#010017", color: "#fff" }}
      contentArrowStyle={{ borderRight: '10px solid rgb(255, 255, 255)' }}
      date="May 2025 - Present"
      iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
      icon={ <div className="img-container"><img src="/assets/Company/offdays.jpg" alt="OffDays Logo" className="img"/></div>}
    >
      <h3 className="vertical-timeline-element-title">OffDays</h3>
      <h4 className="vertical-timeline-element-subtitle">London, England | Internship</h4>
      <p>
        <strong>Position</strong> | Software Engineer Intern <br />
        <strong>Skills</strong> | TypeScript, React.js, Software Engineering
      </p>
    </VerticalTimelineElement>

    <VerticalTimelineElement
      contentStyle={{ background: "#010017", color: "#fff" }}
      contentArrowStyle={{ borderRight: '10px solid rgb(255, 255, 255)' }}
      date="Jan 2025 - Present"
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
      date="Oct 2022 - Present"
      iconStyle={{ background: '#faaf49', color: '#fff' }}
      icon={ <div className="img-container"><img src="/assets/Company/orange_trust.jpg" alt="The Orange Trust Logo" className="img"/></div>}
    >
      <h3 className="vertical-timeline-element-title">The Orange Trust</h3>
      <h4 className="vertical-timeline-element-subtitle">London | Volunteering</h4>
      <p>
        <strong>Position</strong> | Volunteer Software Developer <br />
        <strong>Skills</strong> | Web Development, Collaboration, Problem Solving
      </p>
    </VerticalTimelineElement>

    <VerticalTimelineElement
      contentStyle={{ background: "#010017", color: "#fff" }}
      contentArrowStyle={{ borderRight: '10px solid rgb(255, 255, 255)' }}
      date="Nov 2024 - February 2025"
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

  </VerticalTimeline>
    </WorkTimeline>
  )
}
export default Work

const WorkTimeline = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
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

