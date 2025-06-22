import styled from 'styled-components';
import { FaGithub, FaDownload } from "react-icons/fa6";


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
        <a href="/CV.pdf" target="_blank" rel="noopener noreferrer" className="button3D"> Download CV &nbsp; <FaDownload className="icon" /></a>
        <a href="https://github.com/IbrahimIF/IbrahimIF.github.io" className="button3D"> <FaGithub className="icon" /> &nbsp;  Repository </a>
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
    min-height: 72vh;
    display: flex;
    justify-content: center; 
    border-radius: 15px;
    transition: 1s;
    padding: 20px;
    margin: 10px;

    z-index: 0;
    background-color: rgba(3, 1, 14, 0.2);
    box-shadow: 
  rgba(0, 24, 72, 0.2) 0px 54px 55px,  
  rgba(40, 60, 110, 0.1) 0px -12px 30px,  
  rgba(40, 60, 120, 0.1) 0px 4px 6px,  
  rgba(24, 33, 53, 0.15) 0px 12px 13px,  
  rgba(255, 255, 255, 0.08) 0px -3px 5px;

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
  width: 40%;
  min-width: 170px;
  justify-content: center;
  align-items: center;
  overflow: visible;

  @media (max-width: 768px) {
      min-width:100%;
    }

  .loader {
  margin: 120px auto;
  width: 24px;
  height: 160px;
  border-radius: 12px;
  background-color: currentColor;
  position: relative;
  color: #f2f2f2;
  box-shadow: 
  rgba(255, 255, 255, 0.25) 0px 54px 55px,
  rgba(255, 255, 255, 0.15) 0px -12px 30px,
  rgba(255, 255, 255, 0.15) 0px 4px 6px,
  rgba(255, 255, 255, 0.2) 0px 12px 13px,
  rgba(255, 255, 255, 0.1) 0px -3px 5px;
  transition: all 0.3s ease;
}

.loader::after,
.loader::before {
  content: '';
  width: 24px;
  height: 80px;
  border-radius: 12px;
  background: currentColor;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 50px;
  transition: all 0.3s ease;

  box-shadow: 
  rgba(255, 255, 255, 0.25) 0px 54px 55px,
  rgba(255, 255, 255, 0.15) 0px -12px 30px,
  rgba(255, 255, 255, 0.15) 0px 4px 6px,
  rgba(255, 255, 255, 0.2) 0px 12px 13px,
  rgba(255, 255, 255, 0.1) 0px -3px 5px;

  
}

.loader::before {
  left: -50px;
}

.loader:hover::before,
.loader:hover::after {
  height: 160px;
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
  max-width: 395px;
  gap:10px;


.button3D {
  text-align: center;
  padding: 0.5rem 1.5rem;
  border-radius: 6px;
  color:rgb(212, 212, 212);
  background-color:rgb(19, 19, 52);
  cursor: pointer;
  border: none;
  text-decoration: none;
  transition: box-shadow 0.15s ease, transform 0.15s ease, all 0.2s ease;
}

.button3D:hover {
  box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px,rgb(62, 62, 62) 0 -3px 0 inset;
  transform: translateY(-1px);
}

.button3D:active {
  box-shadow:rgb(45, 45, 45) 0 3px 7px inset;
  transform: translateY(2px);
}


  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }

`;

