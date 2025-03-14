import ImageCard from "../../components/Image/Image";
export default function Donation() {
  return (
    <>
      <div className="section">
        This is Donationpage
        <h2>SECTION 6</h2>
        <h3>Midknightscare donation and suggestion box</h3>
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
