import styles from "./ConfirmationModal.module.css";

export default function ConfirmationModal({ sendFailed, closeHandler }) {
  return (
    <div className={`flex-col ${styles["confirmation-modal"]}`}>
      <>
        <h1 className="page-header">
          {!sendFailed
            ? "Thank you for reaching out!"
            : "Oh no! An error occured."}
        </h1>
        <p className="text">
          {!sendFailed
            ? "Your email has been sent. Please allow 1-2 business days for a reply."
            : sendFailed}
        </p>
      </>
      <button className={`text ${styles.btn}`} onClick={closeHandler}>
        Got it
      </button>
    </div>
  );
}
