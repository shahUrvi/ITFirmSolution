import "./Home.css";
import teamImage from "../../assets/img1.jpg";
import googleLogo from '../../assets/g.png';
import microsoftLogo from '../../assets/mic.png';
import amazonLogo from '../../assets/A.png';
import ibmLogo from '../../assets/ibm.png';
import About from '../About/About'
import Services from '../Services/Services'; // 👈 Import your component
import Career from '../Careers/Careers'
import Contact from '../Contact/Contact'

function Home() {
  return (
    <div className="home-wrapper">
      {/* Hero Section */}
      <div className="home-container">
        <div className="hero">
          <h1>Welcome to IT Firm Solutions</h1>
          <p>Your one-stop solution for innovative tech services.</p>
          <button className="cta-btn">Get Started</button>
        </div>
      </div>

      {/* Services Overview with CTA */}
      <div className="services-section">
        <div className="services-text">
          <h2>Transforming Ideas into <br /> <span>Digital Excellence</span></h2>
          <p className="services-subtitle">
            We provide world-class IT solutions including <strong>Web & App Development, Cybersecurity, Digital Marketing</strong>, and more.
          </p>
          <a href="#services" className="services-btn">Explore Our Services</a> {/* 👈 Scroll trigger */}
        </div>
        <div className="services-image">
          <img src={teamImage} alt="Team Collaboration" />
        </div>
      </div>

      {/* Trusted Section */}
      <div className="trusted-section">
        <h2 className="trusted-heading">Trusted By Leading Companies</h2>
        <div className="trusted-logos">
          <img src={googleLogo} alt="Google" />
          <img src={microsoftLogo} alt="Microsoft" />
          <img src={amazonLogo} alt="Amazon" />
          <img src={ibmLogo} alt="IBM" />
        </div>
      </div>

      {/* 👇 Services Section */}
      <section id="services">
        <Services />
      </section>
      <section id="about">
        <About/>
      </section>
      <section id="career">
        <Career />
      </section>
      <section id="contact">
        <Contact />
      </section>
      
      
    </div>
  );
}

export default Home;
