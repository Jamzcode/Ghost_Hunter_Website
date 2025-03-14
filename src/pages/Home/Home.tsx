import ImageCard from "../../components/Image/Image";
import Headline from "../../components/Headline/Headline";
import Button from "../../components/Button/Button";

export default function Home() {
  return (
    <>
      {/* MAKE: Video component */}
      {/* MAKE: SocialMedia component */}
      {/* MAKE: ImageCarousel component */}

      <div className="section">
        {/* Title */}
        <Headline headline="Welcome to the world of Midknightscares!" />
        {/* TODO: Add pic */}
        <ImageCard />
        {/* TODO: Add Video */}
        <div>video</div>
        <ImageCard />
        {/* TODO: Button goes to Mission Statement page */}
        <Button label="Get Started" to="./mission">
        </Button>
      </div>
    </>
  );
}
