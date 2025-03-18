import Button from "../../components/Button/Button";
import styles from "../Tour/TourFrontispiece.module.css";

export default function TourFrontispiece() {
  return (
    <>
      <div className={styles.frontispieceContainer}>
        <div className={styles.textButtonContainer}>
          <div className={styles.textContainer}>
            knightmarescare is available for tours now!
          </div>
          <div className={styles.buttonContainer}>
            <Button label="Book a Tour" to="../tour"/>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <img className={styles.image} />
        </div>
      </div>
    </>
  );
}
