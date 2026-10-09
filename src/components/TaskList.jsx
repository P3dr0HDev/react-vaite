import React from 'react'

const TaskList = ({ tasks }) => {
  if (tasks.length === 0) {
    return <p>Sem tarefas para mostrar</p>
  }

  return (
    <ol>
      {tasks.map((task) => (
        <li key={task.id}>{task.text}</li>
      ))}
    </ol>
  )
}

const Exercises = () => {
  const tasks = [
    { id: 1, text: "Comprar coca" },
    { id: 2, text: "Estudar react" },
    { id: 3, text: "ina" }
  ]

  return (
    <div>
      <h2>Exercício:</h2>
      <TaskList tasks={tasks} />
    </div>
  )
}

export default Exercises