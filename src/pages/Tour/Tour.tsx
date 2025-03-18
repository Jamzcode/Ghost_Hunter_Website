import ImageCard from "../../components/Image/Image";
import Headline from "../../components/Headline/Headline";
import Button from "../../components/Button/Button";


export default function Tour() {
  return (
    <>
      <div className="background">
        <Headline headline="Ghost Hunting, Paranormal investigations, Haunted Walkthroughs" />
        {/* gallery of images */}
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
        <Button to="../contact" label="Book Me Now"/>
      </div>
    </>
  );
}
