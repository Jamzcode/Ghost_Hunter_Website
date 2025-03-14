import ImageCard from "../../components/Image/Image";
import Headline from "../../components/Headline/Headline";
import Button from "../../components/Button/Button";
export default function Gallery() {
  return (
    <>
      <div className="section">
        <Headline headline="Midknightscares vs the spooky things" />
        {/* TODO: Add spot for 10 picture photo gallery(Rotational) */}
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
        <div>
          <Button to="../shop" label="Visit Shop" />
        </div>
      </div>
    </>
  );
}
