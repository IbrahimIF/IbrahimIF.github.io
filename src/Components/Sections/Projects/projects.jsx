import styled from 'styled-components';

function Project() {
  return (
    <ProjectSection id="Project">
      <div className="box">
        <div className="textContainer">
          <br /> <br />
          <div className="title">
            <span className="block-title"></span>
            <h1 className="firstText">Projects</h1>
          </div>
        </div>
      </div>
    </ProjectSection>
  )
}
export default Project

const ProjectSection = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  align-items: center;
  /*overflow: hidden;*/
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
  margin-left: 50px;
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

