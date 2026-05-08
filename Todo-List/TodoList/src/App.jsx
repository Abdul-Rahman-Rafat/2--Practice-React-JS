import { useState } from "react";
import "./App.css";
import TodoList from "./TodoList";
import { TodoListContext } from "../contexts/TodoListContext";
import { ToastContext } from "../contexts/ToastContext";
import MyToastSnackBar from "./MyToastSnackBar";
// App function is the root component for the todo app.
function App() {
  // todos state stores the full list of todo objects.
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Learn React",
      details: "Learn the basics of React",
      completed: false,
    },
    {
      id: 2,
      text: "Build a Todo App",
      details: "Create a simple todo app with React",
      completed: true,
    },
  ]);
  // open state controls whether the toast snackbar is visible.
  const [open, setOpen] = useState(false);
  // toastMessage state stores the message displayed inside the toast snackbar.
  const [toastMessage, setToastMessage] = useState("toast message");
  // ShowHideToast function shows a toast message, then hides it after 3 seconds.
  function ShowHideToast(message) {
    // console.log("ShowHideToast called");
    setToastMessage(message);
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  }
  // onClose function hides the toast when the user clicks the close button.
  function onClose() {
    // console.log("Toast closed");
    setOpen(false);
  }
  return (
    <>
      {/* MyToastSnackBar element displays temporary feedback messages. */}
      <MyToastSnackBar message={toastMessage} open={open} onClose={onClose} />
      {/* ToastContext.Provider element shares the toast function with child components. */}
      <ToastContext.Provider value={{ ShowHideToast }}>
        {/* TodoListContext.Provider element shares todos state and updater with child components. */}
        <TodoListContext.Provider value={{ todos, setTodos }}>
          {/* TodoList element renders the main todo user interface. */}
          <TodoList />
        </TodoListContext.Provider>
      </ToastContext.Provider>
    </>
  );
}
export default App;
