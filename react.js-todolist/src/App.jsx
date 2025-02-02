import { useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  const[todos,setTodos]=useState([    
    "Go to the Gym",
    "Text Ahad Raza Mir",
    "Eat more fruits and vege"
  ])
  function handleAddTodos(newTodo){
    const newTodoList=[...todos,newTodo]
    setTodos(newTodoList)
  }

  return (
    <>
      <TodoInput/>
      <TodoList todos={todos}/>
      
    </>
  )
}

export default App
