import { TodoItem } from "./TodoItem"

// destructure just the props we NEED in this component
export const TodoList = ({ todos, addTodo, deleteTodo }) => {

  /**
   * Map: Converts usually DATA to HTML
   * [1,2,3] => map => <div key=1 >1</div><div key=2>2</div><div key=3>3</div>
   */

  // map => for each todo DATA object => render a Todo COMPONENT
  const jsxTodos = todos.map((todo) => (
    <TodoItem key={todo._id} todo={todo} deleteTodo={deleteTodo} />
  ))

  return (
    <div className="todo-list" style={{ border: "1px solid #ccc" }}>
      <h2>Todo List will come here...</h2>
      { jsxTodos }
      <button onClick={addTodo}>Add Todo</button>
    </div>
  )

}

