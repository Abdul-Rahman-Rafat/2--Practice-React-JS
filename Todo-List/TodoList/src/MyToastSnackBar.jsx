import "./MyToastSnackBar.css";
import { useState } from "react";
// MyToastSnackBar function displays a toast message with a close button.
export default function MyToastSnackBar({ message, open, onClose }) {
  // open state is now passed as a prop from the parent component (App.jsx) instead of being managed locally within MyToastSnackBar.
  //  This allows the parent component to control when the toast snackbar is shown or hidden based on user interactions or other events in the application.

  // const [open, setOpen] = useState(true);

  return (
    // div element wraps the snackbar and changes class based on open state.
    <div className={`toast-snackbar ${open ? "show" : "hide"}`}>
      {/* span element displays the toast message text. */}
      <span>{message}</span>

      {/* button element closes the toast snackbar. */}
      <button onClick={onClose} className="close-btn">
        X
      </button>
    </div>
  );
}
