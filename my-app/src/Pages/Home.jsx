import React, { useState, useEffect } from "react";
import "../Pages/index.css";

const roles = [
  { text: "a Software Developer", color: "var(--color-green)" },
  { text: "a UI Designer", color: "var(--color-orange)" },
  { text: "a Problem Solver", color: "var(--color-pink)" },
  { text: "a Creative Thinker", color: "var(--color-blue)" },
  { text: "a Tech Enthusiast", color: "var(--color-purple)" },
  { text: "all of that.", color: "var(--color-white)" },
];
const TYPE_SPEED = 60;
const ERASE_SPEED = 35;
const PAUSE_AFTER_TYPE = 1800;
const PAUSE_AFTER_ERASE = 300;

const Home = () => {
  
const [currentText, setCurrentText] = useState('');
const [roleIndex, setRoleIndex] = useState(0);
const [isErasing, setIsErasing] = useState(false);

  useEffect(() => {
    const handleTypeEffect = async () => {
      const role = roles[roleIndex];
      if (!isErasing) {
        // Typing effect
        for (let i = 0; i < role.text.length; i++) {
          setCurrentText((prev) => prev + role.text[i]);
          await new Promise(resolve => setTimeout(resolve, TYPE_SPEED));
        }
        await new Promise(resolve => setTimeout(resolve, PAUSE_AFTER_TYPE));
        setIsErasing(true);
      } else {
        // Erasing effect
        for (let i = role.text.length; i >= 0; i--) {
          setCurrentText(role.text.slice(0, i));
          await new Promise(resolve => setTimeout(resolve, ERASE_SPEED));
        }
        await new Promise(resolve => setTimeout(resolve, PAUSE_AFTER_ERASE));
        setIsErasing(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

     handleTypeEffect();
  }, [currentText, roleIndex, isErasing]);
  return (
    <>
      <h1>Mathebula Tiyisela Sharon</h1>
   
    <div className="typewriter-container">
      <span className="role-text" style={{ color: roles[roleIndex].color }}>
        {currentText}
      </span>
    </div>

    </>
  )
}

export default Home