import styles from "../Hero/Hero.module.css";

export default function Hero() {
  return (
    <>
      <div className={styles.heroContainer}>
        <div className={styles.titleImageWrapper}>
          <div className={styles.titleContainer}>
            <div className={styles.title}>Welcome to Midknightscares</div>
          </div>
          <div className={styles.imageContainer}>
            <img className={styles.image} />
          </div>
        </div>
      </div>
    </>
  );
}
