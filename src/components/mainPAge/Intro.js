import React from 'react'
import "./intro.css"
import { Bot } from "lucide-react"
import Typewriter from 'typewriter-effect';
function Intro() {
  return (
    <div className='intro' id='home'>
      <div className='about mt-32'>
        <h4 className='mb-9'>Hey,</h4>
        <h1>I'm Nishant Sharma</h1>
        <p className='mt-5'>Front-End developer and UI/UX designer!</p>
        <p className='mt-2 text-[#5C8374] text-4xl font-extrabold'><Typewriter options={{
          strings: ["Let's work together"],
          autoStart: true,
          loop: true,
        }} ></Typewriter></p>
      </div>
      <div className='bot'>
        <Bot color="#5C8374" size={300} />
      </div>
      <div className='rectancle'></div>
      <div className='rectancle'></div>
      <div className='rectancle'></div>
      <div className='rectancle'></div>
      <div className='rectancle'></div>
      <div className='rectancle'></div>
      <div className='rectancle'></div>
      <div className='rectancle'></div>
      <div className='rectancle'></div>
      <div className='rectancle'></div>
      <div className='rectancle'></div>
      <div className='rectancle'></div>
      <div className='rectancle'></div>

    </div >
  )
}
export default Intro
