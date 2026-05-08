import "./TodoComponent.css";
import { useContext } from "react";
import { TodoListContext } from "../contexts/TodoListContext";
import { ToastContext } from "../contexts/ToastContext";
export default function TodoComponent({
  todo,
  showDeleteDialog,
  showEditDialog,
}) {
  const { todos, setTodos } = useContext(TodoListContext);
  const { ShowHideToast } = useContext(ToastContext);

  function onCompleted(id) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    ShowHideToast("Todo status updated");
  }
  return (
    <div className="todo-item">
      <div className="actions">
        <button
          className={todo.completed === true ? "completed" : ""}
          onClick={() => onCompleted(todo.id)}
        >
          ✓
        </button>
        <button onClick={() => showEditDialog(todo.id)}> ✏️</button>

        <button onClick={() => showDeleteDialog(todo.id)}>❌</button>
      </div>
      <div className="title-details">
        <span
          className={`TodoTitle ${todo.completed === true ? "completedTask" : ""}`}
        >
          {todo.text}
        </span>
        <p className="TodoDetails">{todo.details}</p>
      </div>
    </div>
  );
}
