import React from "react";
import Navbar from "./components/navbar/Navbar";
import "./index.css";
import "../src/css/style.css"
import Intro from "./components/mainPAge/Intro";
import Project from "./components/projects/Project";
function App() {
  return (
    <div className="App">
      <div>
        <Navbar/>
      </div>
      <Intro />
      <Project/>
    </div>
  );
}
export default App;
