import { useState } from "react";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div style={{ maxWidth: "500px", margin: "20px auto", padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
      <h2 style={{ textAlign: "center", color: "#4f46e5" }}>Get in Touch</h2>
      <p style={{ textAlign: "center", color: "#555" }}>
        We would love to hear from you. Please fill out the form below.
      </p>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc", minHeight: "100px" }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: "#4f46e5",
            color: "white",
            padding: "12px",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default GetInTouch;
