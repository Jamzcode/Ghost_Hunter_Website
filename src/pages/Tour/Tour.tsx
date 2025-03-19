// import ImageCard from "../../components/Image/Image";
import styles from "./Tour.module.css";

import Headline from "../../components/Headline/Headline";
import Button from "../../components/Button/Button";

export default function Tour() {
  return (
    <>
      <div className="background">
        <div className={styles.headerContainer}>
          <Headline headline="Ghost Hunting, Paranormal investigations, Haunted Walkthroughs" />
        </div>

        <div className={styles.imageContainer}>
          <img className={styles.image} />
          <img className={styles.image} />
        </div>

        <div className={styles.descriptionContainer}>
          <div className={styles.description}>
            We Do tours and things like that! They are super spooky and we go to
            graveyards and haunted areas around town, etc. If you are looking
            for someone to look at scary things but also want to be scared
            looking at scary things with me, contact us and we will set up a
            time to be scared together. We offer, walking scary, talking scary,
            nighttime scary, and we also can do investigating at certain places
            as well its really all up to you. Tours are for more than 2 people
            and are set by appointment. Extra cost if you want me in my armor
            and stuff, okay cool, bye.
          </div>
        </div>
        {/* MAKE: Client booking page:
        -Add “Book me now” button and enable client to book appointment
        on calendar in which will link to phone colander. After appointment is
        booked, Client to receive confirmation message and service provider to
        receive appointment confirmed message on phone. */}
        <div className={styles.buttonContainer}>
          <Button to="../contact" label="Book Me Now" />
        </div>
      </div>
    </>
  );
}
