import styled from 'styled-components';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Work({ counter }) {
  return (
    <WorkTimeline id="Work">
        <VerticalTimeline>



        {counter > 10 && 
          <VerticalTimelineElement
            contentStyle={{ background: "#010017" }}
            contentArrowStyle={{ borderRight: '10px solid  rgb(255, 255, 255)' }}
            date="Coming Soon"
            iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
            icon={ <div className="img-container"><img src="/assets/Company/Google.png" alt="placeholder" className="img"/></div>}
          >
            <h3>Google</h3>
            <h4>London | Shadowing</h4>
            <p>
              Shadowing, Software Engineer
            </p>
          </VerticalTimelineElement>
          }
          {counter > 10 && 
          <VerticalTimelineElement
            contentStyle={{ background: "#010017" }}
            contentArrowStyle={{ borderRight: '10px solid  rgb(255, 255, 255)' }}
            date="Coming Soon"
            iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
            icon={ <div className="img-container"><img src="/assets/Company/vodafone.jpg" alt="placeholder" className="img"/></div>}
          >
            <h3>Vodafone</h3>
            <h4>London | Shadowing</h4>
            <p>
              Shadowing, Software Engineer
            </p>
          </VerticalTimelineElement>
          }
          {counter > 6 && 
          <VerticalTimelineElement
            contentStyle={{ background: "#010017" }}
            contentArrowStyle={{ borderRight: '10px solid  rgb(255, 255, 255)' }}
            date="May 2025 - present"
            iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
            icon={ <div className="img-container"><img src="/assets/Company/offdays.jpg" alt="placeholder" className="img"/></div>}
          >
            <h3>Off-Days</h3>
            <h4>London | Internship</h4>
            <p>
              Software Engineering, Front-End, Typscript
            </p>
          </VerticalTimelineElement>
          }

          <VerticalTimelineElement
            contentStyle={{ background: "#010017" }}
            contentArrowStyle={{ borderRight: '10px solid  rgb(255, 255, 255)' }}
            date="Jan 2025 - Present"
            iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
            icon={ <div className="img-container"><img src="/assets/Company/innovation_pod.jpg" alt="placeholder" className="img"/></div>}
          >
            <h3>Innovation Pod</h3>
            <h4>London | Part-time</h4>
            <p>
              Coding Teacher, Assistant Coding Teacher
            </p>
          </VerticalTimelineElement>
          
          <VerticalTimelineElement
            contentStyle={{ background: "#010017" }}
            contentArrowStyle={{ borderRight: '10px solid  rgb(255, 255, 255)' }}
            date="Oct 2022 -  Present"
            iconStyle={{ background: '#faaf49', color: '#fff' }}
            icon={ <div className="img-container"><img src="/assets/Company/orange_trust.jpg" alt="placeholder" className="img"/></div>}
          >
            <h3>The Orange Trust</h3>
            <h4>London | Volunteering</h4>
            <p>
              Volunteering Web Developer, Volunteer Software Developer
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: "#010017" }}
            contentArrowStyle={{ borderRight: '10px solid  rgb(255, 255, 255)' }}
            date="Nov 2024 - Feburary 2025"
            iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
            icon={ <div className="img-container"><img src="/assets/Company/el_waterworks.jpg" alt="placeholder" className="img"/></div>}
          >
            <h3>East London Waterworks Park</h3>
            <h4>Online | Volunteering</h4>
            <p>
              PHP, Web Applications, Volunteering Web Developer
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: "#010017" }}
            contentArrowStyle={{ borderRight: '10px solid  rgb(255, 255, 255)' }}
            date="Jun 2024 - Jun 2024"
            iconStyle={{ background: '#3d3c3a', color: '#fff' }}
            icon={ <div className="img-container"><img src="/assets/Company/bright_network.jpg" alt="placeholder" className="img"/></div>}
          >
            <h3>Bright Network</h3>
            <h4>Online | Internship</h4>
            <p>
              IEUK 2024 Technology Internship, Couch to Coder | Software Developer Course
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: "#010017" }}
            contentArrowStyle={{ borderRight: '10px solid  rgb(255, 255, 255)' }}
            date="Nov 2023 - May 2024"
            iconStyle={{ background: '#344f73', color: '#fff' }}
            icon={ <div className="img-container"><img src="/assets/Company/union_brunel.jpg" alt="placeholder" className="img"/></div>}
          >
            <h3>Union Of Brunel Students</h3>
            <h4>London | Society</h4>
            <p>
              Orange Trust World Issues Soceity, Technical Secretary
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: "#010017" }}
            contentArrowStyle={{ borderRight: '10px solid  rgb(255, 255, 255)' }}
            date="Jun 2023 - Apr 2024"
            iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
            icon={ <div className="img-container"><img src="/assets/Company/eep.jpg" alt="placeholder" className="img"/></div>}
          >
            <h3>EEP</h3>
            <h4>London | Part-Time</h4>
            <p>
              Customer Service, Communication, Security, Steward
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: "#010017" }}
            contentArrowStyle={{ borderRight: '10px solid  rgb(255, 255, 255)' }}
            date="Nov 2020 - Feb 2021"
            iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
            icon={ <div className="img-container"><img src="/assets/Company/ncc.jpg" alt="placeholder" className="img"/></div>}
          >
            <h3>New City Collegek</h3>
            <h4>London | Volunteering</h4>
            <p>
              IT Help Desk, Customer Service
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

