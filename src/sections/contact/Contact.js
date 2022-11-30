import { useRef, useState } from "react";
import emailjs from "emailjs-com";

import styles from "./Contact.module.css";
import ConfirmationModal from "./ConfirmationModal";

export default function Contact() {
  const [isPending, setIsPending] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [sendFailed, setSendFailed] = useState(false);

  const form = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    setIsPending(true);
    setSendFailed(null);

    emailjs
      .sendForm(
        "portfolio_inquieres",
        "portfolio_template",
        form.current,
        "luyzdEdGWr0UK3k0x"
      )
      .then(
        (result) => {
          e.target.reset();

          setShowConfirm(true);
          setIsPending(false);
        },
        (error) => {
          console.log(error.text);
          setSendFailed(error.text);
          setIsPending(false);
        }
      );
  };

  const closeHandler = () => {
    setShowConfirm(false);
  };

  return (
    <div className={`${styles["form-container"]} fadeIn`}>
      <h1 className="page-header">Contact me</h1>

      <form
        onSubmit={submitHandler}
        className={`text ${styles.form}`}
        ref={form}
      >
        <div className="flex-col">
          <label htmlFor="name">Name:</label>
          <input
            required
            type="text"
            id="name"
            className={`text ${styles.input}`}
            name="name"
          ></input>
        </div>

        <div className="flex-col">
          <label htmlFor="email">Email address:</label>
          <input
            required
            type="email"
            id="email"
            className={`text ${styles.input}`}
            name="email"
          ></input>
        </div>

        <div className={`flex-col ${styles["two-col"]}`}>
          <label htmlFor="subject">Subject:</label>
          <input
            required
            type="text"
            id="subject"
            className={`text ${styles.input}`}
            name="subject"
          ></input>
        </div>

        <div className={`flex-col ${styles["two-col"]}`}>
          <label htmlFor="message">Message:</label>
          <textarea
            required
            id="message"
            className={`text ${styles.input}`}
            name="message"
          ></textarea>
        </div>

        <button disabled={isPending} className={styles.btn}>
          {isPending ? "Loading..." : "Send"}
        </button>
      </form>
      {showConfirm && (
        <ConfirmationModal
          sendFailed={sendFailed}
          closeHandler={closeHandler}
        />
      )}
    </div>
  );
}
