import React, { useState, useEffect, useRef } from "react";
import "../index.css";
import image1 from "../Pictures/image1.jpeg"
import image2 from  "../Pictures/image2.jpeg"
import image3 from "../Pictures/image3.jpeg"

const roles = [
  { text: "A Software Developer", color: "green" },
  { text: "A FrontEnd Developer", color: "yellow" },
  { text: "A Backend Developer", color: "pink" },
  { text: "A UI Designer", color: "orange" },
  { text: "A Tech Enthusiast", color: "blue" },
  { text: "ALL OF THAT.", color: "purple",},
];

const TYPE_SPEED = 60;
const ERASE_SPEED = 35;
const PAUSE_AFTER_TYPE = 1800;
const PAUSE_AFTER_ERASE = 300;

const Home = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentColor, setCurrentColor] = useState(roles[0].color);
  const roleIndexRef = useRef(0);

  useEffect(() => {
    let cancelled = false;

    const handleTypeEffect = async () => {
      while (!cancelled) {
        const role = roles[roleIndexRef.current];
        setCurrentColor(role.color);

        // Typing
        for (let i = 0; i <= role.text.length; i++) {
          if (cancelled) return;
          setCurrentText(role.text.slice(0, i));
          await new Promise((resolve) => setTimeout(resolve, TYPE_SPEED));
        }

        await new Promise((resolve) => setTimeout(resolve, PAUSE_AFTER_TYPE));

        // Erasing
        for (let i = role.text.length; i >= 0; i--) {
          if (cancelled) return;
          setCurrentText(role.text.slice(0, i));
          await new Promise((resolve) => setTimeout(resolve, ERASE_SPEED));
        }

        await new Promise((resolve) => setTimeout(resolve, PAUSE_AFTER_ERASE));

        roleIndexRef.current = (roleIndexRef.current + 1) % roles.length;
      }
    };

    handleTypeEffect();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      <h1>Mathebula Tiyisela Sharon</h1>
      <div className="typewriter-container">
        <span className="role-text" style={{ color: currentColor }}>
          {currentText}
        </span>
      </div>

      <div className="Pictures">
       <div className="pulse-ring"></div>
       <div className="pulse-ring"></div>
       <div className="pulse-ring"></div>
       <div className="border-outer"></div>
       <div className="border-middle"></div>
       <div className="border-inner"></div>
       <div className="border-container"></div>
        <img src={image2} alt="Profile 1" />
      </div>
    </>
  );
};

export default Home;