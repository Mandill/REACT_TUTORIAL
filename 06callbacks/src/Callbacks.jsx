import React, { useCallback } from 'react'
import Todos from "./Todos"
import { useState } from 'react'

const Callbacks = () => {
    const [state,setState] = useState(0)
    const [todo,setTodo] = useState([])
    
    const addTodo = useCallback(()=>
    {
      setTodo((prev) => [...prev,'new Entry'])
    },[todo])

    // const addTodo=()=>
    // {
    //   setTodo((prev) => [...prev,'new Entry'])
    // }
    const increment = ()=>
    {
      setState((prev)=>prev+1)
    }
  return (
    <>
      <Todos todos={todo} addtodos={addTodo}/>
      <div>
      <button onClick={increment}>+</button>
      Count : {state}
      </div>
    </>
  )
}

export default Callbacks