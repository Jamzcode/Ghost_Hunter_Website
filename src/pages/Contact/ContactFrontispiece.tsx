import Button from "../../components/Button/Button";
import styles from "./ContactFrontispiece.module.css";

export default function ContactFrontispiece() {
  return (
    <>
      <div className={styles.frontispieceContainer}>
        <div className={styles.imageWrapper}>
          <div className={styles.imageContainer}>
            <img className={styles.image} />
          </div>
          <div className={styles.imageContainer}>
            <img className={styles.image} />
          </div>
        </div>
        <div className={styles.text}>
          <div>CONSIDER GETTING IN TOUCH?</div>
        </div>
        <div className={styles.buttonContainer}>
          <Button label="Contact Us" to="../contact" />
        </div>
      </div>
    </>
  );
}
