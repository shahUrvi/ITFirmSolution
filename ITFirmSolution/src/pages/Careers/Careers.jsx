import "./Careers.css";
import teamImage from "../../assets/c2.jpeg";
import checkImage from "../../assets/check.png"


function Career() {
  return (
    <div className="career-container">
      {/* Join Our Team Section */}
      <div className="join-team-section">
        <div className="team-text">
          <h2>👩‍💻 Join Our Team</h2>
          <p>We’re always on the lookout for passionate techies, creatives, and thinkers.</p>
          <p>Find your next opportunity with us.</p>
          <button className="view-positions-btn">📩 View Open Positions</button>
        </div>
        <div className="team-image">
          <img src={teamImage} alt="Team" />
        </div>
      </div>

      {/* Open Positions */}
      <h2>Open Positions</h2>
      <p>We’re always looking for talented and passionate people to join us.</p>

      <div className="open-positions">
        <div className="position">
          <h3>Frontend Developer</h3>
          <p>Build stunning user interfaces with React and modern web tools.</p>
          <button>Apply Now</button>
        </div>
        <div className="position">
          <h3>Backend Developer</h3>
          <p>Design robust APIs and manage our cloud infrastructure.</p>
          <button>Apply Now</button>
        </div>
        <div className="position">
          <h3>UI/UX Designer</h3>
          <p>Craft intuitive and beautiful user experiences for our products.</p>
          <button>Apply Now</button>
        </div>
      </div>

      {/* Verification Section */}
      <div className="verification-section">
        <h2 className="verification-heading">
          <span style={{ color: "#2b6cb0" }}>Employee</span> / Intern Verification
        </h2>
        <div className="verification-container">
          <form className="verification-form">
            <label>Full Name</label>
            <input type="text" placeholder="Enter full name" />

            <label>Employee/Intern ID</label>
            <input type="text" placeholder="Enter your ID" />

            <label>Registered Email</label>
            <input type="email" placeholder="Enter registered email" />

            <label>Department</label>
            <input type="text" placeholder="Enter department" />

            <button type="submit" className="verify-btn">Verify Now</button>
            <p className="verify-note">Verification will be emailed to your registered ID</p>
          </form>

          <div className="verification-image">
            <img src={checkImage} alt="Verification Illustration" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Career;
