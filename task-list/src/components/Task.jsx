import React from 'react'
import "../style-sheet/Task.css";

export default function Task({text}) {
  return (
    <div className='task-container'>
      <div className='task-text'>
        {text}
      </div>
      <div className='icon'>
        delete
      </div>
    </div>
  )
}
