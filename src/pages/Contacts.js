import React from "react";

function Contact() {
  return (
    <div style={styles.container}>
      <h1>Contact Me</h1>
      <form style={styles.form}>
        <label>
          Name:
          <input type="text" name="name" style={styles.input} />
        </label>
        <label>
          Email:
          <input type="email" name="email" style={styles.input} />
        </label>
        <label>
          Message:
          <textarea name="message" style={styles.textarea} />
        </label>
        <button type="submit" style={styles.button}>Send</button>
      </form>
    </div>
  );
}

const styles = {
  container: { padding: "2rem" },
  form: { display: "flex", flexDirection: "column", gap: "1rem" },
  input: { padding: "0.5rem", width: "100%" },
  textarea: { padding: "0.5rem", width: "100%", height: "100px" },
  button: { padding: "0.5rem 1rem", background: "#333", color: "#fff", border: "none" },
};

export default Contact;
