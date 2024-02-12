import { Link, NavLink } from "react-router-dom"
import "./index.scss"
import logo_img from "../../assets/images/logo-s.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faAngleDoubleDown,
  faEnvelope,
  faHome,
  faUser,
} from "@fortawesome/free-solid-svg-icons"
import {
  faGithub,
  faLinkedin,
  faSkype,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"
import { useState } from "react"

const Sidebar = () => {


   const [show , setShow] =useState(false);
   const showSocial = ()=>{
    setShow(!show)
    console.log(show)
   }

  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={logo_img} alt="logo" />
        {/* <img className="sub-logo" src={logo_title} alt="logo" /> */}
        <h2 className="sub-logo">Sherif</h2>
      </Link>

      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>

      <ul className={show ? "show" : ""}  >
        <li>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} color="#4f4f4e" />
          </a>
        </li>

        <li>
          <a href="https://www.github.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} color="#4f4f4e" />
          </a>
        </li>

        <li>
          <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faYoutube} color="#4f4f4e" />
          </a>
        </li>

        <li>
          <a href="https://www.skype.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faSkype} color="#4f4f4e" />
          </a>
        </li>
      </ul>

      <div  className="social"  onClick={showSocial}   >
        <FontAwesomeIcon icon={faAngleDoubleDown} color="red" />
      </div>
    </div>
  )
}

export default Sidebar
