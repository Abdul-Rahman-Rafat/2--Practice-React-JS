import { useState, useContext, useEffect, useMemo } from "react";
import { TodoListContext } from "../contexts/TodoListContext";
import { ToastContext } from "../contexts/ToastContext";

import TodoComponent from "./TodoComponent";
import "./TodoList.css";
export default function TodoList() {
  const { todos, setTodos } = useContext(TodoListContext);
  // const { showToast } = useContext(ToastContext);
  const [todoItem, setTodoItem] = useState("");
  const [filter, setFilter] = useState("all");
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [todoToDelete, setTodoToDelete] = useState(null);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [todoToEdit, setTodoToEdit] = useState(null);

  const { ShowHideToast } = useContext(ToastContext);

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos")) || []);
  }, [setTodos]); // This effect runs once to load the saved todos from localStorage.
  // //It will run after the component renders and the 'todos' state has been updated.

  // if we make the dependency array empty [] the effect will run only once when the component mounts and it will not run again when the 'todos' state changes.
  //useEffect(() => {
  //   console.log("todos updated:", todos);
  // }, []);

  //addTodo function
  function addTodo() {
    const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
    if (todoItem.trim() === "") {
      return;
    }
    const newTodo = {
      id: newId,
      text: todoItem,
      details: "",
      completed: false,
    };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    ShowHideToast("Todo added successfully");
    setTodoItem("");
  }

  //delete dialog functions
  function openDeleteDialog(todoId) {
    setTodoToDelete(todoId);
    setDeleteDialogOpen(true);
  }
  function CloseDelete() {
    setDeleteDialogOpen(false);
    setTodoToDelete(null);
  }
  function ConfirmDelete() {
    if (todoToDelete !== null) {
      const updatedTodos = todos.filter((todo) => todo.id !== todoToDelete);
      setTodos(updatedTodos);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      ShowHideToast("Todo deleted successfully");
      setDeleteDialogOpen(false);
      setTodoToDelete(null);
    }
  }
  //edit dialog functions
  function openEditDialog(todoId) {
    const todo = todos.find((t) => t.id === todoId);
    if (todo) {
      setTodoToEdit(todo);
      setEditDialogOpen(true);
    }
  }
  function closeEditDialog() {
    setEditDialogOpen(false);
    setTodoToEdit(null);
  }
  function ConfirmEdit() {
    if (todoToEdit) {
      if (todoToEdit.text.trim() === "") {
        // ShowHideToast("Todo title cannot be empty");
        return;
      } else {
        const updatedTodos = todos.map((todo) =>
          todo.id === todoToEdit.id
            ? { ...todo, text: todoToEdit.text, details: todoToEdit.details }
            : todo,
        );
        setTodos(updatedTodos);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
        ShowHideToast("Todo updated successfully");
        setEditDialogOpen(false);
        setTodoToEdit(null);
      }
    }
  }

  //filter functions

  // every time we write a character in the input field the component re-renders and the filteredTodos called tons of times
  //  but since the filtering operation is not expensive it does not cause any performance issues.
  // If we had a large list of todos and the filtering operation was more complex, we could consider using useMemo to memoize the filteredTodos value
  //  and avoid unnecessary recalculations on every render. However, in this case, since the filtering is straightforward and efficient,
  //  we can keep it as is without any performance concerns.
  function filterAll() {
    setFilter("all");
  }
  function filterCompleted() {
    setFilter("completed");
  }
  function filterUncompleted() {
    setFilter("uncompleted");
  }

  // //without useMemo
  // const filteredTodos = todos.filter((todo) => {
  //   if (filter === "completed") {
  //     console.log("filtering completed todos");
  //     return todo.completed;
  //   }
  //   if (filter === "uncompleted") {
  //     console.log("filtering uncompleted todos");
  //     return !todo.completed;
  //   }
  //   console.log("filtering all todos");
  //   return true; // all
  // });

  // // with useMemo
  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      if (filter === "completed") {
        console.log("filtering completed todos");
        return todo.completed;
      }
      if (filter === "uncompleted") {
        console.log("filtering uncompleted todos");
        return !todo.completed;
      }
      console.log("filtering all todos");
      return true; // all
    });
  }, [todos, filter]);

  return (
    <>
      <div
        className="DeleteDialog"
        style={{ display: deleteDialogOpen ? "block" : "none" }}
      >
        <h2>هل أنت متأكد أنك تريد حذف هذه المهمة؟</h2>
        <button onClick={ConfirmDelete} className="confirm-btn">
          نعم
        </button>
        <button onClick={CloseDelete} className="cancel-btn">
          لا
        </button>
      </div>
      <div
        className="editDialog"
        style={{ display: editDialogOpen ? "block" : "none" }}
      >
        <h2>هل أنت متأكد أنك تريد تعديل هذه المهمة؟</h2>
        <label htmlFor="Title">Title:</label>
        <input
          id="Title"
          type="text"
          value={todoToEdit?.text || ""}
          onChange={(e) =>
            setTodoToEdit({ ...todoToEdit, text: e.target.value })
          }
        />
        <br />
        <label htmlFor="Details">Details:</label>
        <input
          id="Details"
          type="text"
          value={todoToEdit?.details || ""}
          onChange={(e) =>
            setTodoToEdit({ ...todoToEdit, details: e.target.value })
          }
        />
        <br />
        <button onClick={ConfirmEdit} className="confirm-btn">
          نعم
        </button>
        <button onClick={closeEditDialog} className="cancel-btn">
          لا
        </button>
      </div>

      <div>
        <h1 className="headerName"> مهامي</h1>

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
        <div className="todo-list">
          {filteredTodos.map((todo) => (
            <TodoComponent
              key={todo.id}
              todo={todo}
              showDeleteDialog={openDeleteDialog}
              showEditDialog={openEditDialog}
            />
          ))}
        </div>
      </div>
      <div className="add-todo-form">
        <input
          type="text"
          value={todoItem}
          onChange={(e) => setTodoItem(e.target.value)}
          placeholder="Add a new todo..."
        />
        <button
          className={`add-btn ${todoItem.trim() ? "active_add-btn" : ""}`}
          onClick={addTodo}
        >
          Add Todo
        </button>
      </div>
    </>
  );
}
