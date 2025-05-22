import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

function Home() {
  return (
  <HomeSection id="Home">
    <Logo>
      <img src="/assets/Logo.png" alt="logo"  className="image"/>
    </Logo>
    <div className="box">
    <Bars id="Bars">
      <div className="loader"></div>
    </Bars>
    <div className="infoSection">
      <Title id="Title">
        <div className="title">
          <h1 className="firstText">Ibrahim Farrah</h1>
        </div>
      </Title> 
      <Button id="Button">
        <button className="button3D">Download CV <FontAwesomeIcon icon={faDownload} className="icon" /></button>
        <button className="button3D"> <FontAwesomeIcon icon={faGithub} className="icon" />  Repository </button>
      </Button>
    </div>
    </div>

  </HomeSection>
  )
}

export default Home

const Logo = styled.div`
  display:flex;
  max-width: 600px;
  top: 10px;
  left: 20px;
  position: absolute;

  .image{
    width: 30%;
  
  }
`;

const HomeSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

  .box {
    width: 100%;
    min-height: 72vh;
    display: flex;
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

    @media (max-width: 768px) {
      flex-direction: column;
      justify-content: center;
    }
  }

  .infoSection {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 30%;
    min-width: 300px;

    @media (max-width: 768px) {
      min-width:100%;
    }
}

`;

const Bars = styled.div`
  display: flex;
  width: 25%;
  min-width: 170px;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
      min-width:100%;
    }

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
  padding-bottom: 10px;


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
}


`;

const Button = styled.div`
  display:flex;
  flex-direction: row;
  padding-top: 10px;
  justify-content: space-between;
  width: 100%;
  max-width: 295px;


.button3D {
  cursor: pointer;
  transition: all 0.2s ease;
  background-color: transparent;
  color:rgb(255, 255, 255);
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  border: 2px solid rgb(255, 255, 255);
  border-bottom: 4px solid rgb(255, 255, 255);
  font-size: 0.75rem;
  font-weight: 600;
}

.button3D:hover {
  brightness: 110%;
  transform: translateY(-1px);
  border-bottom: 6px solid rgb(255, 255, 255);
  background-color: grey;
  color: rgb(255, 255, 255);
}

.button3D:active {
  border-bottom: 1px solid rgb(255, 255, 255);
  brightness: 90%;
  transform: translateY(2px);
  animation-duration: 5s;
}


  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }

`;

