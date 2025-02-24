import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";

import Toast from "../Toast/Toast";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function dismissToast() {
  setToastShown(false);
}

function ToastPlayground() {
  [toastVariant, setToastVariant] = React.useState("");
  [message, setMessage] = React.useState("");
  [toastShown, setToastShown] = React.useState(false);

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {toastShown && (
        <Toast variant={toastVariant} dismissToast={dismissToast}>
          {message}
        </Toast>
      )}

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>

          <div className={styles.inputWrapper}>
            <form
              id="message-input"
              onSubmit={(event) => event.preventDefault()}
            >
              <textarea
                id="message"
                className={styles.messageInput}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
            </form>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <form id="variant-input" onSubmit={(event) => event.preventDefault()}>
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
          </form>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button onClick={() => setToastShown(true)}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
