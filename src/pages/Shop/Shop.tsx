import styles from "./Shop.module.css";

// import ImageCard from "../../components/Image/Image";
import Headline from "../../components/Headline/Headline";
import Button from "../../components/Button/Button";
export default function Shop() {
  return (
    <>
      <div className="background">
        {/* MAKE: Shop page for merchandise */}
        <div className={styles.headerContainer}>
          <Headline headline="Midknightscare merchandise" />
        </div>

        <div className={styles.imageContainer}>
          <img className={styles.image} />
          <img className={styles.image} />
          <img className={styles.image} />
        </div>

        <div className={styles.buttonContainer}>
          <Button label="Visit Shop" />
        </div>
      </div>
    </>
  );
}
