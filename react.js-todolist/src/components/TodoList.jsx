import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList() {
    let todos=[
        "Go to the Gym",
        "Text Ahad Raza Mir",
        "Eat more fruits and vege"


    ]
  return (
    <ul className='main'>
        {todos.map((todo,todoIndex)=>{
            return(
                <TodoCard key={todoIndex}>
                    <p>{todo}</p>
                </TodoCard>
            )
    })}
    </ul>
  )
}
