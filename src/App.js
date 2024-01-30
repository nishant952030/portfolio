import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import "./index.css";
import "../src/css/style.css"
import Intro from "./components/mainPAge/Intro";
import Project from "./components/projects/Project";
import '@fortawesome/fontawesome-free/css/all.css';
function App() {
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e) => {
      setDotPosition({ x: e.clientX, y: e.clientY });
      const dot = document.createElement('div');
      dot.className = `fa fa-star fa-star1 color${Math.floor(Math.random() * 5) + 1}`;
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
      document.body.appendChild(dot);
      setTimeout(() => {
        document.body.removeChild(dot);
      }, 300);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return (
    <div className="App">
      <div>
        <Navbar/>
      </div>
      <Intro />
      <Project />
      <div className="fa fa-star absolute fa-star2 z-40 text-[#9EC8B9]" style={{ left: dotPosition.x, top: dotPosition.y }}></div>
    </div>
  );
}
export default App;
