import React from 'react'

const Projects = () => {
   const style = {
    color:"#c5bdc5",
    fontSize: "15px",
  };

  return (
    <div className="Projects">
      
      <h1>My Projects</h1>
      <p>Here are some of the projects I have worked on, showcasing my
         skills in building funtional user-friendly websites.
      </p>
    <div className='wrapper'>
    <div className="card">
      <div className="front-page">
        <div className="card-Info">
          <h2 className="card-title">Everything Beauty</h2>
          <p className="card-subtitle"> <span style={style}>An online Saloon booking App</span></p>

          </div>
          </div>
          
    
      <div className='back-page'>
        <div className='card-content'>
          <h3>Everything Beauty</h3>
          <p className='card-description'>All-in-one online beauty booking
             platform designed to connect clients with talented salon 
             professionals. Discover top beauty salons,  and book appointments with ease, 
             anytime and anywhere.
               </p>
          <button className='card-button'>Explore More</button>

        </div>
      </div>
     </div>
      <div className="card card2">
    <div className="front-page2">
      <div className="card-Info2">
        <h2 className="ard-title2">Your Second Project</h2>
        <p className="card-subtitle2">A short description</p>
      </div>
    </div>
    <div className='back-page2'>
      <div className='card-content2'>
        <h3>Your Second Project</h3>
        <p className='card-description2'>Description of your second project...</p>
        <button className='card-button2'>Explore More</button>
      </div>
    </div>
  </div>
    </div>
    </div>
  )
}

export default Projects
