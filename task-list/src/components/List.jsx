import React, { useState } from 'react'
import Form  from "./Form";
import Task  from "./Task";
import '../style-sheet/List.css'


export default function List() {

  const [tasks, setTask] = useState([])

  const addTask = task => {
    console.log(task);
    if (task.text.trim()) {
      task.text = task.text.trim();
      const updatedTasks = [task, ...tasks]
      setTask(updatedTasks);
    }
  }

  const deleteTask = id => {
    const updatedTasks = tasks.filter(task => task.id !== id)
    setTask(updatedTasks)
  }

  return (
    <>
      <Form onSubmit={addTask} />
      <div className='list-container'>
        {
          tasks.map((task) =>
            <Task
              key={task.id}
              id={task.id}
              text={task.text}
              done={task.done}
              deleteTask={deleteTask}
            />
          )
        }
      </div>
    </>
  )
}
