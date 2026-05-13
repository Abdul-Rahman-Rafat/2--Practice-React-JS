import { useState, useContext, useEffect, useMemo, useReducer } from "react";

import { TodoListContext } from "../contexts/TodoListContext";

import { ToastContext } from "../contexts/ToastContext";
// import TodosReducer from "../Reducers/TodosReducer";

import TodoComponent from "./TodoComponent";
import "./TodoList.css";
// TodoList function displays and controls the todo list page.
export default function TodoList() {
  // todos and dispatch variables come from context to update the shared todo list.
  const { todos, dispatch } = useContext(TodoListContext);

  // const { showToast } = useContext(ToastContext);
  // todoItem state stores the text typed in the add-todo input.
  const [todoItem, setTodoItem] = useState("");
  // filter state stores which todos should be shown: all, completed, or uncompleted.
  const [filter, setFilter] = useState("all");
  // deleteDialogOpen state controls whether the delete confirmation dialog is visible.
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  // todoToDelete state stores the id of the todo selected for deletion.
  const [todoToDelete, setTodoToDelete] = useState(null);
  // editDialogOpen state controls whether the edit dialog is visible.
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  // todoToEdit state stores the todo object currently being edited.
  const [todoToEdit, setTodoToEdit] = useState(null);

  // ShowHideToast variable receives the shared toast function from ToastContext.
  const { ShowHideToast } = useContext(ToastContext);

  // useEffect function loads saved todos from localStorage when the component mounts.
  useEffect(() => {
    dispatch({ type: "LOAD_TODOS" });
  }, []); // This effect runs once to load the saved todos from localStorage.
  // //It will run after the component renders and the 'todos' state has been updated.

  // if we make the dependency array empty [] the effect will run only once when the component mounts and it will not run again when the 'todos' state changes.
  //useEffect(() => {
  //   console.log("todos updated:", todos);
  // }, []);

  //addTodo function
  // addTodo function creates a new todo and saves the updated list.
  function addTodo() {
    dispatch({ type: "ADD_TODO", payload: { titleItem: todoItem } });
    ShowHideToast("Todo added successfully");
    setTodoItem("");
  }

  //delete dialog functions
  // openDeleteDialog function opens the delete dialog for the selected todo id.
  function openDeleteDialog(todoId) {
    setTodoToDelete(todoId);
    setDeleteDialogOpen(true);
  }
  // CloseDelete function closes the delete dialog and clears the selected todo id.
  function CloseDelete() {
    setDeleteDialogOpen(false);
    setTodoToDelete(null);
  }
  // ConfirmDelete function removes the selected todo after confirmation.
  function ConfirmDelete() {
    dispatch({ type: "DELETE_TODO", payload: { id: todoToDelete } });

    if (todoToDelete !== null) {
      ShowHideToast("Todo deleted successfully");
      setDeleteDialogOpen(false);
      setTodoToDelete(null);
    }
  }
  //edit dialog functions
  // openEditDialog function opens the edit dialog for the selected todo id.
  function openEditDialog(todoId) {
    // todo variable stores the todo object that matches the selected id.
    const todo = todos.find((t) => t.id === todoId);
    if (todo) {
      setTodoToEdit(todo);
      setEditDialogOpen(true);
    }
  }
  // closeEditDialog function closes the edit dialog and clears the selected todo.
  function closeEditDialog() {
    setEditDialogOpen(false);
    setTodoToEdit(null);
  }
  // ConfirmEdit function saves the edited todo values.
  function ConfirmEdit() {
    dispatch({
      type: "EDIT_TODO",
      payload: {
        id: todoToEdit.id,
        newText: todoToEdit.text,
        newDetails: todoToEdit.details,
      },
    });

    if (todoToEdit) {
      if (todoToEdit.text.trim() === "") {
        // ShowHideToast("Todo title cannot be empty");
        return;
      } else {
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
  // filterAll function shows every todo.
  function filterAll() {
    setFilter("all");
  }
  // filterCompleted function shows only completed todos.
  function filterCompleted() {
    setFilter("completed");
  }
  // filterUncompleted function shows only uncompleted todos.
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
  // filteredTodos variable stores the visible todos after applying the selected filter.
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
      {/* div element displays the delete confirmation dialog. */}
      <div
        className="DeleteDialog"
        style={{ display: deleteDialogOpen ? "block" : "none" }}
      >
        <h2>هل أنت متأكد أنك تريد حذف هذه المهمة؟</h2>
        {/* button element confirms the todo deletion. */}
        <button onClick={ConfirmDelete} className="confirm-btn">
          نعم
        </button>
        {/* button element cancels the todo deletion. */}
        <button onClick={CloseDelete} className="cancel-btn">
          لا
        </button>
      </div>
      {/* div element displays the edit todo dialog. */}
      <div
        className="editDialog"
        style={{ display: editDialogOpen ? "block" : "none" }}
      >
        <h2>هل أنت متأكد أنك تريد تعديل هذه المهمة؟</h2>
        {/* label element names the title input. */}
        <label htmlFor="Title">Title:</label>
        {/* input element edits the selected todo title. */}
        <input
          id="Title"
          type="text"
          value={todoToEdit?.text || ""}
          onChange={(e) =>
            setTodoToEdit({ ...todoToEdit, text: e.target.value })
          }
        />
        {/* br element moves the next edit field to a new line. */}
        <br />
        {/* label element names the details input. */}
        <label htmlFor="Details">Details:</label>
        {/* input element edits the selected todo details. */}
        <input
          id="Details"
          type="text"
          value={todoToEdit?.details || ""}
          onChange={(e) =>
            setTodoToEdit({ ...todoToEdit, details: e.target.value })
          }
        />
        {/* br element moves the edit action buttons to a new line. */}
        <br />
        {/* button element confirms and saves the todo edits. */}
        <button onClick={ConfirmEdit} className="confirm-btn">
          نعم
        </button>
        {/* button element cancels the todo edit dialog. */}
        <button onClick={closeEditDialog} className="cancel-btn">
          لا
        </button>
      </div>

      {/* div element wraps the main todo list section. */}
      <div>
        {/* h1 element displays the todo app title. */}
        <h1 className="headerName"> مهامي</h1>

        {/* nav element contains the todo filter controls. */}
        <nav>
          {/* ul element groups the filter buttons. */}
          <ul className="nav-links">
            {/* li element contains the all-todos filter button. */}
            <li>
              {/* button element activates the all-todos filter. */}
              <button
                className={filter === "all" ? "active" : ""}
                onClick={filterAll}
              >
                All Todos{" "}
              </button>
            </li>
            {/* li element contains the completed-todos filter button. */}
            <li>
              {/* button element activates the completed-todos filter. */}
              <button
                className={filter === "completed" ? "active" : ""}
                onClick={filterCompleted}
              >
                Completed Todos
              </button>
            </li>
            {/* li element contains the uncompleted-todos filter button. */}
            <li>
              {/* button element activates the uncompleted-todos filter. */}
              <button
                className={filter === "uncompleted" ? "active" : ""}
                onClick={filterUncompleted}
              >
                Uncompleted Todos
              </button>
            </li>
          </ul>
        </nav>
        {/* div element contains the rendered todo cards. */}
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
      {/* div element wraps the add-todo input and button. */}
      <div className="add-todo-form">
        {/* input element stores the new todo title as the user types. */}
        <input
          type="text"
          value={todoItem}
          onChange={(e) => setTodoItem(e.target.value)}
          placeholder="Add a new todo..."
        />
        {/* button element adds the typed todo to the list. */}
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
