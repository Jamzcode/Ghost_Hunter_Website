import ImageCard from "../../components/Image/Image";
import Headline from "../../components/Headline/Headline";

import Button from "../../components/Button/Button";
export default function Donation() {
  return (
    <>
      <div className="section">
        <Headline headline="Midknightscare donation and suggestion box" />
        {/* TODO: lead to Venmo, Patreon, etc payment portal. Redirect notification page.  */}
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <div>
          <Button label="Fund My Journey" />
        </div>
      </div>
    </>
  );
}
