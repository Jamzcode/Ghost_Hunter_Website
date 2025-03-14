import ImageCard from "../../components/Image/Image";
import Headline from "../../components/Headline/Headline";
export default function Tour() {
  return (
    <>
      <div className="section">
        <Headline headline="Ghost Hunting, Paranormal investigations, Haunted Walkthroughs" />

        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        {/* MAKE: Client booking page:
        -Add “Book me now” button and enable client to book appointment
        on calendar in which will link to phone colander. After appointment is
        booked, Client to receive confirmation message and service provider to
        receive appointment confirmed message on phone. */}
        <button>Book Me Now</button>
      </div>
    </>
  );
}
