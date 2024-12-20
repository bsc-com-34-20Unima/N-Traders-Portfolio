import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo}>N-Traders</h1>
      <ul style={styles.navList}>
        <li><Link to="/" style={styles.navLink}>Home</Link></li>
        <li><Link to="/about" style={styles.navLink}>About</Link></li>
        <li><Link to="/projects" style={styles.navLink}>Projects</Link></li>
        <li><Link to="/services" style={styles.navLink}>Services</Link></li>
        <li><Link to="/contact" style={styles.navLink}>Contact</Link></li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center", // Ensure vertical alignment
    padding: "1.5rem 2rem", // Increase padding for a larger navbar
    background: "blue",
    color: "white",
  },
  logo: {
    margin: "0",
    fontSize: "2rem", // Increase logo font size
    fontWeight: "bold", // Make the logo stand out
  },
  navList: {
    display: "flex",
    gap: "2rem", // Increase spacing between links
    listStyle: "none",
    margin: "0",
    padding: "0",
  },
  navLink: {
    fontSize: "1.2rem", // Larger font size for links
    textDecoration: "none", // Remove underline
    color: "white", // White text color for links
    transition: "color 0.3s ease", // Add a hover effect
  },
  navLinkHover: {
    color: "#ffcc00", // Change color on hover
  },
};

export default Navbar;
