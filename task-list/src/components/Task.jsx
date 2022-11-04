import React from 'react'
import '../style-sheet/Task.css';
import { AiOutlineCloseCircle } from 'react-icons/ai'

export default function Task({text, done, id, doneTask, deleteTask}) {
  return (
    <div className={done ? 'task-container done' : 'task-container' }>
      <div
        className='task-text'
        onClick={() => doneTask(id)} >
        {text}
      </div>
      <div
        className='icon'
        onClick={() => deleteTask(id)}>
        <AiOutlineCloseCircle className='icon' />
      </div>
    </div>
  )
}
