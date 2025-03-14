import ImageCard from "../../components/Image/Image";
import Headline from "../../components/Headline/Headline";
export default function Mission() {
  return (
    <>
      <div className="section">
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
        <ImageCard />
        <ImageCard />
        <ImageCard />
      </div>
    </>
  );
}
