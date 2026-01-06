import Layout from "../components/Layout";
export default function Home() {
  return (
    <Layout>
      {/* ===== HERO SECTION ===== */}
      <section className="text-center bg-light py-5">
        <div className="container">
          <h1 className="text-primary mb-3">Welcome to Brilliant Unique Academy</h1>
          <p className="lead mb-4">Providing quality education for a brighter future.</p>
          <button className="btn btn-success btn-lg">Explore Programs</button>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">About Us</h2>
          <p className="text-center">
            Brilliant Unique Academy is committed to nurturing students’ potential by providing a
            holistic learning environment with experienced teachers and modern facilities.
          </p>
           <p>Your journey to excellence begins here.</p>
        
        </div>
      </section>

      {/* ===== PROGRAMS SECTION ===== */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Our Programs</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Primary Education</h5>
                  <p className="card-text">Building strong foundations for young learners.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Secondary Education</h5>
                  <p className="card-text">Preparing students for higher education and careers.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Extracurricular Activities</h5>
                  <p className="card-text">Encouraging creativity, sports, and leadership skills.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TEACHERS SECTION ===== */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Meet Our Teachers</h2>
          <div className="row">
            <div className="col-md-3 mb-4">
              <div className="card h-100 shadow-sm text-center">
                <img
                  src="/1.jpg"
                  className="card-img-top"
                  alt="1"
                />
                <div className="card-body">
                  <h5 className="card-title">Uncle Muhammad Harande</h5>
                  <p className="card-text">Mathematics Teacher</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card h-100 shadow-sm text-center">
                <img
                  src="/2.jpg"
                  className="card-img-top"
                  alt="2"
                />
                <div className="card-body">
                  <h5 className="card-title">Uncle Abdulrahman Auwal</h5>
                  <p className="card-text">Science Teacher</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card h-100 shadow-sm text-center">
                <img
                  src="/3.jpg"
                  className="card-img-top"
                  alt="3"
                />
                <div className="card-body">
                  <h5 className="card-title">Mommy Brilliant </h5>
                  <p className="card-text">English Teacher</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card h-100 shadow-sm text-center">
                <img
                  src="/4.jpg"
                  className="card-img-top"
                  alt="4"
                />
                <div className="card-body">
                  <h5 className="card-title">Uncle Hamza ismail</h5>
                  <p className="card-text">Computer Science Teacher</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT CTA SECTION ===== */}
      <section className="py-5 bg-primary text-white text-center">
  <div className="container">
    <h2>Get in Touch</h2>
    <p>Contact us for admissions, inquiries, or more information about our programs.</p>
    <button
      className="btn btn-light btn-lg"
      onClick={() => window.location.href = '/contact'}
    >
      Contact Us
    </button>
  </div>
</section>

    </Layout>
  );
}
