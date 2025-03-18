import styles from "./Contact.module.css";

function Contact() {
  function handleSubmit() {
    if (document.getElementById("name").value === "") {
      alert("Please enter your name.");
      return;
    }
    if (document.getElementById("email").value === "") {
      alert("Please enter your email.");
      return;
    }
    if (document.getElementById("message").value === "") {
      alert("Please enter a message.");
      return;
    }
    alert("Form submitted!");
  }
  return (
    <section className={styles.contact}>
      <form className={styles.form}>
        <h2>Contact me</h2>
        <label htmlFor="name">Your name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Your email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="5" required></textarea>

        <button onClick={handleSubmit} type="submit">
          Send
        </button>
      </form>
    </section>
  );
}

export default Contact;
