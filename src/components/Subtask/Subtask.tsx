import React from 'react'


const Subtask = ({isComplete, title}: Subtask) => {
  return (
    <li className={`flex w-full ${isComplete ? "line-through" : ""}`}>
        <span className='text-xl'>{title}</span>
    </li>
  )
}

export default Subtask