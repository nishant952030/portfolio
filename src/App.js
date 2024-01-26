import React from "react";
import Navbar from "./components/navbar/Navbar";
import "./index.css";
import "../src/css/style.css"
import Intro from "./components/mainPAge/Intro";
function App() {
  return (
    <div className="App">
      <div>
        <Navbar/>
      </div>
      <Intro/>
    </div>
  );
}
export default App;
