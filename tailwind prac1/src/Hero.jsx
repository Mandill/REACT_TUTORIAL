import React from 'react'
import lebron from "/src/assets/lebron.png"
import gym from "/src/assets/gym"

const Hero = () => {
  return (
    <div class="w-full ">
        <img class="w-full h-screen" src={lebron} alt="" srcset=""></img>
        <img src={gym} alt="" srcset=""></img>
    </div>
  )
}

export default Hero