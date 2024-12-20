import React from "react";

function Home() {
  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>Welcome to My Portfolio</h1>
        <p style={styles.heroSubtitle}>
          I’m a passionate developer who creates modern and responsive web
          applications. Let’s work together to build something amazing!
        </p>
        <button style={styles.ctaButton}>Learn More About Me</button>
      </section>

      {/* Skills Section */}
      <section style={styles.skills}>
        <h2 style={styles.sectionTitle}>My Skills</h2>
        <div style={styles.skillsList}>
          {["React.js", "JavaScript", "Node.js", "UI/UX Design", "API Integration"].map(
            (skill, index) => (
              <div key={index} style={styles.skillCard}>
                {skill}
              </div>
            )
          )}
        </div>
      </section>

      {/* Recent Projects Section */}
      <section style={styles.projects}>
        <h2 style={styles.sectionTitle}>Recent Projects</h2>
        <div style={styles.projectList}>
          {[
            { title: "Project A", description: "A React and Node.js app." },
            { title: "Project B", description: "A responsive e-commerce site." },
            { title: "Project C", description: "An AI-powered chatbot." },
          ].map((project, index) => (
            <div key={index} style={styles.projectCard}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>

     
     
    </div>
  );
}

const styles = {
  container: { padding: "2rem", fontFamily: "Arial, sans-serif" },

  // Hero Section
  hero: {
    textAlign: "center",
    padding: "4rem 1rem",
    background: "linear-gradient(135deg, #6a11cb, #2575fc)",
    color: "#fff",
    borderRadius: "10px",
  },
  heroTitle: { fontSize: "3rem", fontWeight: "bold", marginBottom: "1rem" },
  heroSubtitle: { fontSize: "1.2rem", marginBottom: "2rem" },
  ctaButton: {
    padding: "0.8rem 2rem",
    fontSize: "1rem",
    color: "#fff",
    background: "#ff4081",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "transform 0.2s",
  },
  ctaButtonHover: { transform: "scale(1.05)" },

  // Skills Section
  skills: { marginTop: "3rem", padding: "2rem", backgroundColor: "#f9f9f9", borderRadius: "10px" },
  sectionTitle: { fontSize: "2rem", marginBottom: "1.5rem", textAlign: "center", color: "#333" },
  skillsList: { display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" },
  skillCard: {
    padding: "1rem",
    background: "#2575fc",
    color: "#fff",
    borderRadius: "5px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s",
  },
  skillCardHover: { transform: "scale(1.1)" },

  // Projects Section
  projects: { marginTop: "3rem", padding: "2rem" },
  projectList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "1.5rem",
  },
  projectCard: {
    padding: "1.5rem",
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s, box-shadow 0.3s",
  },
  projectCardHover: { transform: "translateY(-10px)", boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)" },

  // Testimonials Section
  testimonials: { marginTop: "3rem", textAlign: "center", padding: "2rem", background: "#f4f4f4", borderRadius: "10px" },
  testimonialList: {
    display: "flex",
    gap: "1rem",
    overflowX: "auto",
    padding: "1rem",
    whiteSpace: "nowrap",
  },
  testimonial: {
    display: "inline-block",
    padding: "1rem",
    background: "#fff",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    minWidth: "300px",
    textAlign: "left",
  },
};

export default Home;
