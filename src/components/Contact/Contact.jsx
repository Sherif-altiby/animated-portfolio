import { useEffect, useState, useRef } from "react"
import AnimatedLetters from "../AnimatedLetters"
import "./Contact.scss"
import Loader from "react-loaders"
import emailjs from "@emailjs/browser"

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate")

  useEffect(() => {
    return () => setTimeout(() => setLetterClass("text-animate-hover"), 4000)
  }, [])

  const formRef = useRef()

  const formHandler = (e) => {
    e.preventDefault()

    emailjs
      .sendForm("gmail", "YOUR_TEMPLATE_ID", formRef.current, "YOUR_PUBLIC_KEY")
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
              letterClass={letterClass}
              idx={15}
            />
          </h1>
          <p>
            I’m very ambitious front-end developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <div className="contact-form">
            <form ref={formRef} onSubmit={formHandler}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea name="message" placeholder="Message"></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-btn" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>

        <div className="info-map">
          Sherif Altiby
          <br />
          Egypt
          <br />
          Frontend developer
          <br />
          <span> Sherifahmed852002@gmail.com </span>
        </div>
        <div className="map-wrap">
          <MapContainer
            center={[30, 31]}
            zoom={5}
          >
            <TileLayer
          
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[30, 31]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
