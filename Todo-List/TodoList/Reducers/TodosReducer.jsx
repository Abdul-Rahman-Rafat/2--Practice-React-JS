// export default function TodosReducer(currentTodos, { type, payload }) {
export default function TodosReducer(currentTodos, action) {
  switch (action.type) {
    case "LOAD_TODOS": {
      const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
      return savedTodos;
    }

    case "ADD_TODO": {
      // newId variable calculates the id for the next todo item.
      const newId =
        currentTodos.length > 0
          ? currentTodos[currentTodos.length - 1].id + 1
          : 1;

      // newTodo variable stores the todo object that will be added.
      const newTodo = {
        id: newId,
        text: action.payload.titleItem,
        details: "",
        completed: false,
      };
      // updatedTodos variable stores the list after adding the new todo.
      const updatedTodos = [...currentTodos, newTodo];
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    }
    case "DELETE_TODO": {
      const updatedTodos = currentTodos.filter(
        (todo) => todo.id !== action.payload.id,
      );
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    }
    case "EDIT_TODO": {
      const updatedTodos = currentTodos.map((todo) =>
        todo.id === action.payload.id
          ? {
              ...todo,
              text: action.payload.newText,
              details: action.payload.newDetails,
            }
          : todo,
      );
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    }
    case "Compeleted": {
      const updatedTodos = currentTodos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo,
      );
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    }

    default:
      return console.error("unknown action type");
  }
}
