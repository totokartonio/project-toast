import React from "react";

import Toast from "../Toast";
import { ToastsContext } from "../ToastsProvider";
import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const { toasts } = React.use(ToastsContext);
  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast id={toast.id} variant={toast.variant}>
            {toast.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
