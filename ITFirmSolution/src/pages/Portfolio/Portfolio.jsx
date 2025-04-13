import "./Portfolio.css";
import pro1 from "../../assets/project1.jpeg"
import pro2 from "../../assets/project2.jpeg"
import pro3 from "../../assets/project3.jpeg"
function Portfolio() {
  return (
    <div className="portfolio-container">
      <h2>Our Portfolio</h2>
      <p>Here’s a glimpse of our recent work and client success stories.</p>

      <div className="portfolio-grid">
        <div className="portfolio-card">
          <img src={pro1} alt="Project Alpha" />
          <h4>Project Alpha</h4>
          <p>Web development for an e-commerce platform.</p>
        </div>
        <div className="portfolio-card">
          <img src={pro2} alt="SmartApp" />
          <h4>SmartApp</h4>
          <p>Mobile app for a healthcare startup.</p>
        </div>
        <div className="portfolio-card">
          <img src={pro3} alt="CloudX" />
          <h4>CloudX</h4>
          <p>Cloud migration and infrastructure setup.</p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
