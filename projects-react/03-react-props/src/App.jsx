import { useState } from "react"
import "./App.css"
import { TodoList } from "./components/Todos/TodoList"
import TodoNew from "./components/Todos/TodoNew"
import { UserList } from "./components/Users/UserList"

function App() {
 
  // STATE

    // LOGIN STATE
  const [ loggedIn, setLoggedIn ] = useState(false)

    // DATA ARRAYS
  const [todos, setTodos] = useState([
    { _id: "t1", title: "Do some props", status: "OPEN" },
    { _id: "t2", title: "Talk bout Olafs crazy Task", status: "DONE" }
  ])

  // DATA update functions (CRUD functions - Create, Read, Update, Delete)

    // C - CREATE
    const addTodo = ( todoNew ) => {
      setTodos([...todos, todoNew]) // merge existing todos with NEW todo
    }
  // const addTodo = () => {
  //   const titleNew = prompt("New todo please: ")
  //   if (!titleNew) return // do not add EMPTY title

  //   const todoNew = { _id: Math.random().toString(), title: titleNew }
  //   setTodos([...todos, todoNew]) // update state and DOM
  // }

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
        <nav>
          <button onClick={ () => setLoggedIn(!loggedIn) }>
            { loggedIn ? "Logout" : "Login" }
          </button>
        </nav>
        {
          // conditional rendering based on global LOGIN state
          loggedIn && (
            <>
            <TodoList todos={todos} deleteTodo={deleteTodo} />
            <TodoNew addTodo={addTodo} />
            {/* <UserList />
            <UserNew /> */}
            </>
          )

        }
      </header>
    </div>
  )
}

export default App
