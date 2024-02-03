import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import "./index.css";
import "../src/css/style.css"
import Intro from "./components/mainPAge/Intro";
import Project from "./components/projects/Project";
import '@fortawesome/fontawesome-free/css/all.css';
import run1 from "./running/running1.png"
import run2 from "./running/running2.png"
import run3 from "./running/running3.png"
import run4 from "./running/running4.png"
import run5 from "./running/running5.png"
import run6 from "./running/running6.png"
import run7 from "./running/running7.png"
import run8 from "./running/running8.png"
import run9 from "./running/running9.png"
import run10 from "./running/running10.png"
import run11 from "./running/running11.png"
import run12 from "./running/running12.png"
function App() {
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });
  const sprites = [run1, run2, run3, run4, run5, run6, run7, run8, run9, run10, run11, run12]

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
  useEffect(() => {
    let x = 0;
    let leftPosition = 10;
    var shadowX=0
    const runner = (imageNumber, leftPosition,direction,shadowX) => {
      const img = document.createElement('img');
      if (direction === 1) {
        img.className = 'image mirror';
      } else {
        img.className = 'image';
      }
      img.style.top = '10px';
      img.style.width = '30px'
      img.style.left = `${leftPosition}px`;
      img.style.filter = `drop-shadow(${shadowX}px -3px #8bf7ce27)`;
      img.setAttribute('src', sprites[imageNumber - 1]);
      document.body.appendChild(img);
      setTimeout(() => {
        document.body.removeChild(img)
      }, 50)
    };
    var direction = 0;
    const intervalId = setInterval(() => {
      var numbers = [1, 2, 3, 4, 5, 6, 7];
      runner(numbers[x], leftPosition, direction,shadowX);
      console.log(window.innerWidth, leftPosition + 90, direction)
      if (leftPosition + 90 <= Math.round(window.innerWidth / 10) * 10 && direction === 0) {
        if (leftPosition + 90 === Math.round(window.innerWidth / 10) * 10) {
          direction = 1;
        }
        else {
           shadowX+=.05
          x += 1;
          leftPosition += 5;
          if (x === 6) {
            x = 0;
          }
        }
      }
      else {
        if (leftPosition === 0) {
          direction = 0
        }
        else {
          shadowX-=0.05
          x += 1;
          leftPosition -= 5;
          if (x === 6) {
            x = 0;
          }
        }
      }
    }, 50);
    return () => clearInterval(intervalId);
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
