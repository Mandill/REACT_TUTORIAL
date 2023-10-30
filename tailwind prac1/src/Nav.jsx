import React from 'react'

const Nav = () => {
  return (
    <>
        <nav class="w-full h-14 bg-slate-400 flex justify-between px-4 items-center md:px-6">
            <div class="text-2xl text-indigo-700 font-bold"> LOGO </div>
            <ul class="md:flex font-semibold hidden">
                <li class="mx-4 cursor-pointer">HOME</li>
                <li class="mx-4 cursor-pointer">ABOUT US</li>
                <li class="mx-4 cursor-pointer">CONTACT US</li>
            </ul>
            <div class="md:block hidden px-2 py-2 bg-indigo-700 text-white rounded-lg shadow-lg font-semibold cursor-pointer">LOGIN/SIGNUP</div>
            <div class="md:hidden text-5xl font-semibold mb-3"><a href="#">&#8801;</a></div>
        </nav>
    </>
  )
} 

export default Nav