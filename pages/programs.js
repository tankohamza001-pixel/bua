import Layout from "@/components/Layout";
import styles from "@/styles/Programs.module.css";

export default function Programs() {
  return (
    <Layout>
      <section className={styles.programsSection}>
        <div className="container">
          <h1 className="text-center mb-4">Our Programs</h1>
          <div className="row">
            <div className="col-md-6 mb-3">
              <div className="card p-3">
                <h5>Science</h5>
                <p>Physics, Chemistry, Biology with hands-on lab experiments.</p>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="card p-3">
                <h5>Arts</h5>
                <p>Visual arts, music, drama, and cultural activities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
