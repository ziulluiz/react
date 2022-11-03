import React from 'react'
import "../style-sheet/Form.css";

export default function Form() {
  return (

    <form className='task-form' action="">
      <input
        className='task-input'
        type='text'
        placeholder='Task'
        name='text'
      />
      <button className='btn-task'>
        add task
      </button>
    </form>
  )
}
