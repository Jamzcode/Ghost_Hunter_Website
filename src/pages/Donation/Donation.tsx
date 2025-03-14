import ImageCard from "../../components/Image/Image";
import Headline from "../../components/Headline/Headline";
export default function Donation() {
  return (
    <>
      <div className="section">
        <Headline headline="Midknightscare donation and suggestion box" />
        {/* TODO: lead to Venmo, Patreon, etc payment portal. Redirect notification page.  */}
        <button>Enchant Me Now</button>
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
