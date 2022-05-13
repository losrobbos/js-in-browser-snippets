import { useState } from "react"

const TodoNew = ({ addTodo }) => {
  
  // STATE (=> LOCAL State)
  const [title, setTitle] = useState("")
  const [status, setStatus] = useState("OPEN")

  // EVENT HANDLERS

  // triggered when we TYPE in input field
  const onTitleChange = (e) => {
    
    // e.target => the changed DOM element => input field

    // update the TITLE state with what the user typed
    setTitle(e.target.value) // update STATE
  }

  // triggered when we select some entry in dropdown
  const onStatusChange = (e) => {
    setStatus(e.target.value)
  }

  // 1. sammelt INPUTs
  // 2. constructed NEUES Object
  // 3. calls addTodo from App.js to ADD new object to ARRAY
  const submitTodo = () => {

    // 1. check INPUTs (= validation)
    if (!title) {
      return alert("EY! Title vergessen, du Sau!")
    } // do not add EMPTY title

    // 2. construct new TODO object
    const todoNew = { _id: Math.random().toString(), title, status }

    console.log( todoNew )

    // 3. upate state (=> add todo to array of todos)
    addTodo(todoNew)
  }

  // JSX LAYOUT
  return (
    <div className="form-todo-new">
      <input type="text" value={title} onChange={onTitleChange} />
      <select value={status} onChange={ onStatusChange }>
        <option value="OPEN">Open</option>
        <option value="DONE">Done</option>
      </select>
      <button onClick={submitTodo}>Add Todo</button>

    </div>
  )
}

export default TodoNew
