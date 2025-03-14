import ImageCard from "../../components/Image/Image";
import Headline from "../../components/Headline/Headline";

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
        <div>pic</div>
        <ImageCard />
        {/* TODO: Add Video */}
        <div>video</div>
        <ImageCard />
        {/* TODO: Button goes to Mission Statement page */}
        <button>GetStarted</button>
      </div>
    </>
  );
}
