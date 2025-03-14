import ImageCard from "../../components/Image/Image";
export default function Tour() {
  return (
    <>
       <div className="section">
        <h2>SECTION 10</h2>
        This is Tourpage
        <h3>Ghost Hunting, Paranormal investigations, Haunted Walkthroughs</h3>
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
