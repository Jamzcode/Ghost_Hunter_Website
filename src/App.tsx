import "./index.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Tour from "./pages/Tour/Tour";
import Contact from "./pages/Contact/Contact";
import Gallery from "./pages/Gallery";
import Mission from "./pages/Mission";
import Shop from "./pages/Shop/Shop";
import Donation from "./pages/Donation/Donation";

import Title from "./components/Title/Title";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Title />
      <NavigationBar />
      <div className="routes-view">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/donation" element={<Donation />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
export default App;
