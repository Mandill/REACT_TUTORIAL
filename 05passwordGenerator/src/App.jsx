// import { useState,useCallback } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(5)
//   const [numberAllowed, setNumberAllowed] = useState(false)
//   const [charAllowed, setCharAllowed] = useState(false)
//   const [password, setPassword] = useState("")


//   const passwordGenerator = useCallback(()=>
//   {
//     let pass=""
//     let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
//     if(numberAllowed) str += "0123456789"
//     if(charAllowed) str += "~!@#$%^&*()_+=-"
    
//     for (let i = 1; i <= array.length; i++) {
//       let char =Math.floor(Math.random() * str.length + 1);
//       pass = str.charAt(char)
//     }
//     setPassword(pass)
//   },[count,numberAllowed,charAllowed,setPassword])
//   return (
//     <>
//       <div className='w-full max-w-'>Password Generator</div>
//     </>
//   )
// }

// export default App

import { useState,useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length,setLength] = useState(8)
  const [numberAllowed,setNumberAllowed] = useState(true)
  const [charAllowed,setCharAllowed] = useState(false)
  const [password,setPassword] = useState("")

  //ref hook
  const passwordref = useRef(null)
  
  const passwordGenerator = useCallback(() =>
  {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "1234567890"
    if(charAllowed) str += "~!@#$%^&*()_+=-"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
    
  },[length,numberAllowed,charAllowed,setPassword])

  const copyPasswordtoClipboard = useCallback(()=>
  {
    // passwordref.current?.select();
    // passwordref.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{passwordGenerator()},[length,numberAllowed,charAllowed,passwordGenerator])
  return (
    <>
    <div className='w-full h-auto max-w-md mx-auto rounded-lg px-4 my-8 text-orange-500 bg-gray-300 text-center'>
      <h1 className='text-blue-500 text-center'> Password Generator </h1>
      <div className='flex shadow rounded-lg pb-3 overflow-hidden mb-5'>
        <input type='text' value={password} placeholder="Password" className='outline-none w-full py-1 px-3 ' readOnly ref={password}/>
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPasswordtoClipboard}>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
          type='range'
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}
          />
          <label>Length:{length}</label>

          <div className='flex items-center gap-x-1'>
          <input
          type='checkbox'
          defaultChecked = {numberAllowed}
          className='cursor-pointer'
          onChange={()=>{setNumberAllowed((prev)=>!prev)}}
          />
          </div>
          <label>Number</label>

          <div className='flex items-center gap-x-1'>
          <input
          type='checkbox'
          defaultChecked = {charAllowed}
          className='cursor-pointer'
          onChange={()=>{setCharAllowed((prev)=>!prev)}}
          />
          </div>
          <label>Character</label>

        </div>
      </div>
    </div>
    </>
  )
}

export default App
