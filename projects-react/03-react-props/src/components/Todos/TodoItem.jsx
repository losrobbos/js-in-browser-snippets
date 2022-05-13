import './Todos.css'

export const TodoItem = ({ todo, deleteTodo }) => {
  
  return (
    <div className="todo-item">
      <span>{todo.title} { todo.status } </span>
      <button onClick={() => deleteTodo(todo._id)}>X</button>
    </div>
  )
}
