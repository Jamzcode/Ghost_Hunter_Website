import styles from "./Donation.module.css";
// import ImageCard from "../../components/Image/Image";
import Headline from "../../components/Headline/Headline";

import Button from "../../components/Button/Button";
export default function Donation() {
  return (
    <>
      <div className="background">
        <div className={styles.headerContainer}>
          <div className={styles.header}>
            <Headline headline="Midknightscare donation and suggestion box" />
          </div>
        </div>
        <div className={styles.descriptionContainer}>
          <div className={styles.description}>
            Knightmarescare would like to continue investigations and outreach.
            To do so, we need your help! consider donating to your favorite
            knight today and continuing our journey to figuring out what happens
            at night. any donations are greatly appreciated!
          </div>
        </div>

        {/* TODO: lead to Venmo, Patreon, etc payment portal. Redirect notification page.  */}
        <div className={styles.imageContainer}>
          <img className={styles.image} />
        </div>

        <div className={styles.buttonContainer}>
          <Button label="Venmo" />
          <Button label="Zelle" />
          <Button label="Paypal" />
        </div>
      </div>
    </>
  );
}
