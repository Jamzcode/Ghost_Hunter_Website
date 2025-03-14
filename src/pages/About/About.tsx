import ImageCard from "../../components/Image";
import styles from "./About.module.css";

export default function About() {
  return (
    <>
      <div className={styles.section}>
        <h2>SECTION 1</h2>
        {/* Title */}
        <div>Welcome to the world of Midknightscares!</div>
        {/* Add pic */}
        <div>pic</div>
        <ImageCard />
        {/* Add Video */}
        <div>video</div>
        <ImageCard />
        <button>GetStarted</button>
      </div>

      <div className={styles.section}>
        <h2>SECTION 2</h2>
        <h3>Mission Statment:</h3>
        <div>To find out what really goes bump in the night!</div>
        <div>
          Midknightscares’ mission is to go out and find what really goes bump
          in the night! From Cemeteries to cursed lands and houses where only
          the brave dare venture! The Midknight Knight will bravely go in search
          of the things that keep you up at night!
        </div>
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
      </div>

      <div className={styles.section}>
        <h2>SECTION 3</h2>
        <h3>Midknightscares vs the spooky things</h3>
        {/* -Add spot for 10 picture photo gallery(Rotational) */}
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
      </div>

      <div className={styles.section}>
        <h2>SECTION 4</h2>
        <h3>Available for ghost adventures and paranormal investigations</h3>
        {/* -Add spot for 6 picture photo gallery (Rotational) */}
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <button>Book now</button>
      </div>

      <div className={styles.section}>
        <h2>SECTION 5</h2>
        <h3>Midknightscare merchandise</h3>
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <button>Buy Now</button>
      </div>

      <div className={styles.section}>
        <h2>SECTION 6</h2>
        <h3>Midknightscare donation and suggestion box</h3>
        {/* Will lead to Venmo, Patreon, etc payment portal.  */}
        <button>Enchant Me Now</button>
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
      </div>
      <div className={styles.section}>
        <h2>SECTION 7</h2>
        <h3>Contact me for more Midknightscares</h3>
        <ImageCard />
        -Add spot for 1 paragraph +Paragraph to read,{" "}
        <p>
          “Let’s go on an adventure together and see what spooky stuff we can
          get ourselves into! Midknightscare is available for all paranormal
          events near you!
        </p>
        <div>210 000 0000</div>
        <div>Email: myEmail@gmail.com</div>
        -Add spot for hours of
        <div>
          <h3>Hours of Operation</h3>
          <div>EveryDay Always AllTheTime</div>
          <div>EveryDay Always AllTheTime</div>
          <div>EveryDay Always AllTheTime</div>
          <div>EveryDay Always AllTheTime</div>
          <div>EveryDay Always AllTheTime</div>
          <div>EveryDay Always AllTheTime</div>
          <div>EveryDay Always AllTheTime</div>
        </div>
        {/* Leads to contact page */}
        <button>Get In Touch</button>
      </div>

      <div className={styles.section}>
        <h2>SECTION 8</h2>
        -Add title spot for title name (
        <h3>
          Midknightscares are available for next paranormal adventure! Follow,
          Like, Subscribe and Share!{" "}
        </h3>
        <div>
          <h3>Links</h3>
          <div>FaceBook</div>
          <div>Instagram</div>
          <div>TikTok</div>
          <div>YouTube</div>
        </div>
        {/* -Add spot for Facebook link (Add clickable Icon)(https://www.facebook.com/profile.php?id=61573794903044) 
        -Add spot for Instagram link (https://www.instagram.com/midknightscares?igsh=MTlqbHZxa2Jxd3FwcA%3D%3D&utm_source=qr)
        -Add spot for TikTok link (https://www.tiktok.com/@midknightscares?_t=ZP-8uPGPMelD9q&_r=1) -Add
        spot for YouTube link (https://youtube.com/@midknightscare?si=D0HHzEHpm1rlCBLl) */}
      </div>
      <div className={styles.section}>
        <h2>SECTION 9</h2>

        <h3>Join our mailing/SMS texting list</h3>

        <div>
          <h3>Form</h3>
          <div>Name</div>
          <div>Email</div>
        </div>
        <button>Sign Up</button>
      </div>
      <div className={styles.section}>
        <h2>SECTION 10</h2>
        -Add title spot for title name (
        <h3>Ghost Hunting, Paranormal investigations, Haunted Walkthroughs</h3>)
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        {/* -Add “Book me now” button and enable client to book appointment
        on calendar in which will link to phone colander. After appointment is
        booked, Client to receive confirmation message and service provider to
        receive appointment confirmed message on phone. */}
        <button>Book Me Now</button>
      </div>
    </>
  );
}
