import ImageCard from "../components/Image/Image";

export default function Gallery() {
  return (
    <>
      <div className="section">
        This is Gallerypage
        <h2>SECTION 3</h2>
        <h3>Midknightscares vs the spooky things</h3>
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
      </div>
    </>
  );
}
