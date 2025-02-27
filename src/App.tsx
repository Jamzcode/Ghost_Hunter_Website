import Image from "./components/Image";
import Button from "./components/Button";
import Title from "./components/TItle";
import NavigationBar from "./components/NavigationBar";
import Text from "./components/Text";

function App() {
  return (
    <>
      {/* Website Title Component */}
      <Title />

      {/* Navigation Bar Component */}
      <NavigationBar />

      {/* Text Box Component */}
      <Image />
      {/* Text Component */}
      <Text/>
     
      {/* Button Component */}
      <Button />
    </>
  );
}
export default App;


