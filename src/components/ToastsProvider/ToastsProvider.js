export const ToastsContext = React.createContext();

import React from "react";

function ToastProvider({ children }) {
  [toasts, setToasts] = React.useState([]);

  function createToast(message, variant) {
    const nextToasts = [
      ...toasts,
      { id: crypto.randomUUID(), message, variant },
    ];

    setToasts(nextToasts);
  }

  function dismissToast(id) {
    const nextToasts = toasts.filter((toast) => {
      return toast.id !== id;
    });

    setToasts(nextToasts);
  }

  return (
    <ToastsContext value={{ toasts, createToast, dismissToast }}>
      {children}
    </ToastsContext>
  );
}

export default ToastProvider;
