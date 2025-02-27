export default function NavigationBar() {
  return (
    <nav style={styles.navigation}>
      <a href="#">About</a>
      <a href="#">Find a Tour</a>
      <a href="#">Schedule a Visit</a>
      <a href="#">Gallery</a>
      <a href="#">Contact Us</a>
    </nav>
  );
}

const styles = {
    navigation: {
        backgroundColor: "lightgray"
    }
}
