import { useState } from "react";
import Layout from "@/components/Layout";
import styles from "@/styles/Contact.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(`Error: ${data.message}`);
      }
    } catch (error) {
      setStatus(`Error: ${error.message}`);
    }
  };

  return (
    <Layout>
      <section className={styles.contactSection}>
        <div className="container">
          <h1>Contact Us</h1>
          <p>Fill the form below to get in touch with us.</p>
          <form className="mt-4" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" placeholder="Your Name" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" placeholder="Your Email" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea name="message" value={formData.message} onChange={handleChange} className="form-control" rows="5" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
          {status && <p className="mt-3">{status}</p>}
        </div>
      </section>
    </Layout>
  );
}
