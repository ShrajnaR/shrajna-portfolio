import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_3gucb5n",
      "template_hs0obtv",
      form.current,
      "difrf_pso1xqMuJUg"
    )
    .then(() => {
      alert("Message sent successfully!");
      form.current.reset();
    })
    .catch((error) => {
      alert("Failed to send message. Try again.");
      console.log(error);
    });
  };

  return (
    <section id="contact" style={{ padding: "80px 10%", textAlign: "center" }}>
      <h2>Contact Me</h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        style={{ maxWidth: "500px", margin: "auto", display: "flex", flexDirection: "column", gap: "20px" }}
      >
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          style={inputStyle}
        />

        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          pattern="^[a-zA-Z0-9._%+-]+@gmail\.com$"
          title="Please enter a valid Gmail address"
          style={inputStyle}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows="5"
          style={inputStyle}
        />

        <button type="submit" className="btn">
          Send Message
        </button>
      </form>
    </section>
  );
};

const inputStyle = {
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #334155",
  background: "rgba(255,255,255,0.05)",
  color: "white"
};

export default Contact;
