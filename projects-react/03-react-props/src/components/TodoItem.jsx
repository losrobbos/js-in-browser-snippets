export const TodoItem = ({ todo, deleteTodo }) => {
  
  return (
    <div>
      <span>{todo.title}</span>
      <button onClick={() => deleteTodo(todo._id)}>X</button>
    </div>
  )
}
