import ImageCard from "../../components/Image/Image";

export default function Home() {
  return (
    <>
      {/* MAKE: Video component */}
      {/* MAKE: SocialMedia component */}
      {/* MAKE: ImageCarousel component */}

      <div className="section">
        This is Homepage
        <h2>SECTION 1</h2>
        {/* Title */}
        <div>Welcome to the world of Midknightscares!</div>
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
