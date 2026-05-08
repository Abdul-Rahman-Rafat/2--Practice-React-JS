import "./MyToastSnackBar.css";
import { useState } from "react";
export default function MyToastSnackBar({ message, open, onClose }) {
  // open state is now passed as a prop from the parent component (App.jsx) instead of being managed locally within MyToastSnackBar. This allows the parent component to control when the toast snackbar is shown or hidden based on user interactions or other events in the application.

  // const [open, setOpen] = useState(true);

  return (
    <div className={`toast-snackbar ${open ? "show" : "hide"}`}>
      <span>{message}</span>

      <button onClick={onClose} className="close-btn">
        X
      </button>
    </div>
  );
}
