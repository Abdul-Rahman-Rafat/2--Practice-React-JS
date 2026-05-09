import { createContext, useState } from "react";
import MyToastSnackBar from "../src/MyToastSnackBar";

// ToastContext variable creates shared storage for the toast display function.
export const ToastContext = createContext({});

export const ToastProvider = ({ children }) => {
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
      {/* ToastContext.Provider element shares the ShowHideToast function with all child components that consume this context. */}
      <ToastContext.Provider value={{ ShowHideToast }}>
        {/* MyToastSnackBar element displays temporary feedback messages. */}
        <MyToastSnackBar message={toastMessage} open={open} onClose={onClose} />

        {children}
      </ToastContext.Provider>
    </>
  );
};
