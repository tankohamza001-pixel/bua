import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <section className="py-5">
        <div className="container">
          <h1 className="text-center text-primary mb-4">About Brilliant Unique Academy</h1>
          <p className="lead text-center">
            Brilliant Unique Academy was founded to provide a holistic learning environment 
            that nurtures students' academic, creative, and social growth.
          </p>

          <div className="row mt-5">
            <div className="col-md-4 mb-4">
              <h5>Our Mission</h5>
              <p>To develop well-rounded, confident, and knowledgeable students ready to face the future.</p>
            </div>
            <div className="col-md-4 mb-4">
              <h5>Our Vision</h5>
              <p>To be a leading school known for excellence, innovation, and student success.</p>
            </div>
            <div className="col-md-4 mb-4">
              <h5>Our Values</h5>
              <p>Integrity, Creativity, Respect, and Collaboration in everything we do.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
