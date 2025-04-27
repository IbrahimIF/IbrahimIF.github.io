import './Social.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faDiscord, faSteam, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Social() {

    return (
      <>
        <div className="social_container">
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

            <div className="social_icons" id="steam">
               <div className="icon_wrapper">
                 <a href="https://steamcommunity.com/profiles/76561199003620198/" aria-label="Steam" className="icon_link steam">
                   <div className="filled"></div>
                   <FontAwesomeIcon icon={faSteam} className="icon" />
                 </a>
               </div>
            </div>

            <div className="social_icons" id="linkedin">
               <div className="icon_wrapper">
                 <a href="https://www.linkedin.com/in/ibrahim-farrah-b742471a6/" aria-label="Linkedin" className="icon_link linkedin">
                   <div className="filled"></div>
                   <FontAwesomeIcon icon={faLinkedin} className="icon" />
                 </a>
               </div>
            </div>

        </div>
      </>
    )
  
}


export default Social
