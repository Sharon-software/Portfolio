import React from 'react'
import videoFile from '../videos/videoFile.mp4'

const About = () => {
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
    </div>

    </div>
  )
}

export default About
