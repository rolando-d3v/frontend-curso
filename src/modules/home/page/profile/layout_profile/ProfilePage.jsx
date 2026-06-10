import styles from "./profile.module.css";

export default function ProfilePage() {
  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.content}>
          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <img
              src="https://img.freepik.com/vector-premium/imagen-perfil-avatar-hombre-aislada-fondo-imagen-profil-avatar-hombre_1293239-4861.jpg?semt=ais_hybrid&w=740&q=80"
              alt="profile"
              className={styles.profileImage}
            />

            <section className={styles.section}>
              <h4>WORK</h4>

              <div className={styles.company}>
                <div>
                  <strong>Spotify New York</strong>
                  <p>170 William Street</p>
                  <p>New York, NY</p>
                </div>

                <span className={styles.badge}>Primary</span>
              </div>

              <div className={styles.company}>
                <div>
                  <strong>Metropolitan Museum</strong>
                  <p>525 E 68th Street</p>
                  <p>New York, NY</p>
                </div>

                <span className={styles.badgeSecondary}>
                  Secondary
                </span>
              </div>
            </section>

            <section className={styles.section}>
              <h4>SKILLS</h4>

              <ul className={styles.skills}>
                <li>Branding</li>
                <li>UI/UX</li>
                <li>Web Design</li>
                <li>Packaging</li>
                <li>Print & Editorial</li>
              </ul>
            </section>
          </aside>

          {/* Main */}
          <main className={styles.main}>
            <div className={styles.profileHeader}>
              <div>
                <h1>Jeremy Rose</h1>
                <span className={styles.job}>
                  Product Designer
                </span>

                <div className={styles.rating}>
                  <span className={styles.score}>8,6</span>
                  ★★★★★
                </div>
              </div>

              <button className={styles.bookmark}>
                Bookmark
              </button>
            </div>

            <div className={styles.actions}>
              <button className={styles.messageBtn}>
                Send Message
              </button>

              <button className={styles.contactBtn}>
                Contacts
              </button>

              <button className={styles.reportBtn}>
                Report User
              </button>
            </div>

            <div className={styles.tabs}>
              <button>Timeline</button>
              <button className={styles.activeTab}>About</button>
            </div>

            <div className={styles.infoGrid}>
              <div>
                <h5>CONTACT INFORMATION</h5>

                <div className={styles.infoRow}>
                  <span>Phone:</span>
                  <a href="/">+1 123 456 7890</a>
                </div>

                <div className={styles.infoRow}>
                  <span>Address:</span>
                  <p>
                    525 E 68th Street
                    <br />
                    New York, NY
                  </p>
                </div>

                <div className={styles.infoRow}>
                  <span>E-mail:</span>
                  <a href="/">hello@jeremyrose.com</a>
                </div>

                <div className={styles.infoRow}>
                  <span>Site:</span>
                  <a href="/">www.jeremyrose.com</a>
                </div>
              </div>

              <div>
                <h5>BASIC INFORMATION</h5>

                <div className={styles.infoRow}>
                  <span>Birthday:</span>
                  <p>June 5, 1992</p>
                </div>

                <div className={styles.infoRow}>
                  <span>Gender:</span>
                  <p>Male</p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}