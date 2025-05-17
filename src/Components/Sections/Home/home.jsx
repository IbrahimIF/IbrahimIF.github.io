import styled from 'styled-components';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Home() {
  return (
  <HomeSection id="Home">
    <div className="box">
    <Bars>
      <div class="loader"></div>
    </Bars>
    <div className="infoSection">
      <Title>
        <div className="title">
          <h1 className="firstText">Ibrahim Farrah</h1>
        </div>
      </Title>
      <Button>
        <div class="box-button">
          <div class="button"><span>Button</span></div>
        </div>
        <div class="box-button">
          <div class="button"><span>Button</span></div>
        </div>
      </Button>
    </div>
    </div>

  </HomeSection>
  )
}

export default Home

const HomeSection = styled.section`
  display:flex;
  justify-content: center;
  flex-direction: row-reverse;
  align-items: center;
  height: 100%;
  width: 100%;

  .box {
  width: 100%;
  overflow: hidden;
  min-height: 72vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
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

.infoSection{
  display:flex;
  align-items: center;
  flex-direction: column;

}

`;

const Bars = styled.div`
  display:flex;

  .loader {
  width: 12px;
  height: 80px;
  border-radius: 6px;
  background-color: currentColor;
  position: relative;
  color: #f2f2f2;
  transition: all 0.3s ease;
}

.loader::after,
.loader::before {
  content: '';
  width: 12px;
  height: 40px;
  border-radius: 6px;
  background: currentColor;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 30px;
  transition: all 0.3s ease;
}

.loader::before {
  left: -30px;
}

.loader:hover::before,
.loader:hover::after {
  height: 80px;
}


.loader {
  width: 24px; /* 12px × 2 */
  height: 160px; /* 80px × 2 */
  border-radius: 12px; /* 6px × 2 */
  margin: 120px auto; /* 60px × 2 */
}

.loader::after,
.loader::before {
  width: 24px; /* 12px × 2 */
  height: 80px; /* 40px × 2 */
  border-radius: 12px; /* 6px × 2 */
  left: 60px; /* 30px × 2 */
}

.loader::before {
  left: -60px; /* -30px × 2 */
}

.loader:hover::before,
.loader:hover::after {
  height: 160px; /* 80px × 2 */
}

`;


const Title = styled.div`
  display:flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  width: 250px;


.title {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  align-items: center;
}
.firstText {
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


`;

const Button = styled.div`
  display:flex;
  flex-direction: row;


.box-button {
  cursor: pointer;
  border: 4px solid black;
  background-color: gray;
  padding-bottom: 10px;
  transition: 0.1s ease-in-out;
  user-select: none;
}

.button {
  background-color: #dddddd;
  border: 4px solid #fff;
  padding: 3px 8px;
}

.button span {
  font-size: 1.2em;
  letter-spacing: 1px;
}

.box-button:active {
  padding: 0;
  margin-bottom: 10px;
  transform: translateY(10px);
}

`;

