import styles from "./Gallery.module.css";

// import ImageCard from "../../components/Image/Image";
import Headline from "../../components/Headline/Headline";
import Button from "../../components/Button/Button";
export default function Gallery() {
  return (
    <>
      <div className="background">
        <div className={styles.header}>
          <Headline headline="Midknightscares vs the spooky things" />
        </div>

        {/* TODO: Add spot for 10 picture photo gallery(Rotational) */}

        <div className={styles.imageSection}>
          <div className={styles.headerContainer}>
            <Headline headline="In The Dark" />
          </div>
          <div className={styles.imageContainer}>
            <img className={styles.image} />
            <img className={styles.image} />
            <img className={styles.image} />
          </div>
          <div className={styles.headerContainer}>
            <Headline headline="On the Field" />
          </div>
          <div className={styles.imageContainer}>
            <img className={styles.image} />
            <img className={styles.image} />
            <img className={styles.image} />
          </div>
          <div className={styles.headerContainer}>
            <Headline headline="COMMUNITY" />
          </div>
          <div className={styles.imageContainer}>
            <img className={styles.image} />
            <img className={styles.image} />
            <img className={styles.image} />
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <Button to="../shop" label="Visit Shop" />
        </div>
      </div>
    </>
  );
}
