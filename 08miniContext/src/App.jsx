import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './component/Login'
import Profile from './component/Profile'

function App() {

  return (
    <>
      <UserContextProvider>
      <Login/>
      <Profile/>
      </UserContextProvider>
    </>
  )
}

export default App
