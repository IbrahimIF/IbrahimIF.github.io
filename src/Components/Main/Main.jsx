import Social from '../Social/Social'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


import './Main.css'

function main() {

  return (
    <>
      <div className="main_container">

      <div className="box">
    <div className="textContainer">
      <br /> <br />
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
            <FontAwesomeIcon icon={faEnvelope} /><span className="icon-text">ibrahimfarrah30@</span>
          </a>
      </div>
    </div>
    </div>
        <Social/>
      </div>
    </>
  )
}

export default main