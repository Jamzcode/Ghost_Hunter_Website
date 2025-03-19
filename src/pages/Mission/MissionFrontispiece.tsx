import styles from "../Mission/MissionFrontispiece.module.css";

import Button from "../../components/Button/Button";

export default function MissionFrontispiece() {
  return (
    <>
      <div className={styles.frontispieceContainer
      }>
        
        <div className={styles.imageContainer}>
          <img className={styles.image} />
        </div>

        <div className={styles.textButtonContainer}>
          <div className={styles.textContainer}>
            Midknightscares’ mission is to go out and find what really goes bump
            in the night! From Cemeteries to cursed lands and houses where only
            the brave dare venture! The Midknight Knight will bravely go in
            search of the things that keep you up at night!
          </div>

          <div className={styles.buttonContainer}>
            <Button label="Visit Gallery" to="../gallery"/>
          </div>
        </div>
      </div>
    </>
  );
}
