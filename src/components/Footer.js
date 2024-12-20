import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>&copy; {new Date().getFullYear()} MyPortfolio. All Rights Reserved.</p>
    </footer>
  );
}

const styles = {
  footer: { background: "#333", color: "#fff", textAlign: "center", padding: "1rem" },
};

export default Footer;
