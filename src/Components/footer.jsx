import styled from 'styled-components';
import { FaGithub, FaDiscord, FaSteam, FaLinkedin } from "react-icons/fa6";

function Foot({counter}) {

  return (
      <Footer id="Footer">
        <div className="top_container">
          <div className="line"></div>
        </div>

        <div className="bottom_container">
          <div className="Bars_container">
            <Bars id="Bars">
                <div className="loader"></div>
            </Bars>
          </div>

          <div className="Text_container">
            <p className="text">
              Copyright &copy; 2025 <a href="/"> IbrahimIF</a>. All rights reserved.
            </p>  
          </div>

          <div className="Socials_container">
            <Socials id = "Socials">
              <div className="social_icons" id="github">
                <div className="icon_wrapper">
                  <a href="https://github.com/IbrahimIF" aria-label="GitHub" className="icon_link github">
  
                    <FaGithub className="icon" />
                  </a>
                </div>
              </div>
              { counter > 14 &&
              <div className="social_icons" id="discord">
                <div className="icon_wrapper">
                  <a href="https://discordapp.com/users/431043132889628682" aria-label="Discord" className="icon_link discord">
  
                    <FaDiscord className="icon" />
                  </a>
                </div>
              </div>
              }
              { counter > 16 &&
              <div className="social_icons" id="steam">
                <div className="icon_wrapper">
                  <a href="https://steamcommunity.com/profiles/76561199003620198/" aria-label="Steam" className="icon_link steam">
  
                    <FaSteam className="icon" />
                  </a>
                </div>
              </div>
              }
  
              <div className="social_icons" id="linkedin">
                <div className="icon_wrapper">
                  <a href="https://www.linkedin.com/in/ibrahim-farrah-b742471a6/" aria-label="Linkedin" className="icon_link linkedin">
  
                    <FaLinkedin className="icon" />
                  </a>
                </div>
              </div>

              <div className="social_icons" id="uiverse">
                <div className="icon_wrapper">
                  <a href="https://uiverse.io/profile/IbrahimIF" aria-label="Uiverse" className="icon_link uiverse">
  
                    <img src="/assets/Company/Uiverse.png" className="custom-icon"/>
                  </a>
                </div>
              </div>
            </Socials>
          </div>
        </div>
        <Circle id="Circle"> 
          <p>Lol</p> 
        </Circle>
      </Footer>
  )
}

export default Foot


const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(0, 0, 0);
  z-index: 1;
  height: 35vh;
  padding: 50px;
  margin-top: calc(-1 * var(--section-gap));

  .top_container{
    width: 100%;
    display: flex;
    justify-content: center;
  }
  
  .line{
    height: 2px;
    width: 80%;
    background: rgb(120, 120, 120);
  }

  .bottom_container{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 50px;
    padding-left: 10%;
    padding-right: 10%;
    position: relative;
  }

  .Bars_container{
    flex: 0 0 auto;
    margin-right: auto;
  }

  .Text_container{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  .Socials_container{
    flex: 0 0 auto;
    margin-left: auto;
  }

  @media (max-width: 750px) {
    height: 25vh;
    padding: 20px;

    .bottom_container {
      padding-top: 20px;
      padding-left: 5%;
      padding-right: 5%;
      gap: 15px;
    }

    .Bars_container,
    .Text_container,
    .Socials_container {
      position: static;
      transform: none;
      margin: 0; 
      text-align: center; 
    }

    .Text_container .text {
        font-size: 0.8rem; 
    }

    .line {
        width: 90%; 
    }
  }

    @media (max-width: 450px) {
    .Text_container .text {
      font-size: 0.7rem;
    }
  }
`;



const Bars = styled.div`
  display: flex;
  margin: 0 10px;
  width: 150px;
  height: 100%;
  justify-content: center;
  align-items: center;

  .loader {
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
    transition: all 0.3s ease;
    box-shadow: 
    rgba(255, 255, 255, 0.25) 0px 54px 55px,
    rgba(255, 255, 255, 0.15) 0px -12px 30px,
    rgba(255, 255, 255, 0.15) 0px 4px 6px,
    rgba(255, 255, 255, 0.2) 0px 12px 13px,
    rgba(255, 255, 255, 0.1) 0px -3px 5px;
  }

  .loader::before {
    left: -60px;
  }
  
  .loader::after {
    left: 60px;
  }

  @media (max-width: 950px) {
    width: 100px;
    margin: 0;

    .loader {
        height: 100px;
        width: 16px;
    }

    .loader::after,
    .loader::before {
        height: 50px;
        width: 16px;
        left: 40px;
    }

    .loader::before {
        left: -40px;
    }
  }

  @media (max-width: 450px) {
    width: 80px;
    margin: 0;

    .loader {
      height: 80px;
      width: 12px;
    }

    .loader::after,
    .loader::before {
      height: 40px;
      width: 12px;
      left: 30px;
    }

    .loader::before {
      left: -30px;
    }
  }
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  border: 4px solid white;
  background-color: rgb(0, 0, 0);
  border-radius: 50%;
  width: 58px;
  height: 58px;
  position: absolute;
  bottom: 23px;

  p {
    display: flex;
    align-items: center;
    margin: 0;
  }

  @media (max-width: 650px){
    width: 40px;
    height: 40px;
  }
`;


const Socials = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  .social_icons {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icon_wrapper {
    margin: 0 10px;
  }

  .icon_link {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    color: #4d4d4d;
    background-color: #fff;
    border: 2px solid rgb(0, 0, 0);
    overflow: hidden;
    transition: all 0.3s ease-in-out;
    position: relative;
  }

  .icon_link:hover {
    box-shadow: 3px 2px 45px 0px rgb(0 0 0 / 12%);
    border: 2px solid rgb(0, 0, 0);
    color: white;
  }

  .icon {
    width: 22px;
    height: 22px;
  }

  .custom-icon {
    position: relative;
    z-index: 1;
    width: 22px;
    height: 22px;
  }

  .custom-icon:hover {
    filter: brightness(0) invert(1);
  }

  @media (max-width: 950px) {
    .icon_wrapper {
        margin: 0 5px;
    }

    .icon_link {
        width: 30px;
        height: 30px;
    }

    .icon, .custom-icon {
        width: 18px;
        height: 18px;
    }
  }


  @media (max-width: 450px) {
    .icon_wrapper {
        margin: 0 1px;
    }

    .icon_link {
        width: 26px;
        height: 26px;
    }

    .icon, .custom-icon {
        width: 15px;
        height: 15px;
    }
  }
`;
