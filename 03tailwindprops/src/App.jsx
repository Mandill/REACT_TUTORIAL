import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)
 
  let myobj ={
    name:"Mandil",
    age:10
  }
  return (
    <>
        <Card username="Mandil" post='CEO'/>
        <Card />
        <Card/>
    </>
  )
}

export default App
