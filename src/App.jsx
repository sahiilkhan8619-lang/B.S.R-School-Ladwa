import "./App.css";

function App() {
  return (
    <div>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">B.S.R School Ladwa</div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#classes">Classes</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#contact">Contact</a></li>
       </ul>
      </nav>


      {/* ADMISSION BANNER */}
      <div className="admission-banner">
        🎓 ADMISSIONS OPEN — Give Your Child a Bright Future!
      </div>


      {/* HERO SECTION */}
      <section id="home" className="hero">

        <div className="hero-content">

          <span className="welcome-text">
            WELCOME TO
          </span>

          <h1>B.S.R School Ladwa</h1>

          <p className="hero-subtitle">
            Education • Discipline • Success
          </p>

          <p className="hero-description">
            Building a bright future through quality education,
            knowledge and strong values.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Explore School
            </button>

            <button className="secondary-btn">
              Contact Us
            </button>
          </div>

        </div>


        <div className="hero-image-box">

          <img
            src="/images/school.jpg"
            alt="B.S.R School Ladwa"
          />

        </div>

      </section>


      {/* ABOUT */}
      <section id="about" className="about">

        <h2>About Our School</h2>

        <p>
          B.S.R School Ladwa is committed to providing quality education
          and creating a positive learning environment for students.
          Our aim is to develop knowledge, confidence, discipline and
          good values among students.
        </p>

      </section>


      {/* HIGHLIGHTS */}
      <section className="highlights">

        <h2>School Highlights</h2>

        <div className="highlight-container">

          <div className="highlight-card">
            <div className="icon">📚</div>
            <h3>Quality Education</h3>
            <p>
              Focus on knowledge, skills and overall development.
            </p>
          </div>


          <div className="highlight-card">
            <div className="icon">💻</div>
            <h3>Computer Lab</h3>
            <p>
              Modern computer learning for students.
            </p>
          </div>


          <div className="highlight-card">
            <div className="icon">⚽</div>
            <h3>Sports</h3>
            <p>
              Sports and activities for students.
            </p>
          </div>


          <div className="highlight-card">
            <div className="icon">🏫</div>
            <h3>Smart Learning</h3>
            <p>
              Friendly and supportive learning environment.
            </p>
          </div>

        </div>

      </section>


      {/* CLASSES */}
      <section id="classes" className="classes">

        <h2>Our Classes</h2>

        <p>
          Quality education for students from primary to secondary level.
        </p>

        <div className="class-container">

          <div className="class-card">
            <h3>Primary Classes</h3>
            <p>Classes 1st to 5th</p>
          </div>


          <div className="class-card">
            <h3>Middle Classes</h3>
            <p>Classes 6th to 8th</p>
          </div>


          <div className="class-card">
            <h3>Secondary Classes</h3>
            <p>Classes 9th to 10th</p>
          </div>

        </div>

      </section>
      {/* ADMISSION SECTION */}
<section className="admission">

  <div className="admission-content">

    <span className="admission-label">
      🎓 ADMISSIONS OPEN
    </span>

    <h2>Give Your Child a Bright Future</h2>

    <p>
      Admissions are open for the new academic session.
      Join B.S.R School Ladwa for quality education,
      discipline and overall development.
    </p>

    <div className="admission-details">

      <div>
        <strong>📚 Classes</strong>
        <span>1st to 10th</span>
      </div>

      <div>
        <strong>📞 Contact</strong>
        <span>9664365783</span>
      </div>

      <div>
        <strong>📞 Contact</strong>
        <span>9982941671</span>
      </div>

    </div>

    <a
      className="admission-btn"
      href="tel:9664365783"
    >
      Contact for Admission
    </a>

  </div>

</section>


      {/* NOTICE BOARD */}
      <section className="notice">

        <h2>📢 Notice Board</h2>

        <div className="notice-container">

          <div className="notice-item">
            <span>NEW</span>
            <p>Admissions are open for the new academic session.</p>
          </div>

          <div className="notice-item">
            <span>INFO</span>
            <p>Parents are requested to stay connected with the school.</p>
          </div>

          <div className="notice-item">
            <span>UPDATE</span>
            <p>School activities and events will be updated here.</p>
          </div>

        </div>

      </section>


    { /* GALLERY */}
<section id="gallery" className="gallery">

  <h2>School Gallery</h2>

  <p>
    Some glimpses of our school.
  </p>

  <div className="gallery-container">

    <div className="gallery-card">
      <img
        src="/images/campus.jpg"
        alt="School Campus"
      />
      <h3>School Campus</h3>
    </div>

    <div className="gallery-card">
      <img
        src="/images/our-school.jpg"
        alt="Our School"
      />
      <h3>Our School</h3>
    </div>

    <div className="gallery-card">
      <img
        src="/images/school.jpg"
        alt="B.S.R School"
      />
      <h3>B.S.R School</h3>
    </div>

  </div>

</section>


      {/* TEACHERS */}
      <section className="teachers">

        <h2>Our Teachers</h2>

        <p>
          Our experienced teachers guide students towards success.
        </p>

        <div className="teacher-container">

          <div className="teacher-card">
            <h3>Our Faculty</h3>
            <p>
              Experienced and dedicated teachers.
            </p>
          </div>


          <div className="teacher-card">
            <h3>Student Support</h3>
            <p>
              Personal attention and guidance.
            </p>
          </div>


          <div className="teacher-card">
            <h3>Better Learning</h3>
            <p>
              Focus on academic and personal growth.
            </p>
          </div>

        </div>

      </section>


      {/* CONTACT */}
    <section id="contact" className="contact">
  <h2>Contact Us</h2>

  <p>B.S.R School Ladwa</p>
  <p>📍 Ladwa, Rajasthan</p>

  <p>📞 <a href="tel:9664365783">9664365783</a></p>
  <p>📞 <a href="tel:9982941672">9982941672</a></p>

  <p>
    📧
    <a href="mailto:mohammedhanif4345@gmail.com">
      mohammedhanif4345@gmail.com
    </a>
  </p>

  <div className="map-box">
    <iframe
      src="https://www.google.com/maps?q=B.S.R%20School%20Ladwa&output=embed"
      width="100%"
      height="350"
      style={{ border: 0 }}
      loading="lazy"
      title="B.S.R School Ladwa Location"
    ></iframe>
  </div>
</section>

      {/* FOOTER */}
      <footer className="footer">

        <p>
          © 2026 B.S.R School Ladwa. All Rights Reserved.
        </p>

      </footer>

    </div>
  );
}

export default App;