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
              Copywright &copy; 2025 <a href="/">IbrahimIF</a>. All rights reserved.
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 100%;
  }
  .bottom_container{
    display: flex;
    flex-direction: row;
    position: relative;
    justify-content: space-between;
    align-items: center;
    min-width: 100%;
    padding-top: 50px;
    padding-left: 10%;
    padding-right: 10%;
  }

  .Bars_container{
    flex: 0 0 auto;
  margin-right: auto; /* Pushes everything else to the right */
  }

  .Text_container{
    position: absolute;
  left: 50%;
  transform: translateX(-50%);
  }

  .Socials_container{
    flex: 0 0 auto;
  margin-left: auto; /* Pushes itself to the far right */
  }


  .line{
      position: relative;
      height: 2px;
      width: 80%;
      top: 100%;
      background: rgb(120, 120, 120);
  }
`;



const Bars = styled.div`
  display: flex;
  margin: 0 10px;
  width: 150px;
  height: 100%;
  justify-content: center;
  align-items: center;
  overflow: visible;

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
  left: 60px;
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

`;



const Circle = styled.div`
  display:flex;
  justify-content: center;
  border: 4px solid white;
  background-color: rgb(0, 0, 0);
  border-radius: 50%;
  width: 58px;
  height: 58px;
  position: absolute;
  bottom: 23px;
  p {
    display:flex;
    align-items:center;
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
    position: relative;
}

.icon_link {
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    color: #4d4d4d;
    background-color: #fff;
    border: 2px solid rgb(0, 0, 0);
    transition: all 0.3s ease-in-out;
}

.icon_link:hover {
    box-shadow: 3px 2px 45px 0px rgb(0 0 0 / 12%);
    border: 2px solid rgb(0, 0, 0);
    color: white;
}

.icon {
    position: relative;
    z-index: 1;
    width: 22px;
    height: 22px;
}

.custom-icon:hover {
    filter: brightness(0) invert(1);
}

.custom-icon {
    position: relative;
    z-index: 1;
    width: 22px;
    height: 22px;
}



`;