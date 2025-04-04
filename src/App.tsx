import "./index.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Tour from "./pages/Tour/Tour";
import Contact from "./pages/Contact/Contact";
import Gallery from "./pages/Gallery/Gallery";
import Mission from "./pages/Mission/Mission";
import Shop from "./pages/Shop/Shop";
import Donation from "./pages/Donation/Donation";

// import Title from "./components/Title/Title";
import NavigationBar from "./components/NavigationBar/NavigationBar";
// import Footer from "./components/Footer/Footer";
import Frontispiece from "./pages/Frontispiece/Frontispiece";

function App() {
  return (
    <>
      <div className="background">
        {/* <Title /> */}
        <NavigationBar />
        <div className="routes-view">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tour" element={<Tour />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/donation" element={<Donation />} />
            <Route path="/frontispiece" element={<Frontispiece />} />
          </Routes>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
}
export default App;
