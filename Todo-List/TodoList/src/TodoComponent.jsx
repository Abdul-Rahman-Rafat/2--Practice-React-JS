import "./TodoComponent.css";
import { useContext } from "react";
import { TodoListContext } from "../contexts/TodoListContext";
import { useState } from "react";
export default function TodoComponent({ todo }) {
  const { todos, setTodos } = useContext(TodoListContext);

  function onCompleted(id) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  }
  function onEdit(id) {
    // console.log("edit", id);
    const updatedTodo = todos.find((todo) => todo.id === id);
    const newText = prompt("Edit todo:", updatedTodo.text);
    if (newText !== null) {
      const updatedTodos = todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, text: newText };
        }
        return todo;
      });
      setTodos(updatedTodos);
    }
  }
  function onDelete(id) {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
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
        <button onClick={() => onEdit(todo.id)}> ✏️</button>

        <button onClick={() => onDelete(todo.id)}>❌</button>
      </div>
      <span className="TodoTitle">{todo.text}</span>
    </div>
  );
}
