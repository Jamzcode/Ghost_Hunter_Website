import ImageCard from "../../components/Image/Image";
import Headline from "../../components/Headline/Headline";
export default function Contact() {
  return (
    <>
      <div className="section">
        <Headline headline="Contact me for more Midknightscares" />
        <ImageCard />
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
        <h2>SECTION 8</h2>
        <h3>
          Midknightscares are available for next paranormal adventure! Follow,
          Like, Subscribe and Share!
        </h3>
        <div className="section">
          This is Contactpage FORM
          <h2>SECTION 9</h2>
          {/* MAKE: SignUp popup page for user to enter information for newsletter. */}
          <h3>Join our mailing/SMS texting list</h3>
          <div>
            <h3>Form</h3>
            <div>Name</div>
            <div>Email</div>
            <button>Sign Up</button>
          </div>
        </div>
        {/* TODO: Leads to contact page */}
        <button>Get In Touch</button>
      </div>
    </>
  );
}
