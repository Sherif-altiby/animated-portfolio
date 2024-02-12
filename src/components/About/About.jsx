import { useState, useEffect } from "react"
import AnimatedLetters from "../AnimatedLetters"
import "./About.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCss3,
  faHtml5,
  faJsSquare,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons"
import Loader from 'react-loaders'


const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate")

  useEffect(() => {
    return () => setTimeout(() => setLetterClass("text-animate-hover"), 4000)
  }, [])

  return (
<>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p>
            I’m very ambitious front-end developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p>
            I'm quietly confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            If I need to define myself in one sentence that would be a family
            person, father of a beautiful daughter, a sports fanatic, photography
            enthusiast, and tech-obsessed!!!
          </p>
        </div>
  
        <div className="stage-cube-cont">
          <div className="cubesbiner">
            <div className="face1">
              <FontAwesomeIcon icon={faHtml5} color="#f6529" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faReact} color="#f629" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faSass} color="#ecfd28" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faSass} color="#ecfd28" />
            </div>
          </div>
        </div>
      </div>
  
    <Loader type = "pacman"  />

</>
  )
}

export default About
