import styled from 'styled-components';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Experience() {
  return (
    <ExperienceSection id="Experience">
      <div className="box">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2011 - present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">Creative Director</h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>
              Creative Direction, User Experience, Visual Design, Project Management, Team Leading
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2010 - 2011"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">Art Director</h3>
            <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
            <p>
              Creative Direction, User Experience, Visual Design, SEO, Online Marketing
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2008 - 2010"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">Web Designer</h3>
            <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
            <p>
              User Experience, Visual Design
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2006 - 2008"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">Web Designer</h3>
            <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
            <p>
              User Experience, Visual Design
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="April 2013"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
            <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
            <p>
              Strategy, Social Media
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="November 2012"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
            <h4 className="vertical-timeline-element-subtitle">Certification</h4>
            <p>
              Creative Direction, User Experience, Visual Design
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2002 - 2006"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
            <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
            <p>
              Creative Direction, Visual Design
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          />
        </VerticalTimeline>
      </div>
    </ExperienceSection>
  )
}
export default Experience

const ExperienceSection = styled.section`
   height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  align-items: center;
  /*overflow: hidden;*/


.box {
  width: 100%;
  overflow: hidden;
  min-height: 72vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border-radius: 15px;
  border: 4px solid rgb(134, 134, 134);
  transition: 1s;
  padding: 20px;
  margin: 10px;
  margin-left: 50px;
  margin-bottom: 10px;
  z-index: 0;
  background-color: black;
}

.textContainer {
  width: 250px;
  height: 250px;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.title {
  width: 100%;
  display: flex;
  align-items: center;
  height: 70px;
  justify-content: space-around;
    align-items: center;
}.block-title {
  width: 0%;
  height: inherit;
  background: #b6b6b6;
  position: absolute;
  animation: mainBlock 2s cubic-bezier(.74, .06, .4, .92) forwards;
  display: flex;
}.firstText {
  font-family: Arial, sans-serif;
  color: #cfcfcf;
  font-size: 32px;
  animation: mainFadeIn 2s forwards;
  animation-delay: 1.6s;
  opacity: 0;
  display: flex;
  align-items: baseline;
  position: relative;
  text-decoration: underline;
}

.subTitle {
  width: 300%;
  position: relative;
  display: flex;
  align-items: center;
  height: 50px; /* increased height for better visual balance */
  margin-top: -10px;
  font-family: Arial, sans-serif; /* added font-family for consistency */
}.block-subTitle {
  width: 0%;
  height: inherit;
  background: #b6b6b6;
  position: relative;
  animation: secBlock 2s cubic-bezier(.74, .06, .4, .92) forwards;
  animation-delay: 2s;
  display: flex;
  margin-left: -80px;
}.subText {
  animation: secFadeIn 2s forwards;
  animation-delay: 3.4s;
  padding: 60px;
  opacity: 0;
  white-space: nowrap;
  align-items: center;
  justify-content: center;
  margin-left: -66.5px;
  color: rgb(185, 185, 185);
  font-size: 16px;
  font-weight: bold;
}

@keyframes mainBlock {
  0% {
    width: 0%;
    left: 0;

  }

  50% {
    width: 100%;
    left: 0;

  }

  100% {
    width: 0;
    left: 100%;
  }
}

@keyframes secBlock {
  0% {
    width: 0%;
    left: 0;

  }

  50% {
    width: 300%;
    left: 0;

  }

  100% {
    width: 0;
    left: 80%;
  }
}

@keyframes mainFadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}


@keyframes secFadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}



/* Font size for tablets */
@media (max-width: 625px) {
  .subText {
    padding: 110px;
    font-size: 12px;
  }
}


@media (max-width: 480px) {
  .subText {
    font-size: 5px;
  }
}
`;

