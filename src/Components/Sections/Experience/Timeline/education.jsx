import styled from 'styled-components';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Education() {
  return (
    <EducationTimeline id="Education">
        <VerticalTimeline>
          <VerticalTimelineElement
            contentStyle={{ background: "#010017" }}
            contentArrowStyle={{ borderRight: '10px solid  rgb(255, 255, 255)' }}
            date="Sep 2021 - Jul 2024"
            iconStyle={{ background: '#002b52', color: '#fff' }}
            icon={ <div className="img-container"><img src="/assets/Company/brunel.jpg" alt="placeholder" className="img"/></div>}
          >
            <h3> Brunel University London</h3>
            <h4>London | 2:1</h4>
            <p> BSc Computer Science (Software Engineering) </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: "#010017" }}
            contentArrowStyle={{ borderRight: '10px solid  rgb(255, 255, 255)' }}
            date="Sep 2019 - Jun 2021"
            iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
            icon={ <div className="img-container"><img src="/assets/Company/ncc.jpg" alt="placeholder" className="img"/></div>}
          >
            <h3>New City College</h3>
            <h4>London | Triple Distinction (144 UCAS Points)</h4>
            <p>
              A-Level or equivalent in Level 3 Extended Diploma in Information Technology
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: "#010017" }}
            contentArrowStyle={{ borderRight: '10px solid  rgb(255, 255, 255)' }}
            date="2015 - 2019"
            iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
            icon={ <div className="img-container"><img src="/assets/Company/St_Pauls.png" alt="placeholder" className="img"/></div>}
          >
            <h3>St Pauls Way Trust School</h3>
            <h4>London | GCSE</h4>
            <p>
              10 GCSEs, including Digital Applications (ICT) (6)
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
    </EducationTimeline>
  )
}
export default Education

const EducationTimeline = styled.div`
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

