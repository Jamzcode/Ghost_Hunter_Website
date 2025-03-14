import { Link } from "react-router-dom";
import styles from "./NavigationBar.module.css"

export default function NavigationBar() {
  return (
    <nav className={styles.navigation}>
      <Link to="./">Home</Link>
      <Link to="./tour">Find a Tour</Link>
      <Link to="./gallery">Gallery</Link>
      <Link to="./contact">Contact Us</Link>
      <Link to="./mission">Mission</Link>
      <Link to="./shop">Shop</Link>
      <Link to="./donation">Donation</Link>
    </nav>
  );
}


