import ImageCard from "../../components/Image/Image";
import Headline from "../../components/Headline/Headline";
import Button from "../../components/Button/Button";

export default function Mission() {
  return (
    <>
      <div className="background">
        <Headline headline="Mission Statment: To find out what really goes bump in the night!" />

        <div>
          Midknightscares’ mission is to go out and find what really goes bump
          in the night! From Cemeteries to cursed lands and houses where only
          the brave dare venture! The Midknight Knight will bravely go in search
          of the things that keep you up at night!
        </div>
        <ImageCard />
        <ImageCard />
        <ImageCard />
        {/* <ImageCard />
        <ImageCard />
        <ImageCard /> */}
        <div>
          <Button to="../gallery" label="Check out Gallery"/>
        </div>
      </div>
    </>
  );
}
