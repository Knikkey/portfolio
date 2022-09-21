import styles from "./ConfirmationModal.module.css";

export default function ConfirmationModal({
  setSeeContactForm,
  setShowConfirm,
  sendFailed,
}) {
  const closeHandler = () => {
    setSeeContactForm(false);
    setShowConfirm(false);
  };

  return (
    <>
      {!sendFailed ? (
        <div className={styles["confirmation-modal"]}>
          <h3>Thank you for reaching out!</h3>
          <p className={styles.text}>
            Your email has been sent. Please allow 1-2 business days for a
            reply.
          </p>
          <button className={styles.btn} onClick={closeHandler}>
            Got it
          </button>
        </div>
      ) : (
        <div className={styles["confirmation-modal"]}>
          <h3>Oh no! An error occured.</h3>
          <p className={styles.text}>{sendFailed}</p>
          <button className={styles.btn} onClick={closeHandler}>
            Got it
          </button>
        </div>
      )}
    </>
  );
}