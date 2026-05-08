import "./TodoComponent.css";
import { useContext } from "react";
import { TodoListContext } from "../contexts/TodoListContext";
import { ToastContext } from "../contexts/ToastContext";
// TodoComponent function displays one todo item with complete, edit, and delete actions.
export default function TodoComponent({
  todo,
  showDeleteDialog,
  showEditDialog,
}) {
  // todos and setTodos variables come from context to update the shared todo list.
  const { todos, setTodos } = useContext(TodoListContext);
  // ShowHideToast variable receives the shared toast function from ToastContext.
  const { ShowHideToast } = useContext(ToastContext);
  // onCompleted function toggles the completed status of the selected todo.
  function onCompleted(id) {
    // updatedTodos variable stores the list after changing one todo completion value.
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
    // div element wraps one todo item.
    <div className="todo-item">
      {/* div element groups the action buttons for this todo. */}
      <div className="actions">
        {/* button element toggles the todo completed status. */}
        <button
          className={todo.completed === true ? "completed" : ""}
          onClick={() => onCompleted(todo.id)}
        >
          ✓
        </button>
        <button onClick={() => showEditDialog(todo.id)}> ✏️</button>
        <button onClick={() => showDeleteDialog(todo.id)}>❌</button>
      </div>
      {/* div element groups the todo title and details text. */}
      <div className="title-details">
        {/* span element displays the todo title. */}
        <span
          className={`TodoTitle ${todo.completed === true ? "completedTask" : ""}`}
        >
          {todo.text}
        </span>
        {/* p element displays the todo details. */}
        <p className="TodoDetails">{todo.details}</p>
      </div>
    </div>
  );
}
