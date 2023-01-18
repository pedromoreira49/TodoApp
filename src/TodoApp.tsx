import { useRef, useState } from 'react'
import './App.css'
import TodoList from './TodoList'

function TodoApp() {

  const task = useRef() as React.MutableRefObject<HTMLInputElement>

  const [tasks, setNewTask] = useState<string[]>([])

  function addTask(){
    setNewTask([...tasks, task.current.value])
  }

  return (
    <div>
      <form onSubmit={(e) => {e.preventDefault(); addTask()}}>
        <input
          type="text"
          ref={task}
        />
        <button type='submit'>Add Task</button>
      </form>
      <TodoList tasks={tasks}/>
    </div>
  )
}

export default TodoApp
