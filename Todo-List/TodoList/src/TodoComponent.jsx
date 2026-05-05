import "./TodoComponent.css";
export default function TodoComponent({ todo, onCompleted, onDelete, onEdit }) {
  return (
    <div className="todo-item">
      <div className="actions">
        <button
          className={todo.completed === true ? "completed" : "not_completed"}
          onClick={() => onCompleted(todo.id)}
        >
          ✓
        </button>
        <button onClick={() => onEdit(todo.id)}> ✏️</button>

        <button onClick={() => onDelete(todo.id)}>❌</button>
      </div>
      <span className="TodoTitle">{todo.text}</span>
    </div>
  );
}
