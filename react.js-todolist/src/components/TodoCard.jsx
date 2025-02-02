import React from 'react'

export default function TodoCard(props) {
   const {children}=props
    return (
    <li className='todoItem'>
        {children}
        <div className='actionsContainer'></div>
        <i className="fa-solid fa-pen-to-square"></i>
        <i class="fa-solid fa-trash"></i>
    </li>
  )

}
