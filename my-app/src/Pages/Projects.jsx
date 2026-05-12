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
          <p className="card-subtitle"> <span style={style}>An online Saloon booking website</span></p>

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

         <a href="https://github.com/Sharon-software/EverythingBeautyApp" >
        <button className='card-button'>Explore More</button>
        </a>

        </div>
      </div>
     </div>
     
      <div className="card2">
    <div className="front-page2">
      <div className="card-Info2">
        <h2 className="card-title2">AgriCircle</h2>
        <p className="card-subtitle2"> <span style={style}>A website connecting farmers and store owners </span></p>
      </div>
    </div>
    <div className='back-page2'>
      <div className='card-content2'>
        <h3>AGRICIRCLE</h3>

        <p className='card-description2'> <span style={style}>
          A website that connects farmers and store owners 
          where farmers can post their stock 
          and store owners can contact the farmer directly on the app.
          Farmers can also share farming skills on their profiles.
         </span>
        </p>

         <a href="https://github.com/Sharon-software/AGRICIRCLE" >
        <button className='card-button2'>Explore More</button>
        </a>
      </div>
    </div>
  </div>
    </div>
    </div>
  )
}

export default Projects
