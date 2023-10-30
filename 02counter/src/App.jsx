import { useState } from 'react'
import './App.css'

function App() {

  const [counter,setCounter]= useState(0)
 // let counter = 15

  const addValue = ()=>
  {
    setCounter(counter + 1)
  }
  const decValue = ()=>
  {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>React course with Mandil{counter}</h1>
      <h2>Counter Value:{counter}</h2>
      <button onClick={addValue}>Add Value</button>{" "}
      <button onClick={decValue}>Decrease Value</button>
      <p>Footer:{counter}</p>
    </>
  )
}

export default App
