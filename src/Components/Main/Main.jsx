import styled from 'styled-components';

import Social from '../Social/Social'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function main() {
  return (
  <MainSection>
  <div className="box">
    <div className="textContainer">
      <br />
      <br />
      <div className="title">
        <span className="block-title"></span>
        <h1 className="firstText">Ibrahim Farrah</h1>
      </div>

      <div className="subTitle">
        <div className="block-subTitle"></div>
        <p className="subText">22-year-old (aspiring) software engineer from the United Kingdom</p>
      </div>

      <div className="icons">
        <a className="icons" href="https://mail.google.com/mail/u/0/?zx=knxh55u8nye4#inbox">
          <FontAwesomeIcon icon={faEnvelope} />
          <span className="icon-text">ibrahimfarrah30@</span>
        </a>
      </div>
    </div>
  </div>
  <Social />
  </MainSection>
  )
}

export default main




const MainSection = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  align-items: center;
  overflow: hidden;



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
  margin-right: 50px;
  margin-bottom: 10px;
  z-index: 1;
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

.icons {
  position: relative;
  justify-content: center; /* added to align icons and text to the center */
  animation: secFadeIn 3s forwards;
  animation-delay: 5s;
  opacity: 0;
  font-family: 'Poppins';
  font-size: 18px;
  cursor: pointer;
  text-decoration: none;
  flex-wrap: nowrap;
  display: flex;
  color: rgb(196, 196, 196);
  font-size: 16px;
  font-weight: bold;
  margin-right: 12px; /* added space between the icons and text */
}.icon-text {
  font-family: Arial, sans-serif;
  margin-left: 8px; /* space between the icon and the text */
}.icons:hover{
  color: rgb(130, 130, 130);
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