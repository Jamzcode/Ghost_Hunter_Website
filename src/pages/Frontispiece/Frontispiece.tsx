import Hero from "../Hero/Hero";
import MissionFrontispiece from "../Mission/MissionFrontispiece";
import styles from "./Frontispiece.module.css"
// import Button from "../../components/Button/Button";
import TourFrontispiece from "../Tour/TourFrontispiece";
import ShopFrontispiece from "../Shop/ShopFrontispiece";
import ContactFrontispiece from "../Contact/ContactFrontispiece";

export default function Frontispiece() {
  return (
    <>
      <div className={`background ${styles.layout}`}>
        <div>
          <Hero />
        </div>
        <div>
          <MissionFrontispiece />
        </div>

        <div>
          <TourFrontispiece />
        </div>
        <div>
          <ShopFrontispiece />
        </div>
        <div>
          <ContactFrontispiece />
        </div>
      </div>
    </>
  );
}
