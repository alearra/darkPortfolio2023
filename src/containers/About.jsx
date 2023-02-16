import React from 'react'
import "../assets/styles/About.css"
import myPicture from "../assets/static/transp.png"

export const About = () => {
  return (
    <section className="about-container">
      <div className="about-text">
        <h3>
          <b>ABOUT</b>
        </h3>
        <p>
          Project Manager and Full Stack Developer focused on Frontend. Based in
          Argentina, I develop frontend web applications and manage IT projects.
        </p>
        <br />
        <p>
          I am passionate about transforming ideas into successful projects,
          with the use of Agile methodologies, my experience in different
          sectors and my background in technologies and skills.
        </p>
        <br />
        <a href="#"><p className='more'>MORE</p></a>
      </div>
      <div className="about-img">
        <img src={myPicture} alt="profilePicture" />
      </div>
    </section>
  )
}
