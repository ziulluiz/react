import React from 'react'
import {useState} from 'react'
import "../style-sheet/Form.css";
import { v4 as uuidv4 } from 'uuid';

export default function Form(props) {

  const [input, setInput] = useState('')

  const handleChange = e => {
    setInput(e.target.value);
    // console.log(e.target.value)
  }

  const handleText = e => {
    e.preventDefault();
    // console.log('enviando')
    const newTask = {
      id: uuidv4(),
      text: input,
      done: false
    }
    props.onSubmit(newTask);
    console.log(newTask)
  }

  return (

    <form
        className='task-form' action=""
        onSubmit={handleText}>

      <input
        className='task-input'
        type='text'
        placeholder='Task'
        name='text'
        onChange={handleChange}
      />
      <button className='btn-task'>
        add task
      </button>
    </form>
  )
}
