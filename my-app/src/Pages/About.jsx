import React from 'react'
import videoFile from '../videos/videoFile.mp4'

const About = () => {
  const style = {
    color: "#d36307",
    font: "16px Arial, sans-serif",
    fontWeight: "bold",
    fontSize: "18px",
  };
  return (
    <div className="AboutMe">
    <video
        className="video-bg"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoFile} type="video/mp4" />
      </video>
      <div className="overlay" />

    <div className='Content'>
      <h1>About Me</h1> 
      <p>
        I am a passionate and driven software developer with 2 years of hands-on industry <br/>
        experience and a solid academic foundation in IT Software Development 
        from <span style={style}>Tshwane University of Technology.</span><br/>

        I am currently enrolled at <span style={style}>CAPACITI</span> covering Cloud Computing,<br/>
        Software Development, and Artificial Intelligence.
        My learning journey is further supported by short course certificates
        in<br/> 
        Full Stack Development from  <span style={style}>FNB Academy and IT Varsity,</span>  <br/>
        AI Foundations certificate from <span style={style}>Oracle.</span><br/>
        AI For everyone certificate from <span style={style}>Coursera.</span> 
        These experiences have equipped me with a well-rounded,<br/>
        modern skill set that spans front-end and back-end development
        cloud technologies, and emerging AI concepts.<br/>
        I am eager to apply my knowledge and growing expertise to build innovative,
        real-world solutions that make a meaningful impact.<br/>
      </p>
    </div>

    </div>
  )
}

export default About
