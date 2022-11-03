import React from 'react'
import '../style-sheet/Task.css';
import { AiOutlineCloseCircle } from 'react-icons/ai'

export default function Task({text, done}) {
  return (
    <div className={done ? 'task-container done' : 'task-container' }>
      <div className='task-text'>
        {text}
      </div>
      <div className='icon'>
        <AiOutlineCloseCircle className='icon' />
      </div>
    </div>
  )
}
