import styled from 'styled-components';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Education() {
  return (
    <EducationTimeline id="Education">
        <VerticalTimeline>
          <VerticalTimelineElement
            contentStyle={{ background: "#5ca5c6" }}
            contentArrowStyle={{ borderRight: '10px solid  rgb(255, 255, 255)' }}
            date="2011 - present"
            iconStyle={{ background: 'rgb(62, 62, 62)', color: '#fff' }}
            icon={ <div className="img-container"><img src="/favicon.png" alt="placeholder" className="img"/></div>}
          >
            <h3>Creative Director</h3>
            <h4>Miami, FL</h4>
            <p>
              Creative Direction, User Experience, Visual Design, Project Management, Team Leading
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: "#5ca5c6" }}
            contentArrowStyle={{ borderRight: '10px solid  rgb(255, 255, 255)' }}
            date="2011 - present"
            iconStyle={{ background: 'rgb(62, 62, 62)', color: '#fff' }}
            icon={ <div className="img-container"><img src="/favicon.png" alt="placeholder" className="img"/></div>}
          >
            <h3>Art Director</h3>
            <h4>San Francisco, CA</h4>
            <p>
              Creative Direction, User Experience, Visual Design, SEO, Online Marketing
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: "#5ca5c6" }}
            contentArrowStyle={{ borderRight: '10px solid  rgb(255, 255, 255)' }}
            date="2011 - present"
            iconStyle={{ background: 'rgb(62, 62, 62)', color: '#fff' }}
            icon={ <div className="img-container"><img src="/favicon.png" alt="placeholder" className="img"/></div>}
          >
            <h3>Web Designer</h3>
            <h4>Los Angeles, CA</h4>
            <p>
              User Experience, Visual Design
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: "#5ca5c6" }}
            contentArrowStyle={{ borderRight: '10px solid  rgb(255, 255, 255)' }}
            date="2011 - present"
            iconStyle={{ background: 'rgb(62, 62, 62)', color: '#fff' }}
            icon={ <div className="img-container"><img src="/favicon.png" alt="placeholder" className="img"/></div>}
          >
            <h3>Web Designer</h3>
            <h4>San Francisco, CA</h4>
            <p>
              User Experience, Visual Design
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: "#5ca5c6" }}
            contentArrowStyle={{ borderRight: '10px solid  rgb(255, 255, 255)' }}
            date="2011 - present"
            iconStyle={{ background: 'rgb(62, 62, 62)', color: '#fff' }}
            icon={ <div className="img-container"><img src="/favicon.png" alt="placeholder" className="img"/></div>}
          >
            <h3>Content Marketing for Web, Mobile and Social Media</h3>
            <h4>Online Course</h4>
            <p>
              Strategy, Social Media
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: "#5ca5c6" }}
            contentArrowStyle={{ borderRight: '10px solid  rgb(255, 255, 255)' }}
            date="2011 - present"
            iconStyle={{ background: 'rgb(62, 62, 62)', color: '#fff' }}
            icon={ <div className="img-container"><img src="/favicon.png" alt="placeholder" className="img"/></div>}
          >
            <h3>Agile Development Scrum Master</h3>
            <h4>Certification</h4>
            <p>
              Creative Direction, User Experience, Visual Design
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: "#5ca5c6" }}
            contentArrowStyle={{ borderRight: '10px solid  rgb(255, 255, 255)' }}
            date="2011 - present"
            iconStyle={{ background: 'rgb(62, 62, 62)', color: '#fff' }}
            icon={ <div className="img-container"><img src="/favicon.png" alt="placeholder" className="img"/></div>}
          >
            <h3>Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
            <h4>Bachelor Degree</h4>
            <p>
              Creative Direction, Visual Design
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
  width: 80%;
  object-fit: contain;
}
`;

