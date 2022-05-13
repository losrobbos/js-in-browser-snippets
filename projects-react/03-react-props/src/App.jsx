import { useState } from "react"
import "./App.css"
import { TodoList } from "./components/TodoList"

function App() {
 
  // STATE
  const [todos, setTodos] = useState([
    { _id: "t1", title: "Do some props", status: false },
    { _id: "t2", title: "Talk about Olafs crazy hardcode Task", status: false }
  ])

  // DATA update functions (CRUD functions - Create, Read, Update, Delete)

    // C - CREATE
  const addTodo = () => {
    const titleNew = prompt("New todo please: ")
    if (!titleNew) return // do not add EMPTY title

    const todoNew = { _id: Math.random().toString(), title: titleNew }
    setTodos([...todos, todoNew]) // update state and DOM
  }

  // D - DELETE
  const deleteTodo = (idToDelete) => {

    // IMMUTABILITY pattern

    // create COPY of array somehow
    // filter does NOT touch the original => instead it gives us back a NEW independent array
    const todosKeep = todos.filter( todo => todo._id !== idToDelete ) 

    // OVERWRITE old state array with NEW array
    setTodos( todosKeep )

  }

  // JSX Layout
  return (
    <div className="App">
      <header className="App-header">
        <TodoList todos={todos} addTodo={addTodo} deleteTodo={deleteTodo} />
      </header>
    </div>
  )
}

export default App
