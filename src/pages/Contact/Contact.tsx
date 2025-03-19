import styles from "./Contact.module.css";

// import ImageCard from "../../components/Image/Image";
import Headline from "../../components/Headline/Headline";
// import Button from "../../components/Button/Button";
export default function Contact() {
  return (
    <>
      <div className={`background ${styles.layout}`}>
        <div className={styles.leftSection}>
          <div className={styles.imageContainer}>
            <img className={styles.image} />
          </div>
          <div className={styles.headerContainer}>
            <Headline headline="Consider getting in touch?" />
          </div>
          <div className={styles.descriptionContainer}>
            <div className={styles.description}>
              “Let’s go on an adventure together and see what spooky stuff we
              can get ourselves into! Midknightscare is available for all
              paranormal events near you!
            </div>
          </div>
          <div className={styles.contactInformationContainer}>
            <div className={styles.contactInformation}>210 000 0000</div>
            <div className={styles.contactInformation}>
              Email: myEmail@gmail.com
            </div>
          </div>

          <div className={styles.hoursContainer}>
            <h3>Hours of Operation</h3>
            <div>EveryDay Always AllTheTime</div>
            <div>EveryDay Always AllTheTime</div>
            <div>EveryDay Always AllTheTime</div>
            <div>EveryDay Always AllTheTime</div>
            <div>EveryDay Always AllTheTime</div>
            <div>EveryDay Always AllTheTime</div>
            <div>EveryDay Always AllTheTime</div>
          </div>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.rightHeader}>
            Midknightscares are available for next paranormal adventure! Follow,
            Like, Subscribe and Share!
          </div>
          <div className="section">
            This is Contactpage FORM
            {/* MAKE: SignUp popup page for user to enter information for newsletter. */}
            <Headline headline="Join our mailing/SMS texting list" />
            <div className={styles.form}>
              <>
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  className={styles.formContainer}
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <div>
                    <label>
                      <div className={styles.input}>
                        Your Name: <input type="text" name="name" />
                      </div>
                    </label>
                  </div>
                  <div>
                    <label>
                      <div className={styles.input}>
                        Your Email: <input type="email" name="email" />
                      </div>
                    </label>
                  </div>

                  <div>
                    <label>
                      <div className={styles.messageBox}>
                        Message: <textarea name="message"></textarea>
                      </div>
                    </label>
                  </div>
                  <div className={styles.btnContainer}>
                    <button type="submit">Submit Info</button>
                  </div>
                </form>
              </>

              {/* <h3>Form</h3>
              <div>Name</div>
              <div>Email</div>
              <div className={styles.buttonContainer}>
                <Button label="Submit" />
              </div> */}
            </div>
          </div>
        </div>
        {/* TODO: Leads to contact page */}
      </div>
    </>
  );
}
