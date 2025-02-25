export const ToastsContext = React.createContext();

import React from "react";
import { useEscapeKey } from "../../hooks/use-escape-key";

function ToastProvider({ children }) {
  [toasts, setToasts] = React.useState([]);

  const handleEscape = React.useCallback(() => {
    setToasts([]);
  }, []);

  useEscapeKey(handleEscape);

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
