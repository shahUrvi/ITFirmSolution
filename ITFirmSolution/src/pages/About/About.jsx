import "./About.css";
import teamImage from "../../assets/team.jpg"; // Replace with your actual image path

function AboutUs() {
  return (
    <section className="about-us">
      <div className="about-container">
        <div className="about-image">
          <img src={teamImage} alt="Team in meeting" />
        </div>
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            We’re a passionate team of tech enthusiasts delivering high-quality IT solutions to businesses worldwide.
            With a strong focus on innovation, transparency, and results, we help brands thrive in the digital age.
          </p>
          <div className="about-buttons">
            <a href="/about" className="btn-purple">Learn More</a>
            <a href="/contact" className="btn-purple">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
