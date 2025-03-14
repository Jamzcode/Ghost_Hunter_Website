import ImageCard from "../../components/Image/Image";
import Headline from "../../components/Headline/Headline";

export default function Shop() {
  return (
    <>
      <div className="section">
        {/* MAKE: Shop page for merchandise */}
        <Headline headline="Midknightscare merchandise" />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <button>Buy Now</button>
      </div>
    </>
  );
}
