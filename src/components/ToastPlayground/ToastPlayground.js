import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";

import ToastShelf from "../ToastShelf/ToastShelf";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  [toastVariant, setToastVariant] = React.useState("");
  [message, setMessage] = React.useState("");
  [toasts, setToasts] = React.useState([]);

  function handleOnSubmit(event) {
    event.preventDefault();
    const newToast = {
      id: crypto.randomUUID(),
      message: message,
      variant: toastVariant,
    };

    const nextToasts = [...toasts, newToast];

    setToasts(nextToasts);
  }

  function dismissToast(id) {
    const nextToasts = toasts.filter((toast) => {
      return toast.id !== id;
    });

    setToasts(nextToasts);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {toasts.length > 0 && (
        <ToastShelf toasts={toasts} dismissToast={dismissToast} />
      )}

      <form className={styles.controlsWrapper} onSubmit={handleOnSubmit}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>

          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((option) => (
              <label htmlFor={`variant-${option}`} key={`variant-${option}`}>
                <input
                  id={`variant-${option}`}
                  type="radio"
                  name={option}
                  value={option}
                  checked={toastVariant === option}
                  onChange={(event) => setToastVariant(event.target.value)}
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
