import React from "react";

function Services() {
  const services = [
    "Web Development",
    "UI/UX Design",
    "API Integration",
    "Performance Optimization",
  ];

  return (
    <div style={styles.container}>
      <h1>Services</h1>
      <ul style={styles.serviceList}>
        {services.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: { padding: "2rem" },
  serviceList: { listStyle: "none", padding: "0" },
};

export default Services;
