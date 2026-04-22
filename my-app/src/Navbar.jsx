import { useState, useEffect,useRef } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import './index.css';

const Navbar = () => {

  const navigate=useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const btnRef = useRef(null);

   useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isOpen &&
        navRef.current &&
        !navRef.current.contains(e.target) &&
        btnRef.current &&
        !btnRef.current.contains(e.target)
      ) {
        setIsOpen(false)
      }
    }
     document.addEventListener("click", handleClickOutside)
    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [isOpen])


  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return(
  <section>
   <div id="menu">
    <div
      ref={btnRef}
      className={`menu-btn ${isOpen ? "open" : ""}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>

   
     <div ref={navRef} className={`navigation ${isOpen ? "show" : ""}`}>

      <ul>
        <li>
        <NavLink to="/" onClick={handleLinkClick} >
          
            <span className="text">Home</span>
        </NavLink>
         </li>
         
         <li>
        <NavLink to="/about" onClick={handleLinkClick}>
            
            <span className="text">About </span>
        </NavLink>
        </li>
         
         <li>
        <NavLink to="/projects" onClick={handleLinkClick}>
          
            
            <span className="text">Projects</span>
        </NavLink>
        </li>
       
        <li>
        <NavLink to="/skills" onClick={handleLinkClick}>
            
            <span className="text">Skills</span>
        </NavLink>
        </li>

        <li>
        <NavLink to="/contact" onClick={handleLinkClick}>
            
            <span className="text">Contact</span>
        </NavLink>
        </li>
      </ul>
 
      </div>
      </div>
 
  </section>
  
  )
}

export default Navbar