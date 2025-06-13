import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faDiscord, faSteam, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Social({counter}) {
    return (
      <>
        <Socials id="Socials">
          <div className="socials-container">
            <div className="social_icons" id="github">
              <div className="icon_wrapper">
                <a href="https://github.com/IbrahimIF" aria-label="GitHub" className="icon_link github">
                  <div className="filled"></div>
                  <FontAwesomeIcon icon={faGithub} className="icon" />
                </a>
              </div>
            </div>
            <div className="social_icons" id="discord">
              <div className="icon_wrapper">
                <a href="https://discordapp.com/users/431043132889628682" aria-label="Discord" className="icon_link discord">
                  <div className="filled"></div>
                  <FontAwesomeIcon icon={faDiscord} className="icon" />
                </a>
              </div>
            </div>
            { counter > 12 &&
            <div className="social_icons" id="steam">
              <div className="icon_wrapper">
                <a href="https://steamcommunity.com/profiles/76561199003620198/" aria-label="Steam" className="icon_link steam">
                  <div className="filled"></div>
                  <FontAwesomeIcon icon={faSteam} className="icon" />
                </a>
              </div>
            </div>
            }
            <div className="social_icons" id="linkedin">
              <div className="icon_wrapper">
                <a href="https://www.linkedin.com/in/ibrahim-farrah-b742471a6/" aria-label="Linkedin" className="icon_link linkedin">
                  <div className="filled"></div>
                  <FontAwesomeIcon icon={faLinkedin} className="icon" />
                </a>
              </div>
            </div>
          </div>
        </Socials>
      </>
    )
}
export default Social


const Socials = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: fixed;
    left:0;
    z-index: 1;
    height:100%;

.socials-container{
    background-color: black;
    padding:10px;
    border-radius: 0px 30px 30px 0px;
    border: 3px solid rgb(105, 105, 105);
}
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
    border: 2px solid rgb(255, 255, 255);
    color: white;
}

.icon {
    position: relative;
    z-index: 1;
    width: 22px;
    height: 22px;
}

.filled {
    position: absolute;
    top: auto;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    background-color: #000;
    transition: all 0.3s ease-in-out;
}

.icon_link:hover .filled {
    height: 100%;
}

#github .filled {
    background-color: #24262a;
}
#discord .filled {
    background-color: #5865F2;
}

#steam .filled {
    background-color: #1B2838;
}

#linkedin .filled {
    background-color: #0A66C2;
}

`;