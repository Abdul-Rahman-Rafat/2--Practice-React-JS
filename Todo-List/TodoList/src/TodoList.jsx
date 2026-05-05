import { useState } from "react";
import { TodoListContext } from "../contexts/TodoListContext";
import { useContext } from "react";

import TodoComponent from "./TodoComponent";
import "./TodoList.css";
export default function TodoList() {
  const { todos, setTodos } = useContext(TodoListContext);
  const [todoItem, setTodoItem] = useState("");
  const [filter, setFilter] = useState("all");
  function addTodo() {
    const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
    // if (todoItem.trim() === "") return;
    const newTodo = {
      id: newId,
      text: todoItem,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setTodoItem("");
  }
  function filterAll() {
    setFilter("all");
  }
  function filterCompleted() {
    setFilter("completed");
  }
  function filterUncompleted() {
    setFilter("uncompleted");
  }
  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "uncompleted") return !todo.completed;
    return true; // all
  });
  return (
    <>
      <div className="todo-list">
        <h1>my todo list</h1>
        <nav>
          <ul className="nav-links">
            <li>
              <button
                className={filter === "all" ? "active" : ""}
                onClick={filterAll}
              >
                All Todos{" "}
              </button>
            </li>
            <li>
              <button
                className={filter === "completed" ? "active" : ""}
                onClick={filterCompleted}
              >
                Completed Todos
              </button>
            </li>
            <li>
              <button
                className={filter === "uncompleted" ? "active" : ""}
                onClick={filterUncompleted}
              >
                Uncompleted Todos
              </button>
            </li>
          </ul>
        </nav>
        {filteredTodos.map((todo) => (
          <TodoComponent key={todo.id} todo={todo} />
        ))}
      </div>
      <div className="add-todo-form">
        <input
          type="text"
          value={todoItem}
          onChange={(e) => setTodoItem(e.target.value)}
          placeholder="Add a new todo..."
        />
        <button className="add-btn" onClick={addTodo}>
          Add Todo
        </button>
      </div>
    </>
  );
}
