import Layout from "@/components/Layout";
import styles from "@/styles/Contact.module.css";

export default function Contact() {
  return (
    <Layout>
      <section className={styles.contactSection}>
        <div className="container">
          <h1>Contact Us</h1>
          <p>Fill the form below to get in touch with us.</p>
          <form className="mt-4">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" placeholder="Your Name" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="Your Email" />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="5" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
