import { useState } from "react"


const TodoNew = ({ addTodo }) => {
  
  // STATE (=> LOCAL State)

  const [todoNew, setTodoNew] = useState({
    title: "",
    status: "OPEN"
  })
  console.log(todoNew)


  // EVENT HANDLERS

  // universal change handler
  const handleInputUpdate = (e) => {
    console.log(e.target.name, e.target.value)

    // evaluate changed input field by => e.target.name
    // update this FIELD in object using [] syntax
    setTodoNew({...todoNew, [e.target.name]: e.target.value  })
  }

 
  // 1. sammelt INPUTs
  // 2. constructed NEUES Object
  // 3. calls addTodo from App.js to ADD new object to ARRAY
  const submitTodo = () => {

    // 1. check INPUTs (= validation)
    if (!todoNew.title) {
      return alert("EY! Title vergessen, du Sau!")
    } // do not add EMPTY title

    // 2. construct new TODO object

    // we cannot UPDATE KEYS of STATE object !
    // so we just create a COPY again and ADD the ID Field
    const todoNewToCreate = { ...todoNew, _id: Math.random().toString() }

    // 3. upate state (=> add todo to array of todos)
    addTodo(todoNewToCreate)

    // todoNew.title = "" // now allowed to change original!
    setTodoNew({...todoNew, title: ""})
  }

  // JSX LAYOUT
  return (
    <div className="form-todo-new">
      <input
        name="title"
        type="text"
        value={todoNew.title}
        onChange={handleInputUpdate}
      />
      <select name="status" value={todoNew.status} onChange={handleInputUpdate}>
        <option value="OPEN">Open</option>
        <option value="DONE">Done</option>
      </select>
      <button onClick={submitTodo}>Add Todo</button>
    </div>
  )
}

export default TodoNew
