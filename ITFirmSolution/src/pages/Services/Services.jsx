import React from "react";
import "./Services.css";

const services = [
  {
    icon: "💻",
    title: "Web/App Development",
    desc: "Custom websites and mobile apps tailored to your business goals.",
  },
  {
    icon: "🔐",
    title: "Cybersecurity",
    desc: "Protect your data with secure, modern cybersecurity solutions.",
  },
  {
    icon: "📈",
    title: "Digital Marketing",
    desc: "Reach your audience through impactful digital marketing strategies.",
  },
  {
    icon: "🔗",
    title: "Social Media Handling",
    desc: "Boost your presence across all major social media platforms.",
  },
  {
    icon: "🌟",
    title: "Brand Building",
    desc: "Craft a strong, recognizable brand identity from scratch.",
  },
  {
    icon: "📊",
    title: "Business Consulting",
    desc: "Expert advice to streamline operations and grow your business.",
  },
  {
    icon: "✍️",
    title: "SEO Content Writing",
    desc: "Content that ranks. Improve visibility with SEO-rich articles.",
  },
  {
    icon: "🎨",
    title: "Logo & Graphic Design",
    desc: "Creative and memorable logos & graphics for your brand.",
  },
];

const Services = () => {
  return (
    <section className="services-section">
      <div className="header-center">
        <h2 className="title">Our Services</h2>
        <p className="subtitle">
          Empowering your digital growth with end-to-end IT solutions.
        </p>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
