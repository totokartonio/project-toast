import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function handleOnCheck(event) {
  const newVariant = event.target.value;
  console.log(newVariant);
  setToastVariant(newVariant);
}

function ToastPlayground() {
  [toastVariant, setToastVariant] = React.useState("");
  [messageText, setMessageText] = React.useState("");

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

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
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <textarea
                id="message"
                className={styles.messageInput}
                value={messageText}
                onChange={(event) => setMessageText(event.target.value)}
              />
            </form>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <form id="variant-input" onSubmit={(event) => event.preventDefault()}>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {VARIANT_OPTIONS.map((variant) => (
                <label
                  htmlFor={`variant-${variant}`}
                  key={`variant-${variant}`}
                >
                  <input
                    id={`variant-${variant}`}
                    type="radio"
                    name={variant}
                    value={variant}
                    checked={toastVariant === variant}
                    onChange={handleOnCheck}
                  />
                  {variant}
                </label>
              ))}
            </div>
          </form>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
