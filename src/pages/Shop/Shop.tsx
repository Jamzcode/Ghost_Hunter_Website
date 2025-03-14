import ImageCard from "../../components/Image/Image";
import Headline from "../../components/Headline/Headline";
import Button from "../../components/Button/Button";
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
        <div>
          <Button label="Visit Shop"/>
        </div>
      </div>
    </>
  );
}
