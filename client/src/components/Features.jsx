import React from "react";
import { CalendarDays, Clock, ShieldCheck, HeartPulse } from "lucide-react";
import "./FeaturesSection.css";

const features = [
  {
    icon: <CalendarDays size={28} />,
    title: "Easy Booking",
    desc: "Book appointments with top doctors in just a few clicks",
  },
  {
    icon: <Clock size={28} />,
    title: "Flexible Timing",
    desc: "Choose from available time slots that fit your schedule",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Verified Doctors",
    desc: "All doctors are verified and highly qualified professionals",
  },
  {
    icon: <HeartPulse size={28} />,
    title: "Quality Care",
    desc: "Get the best medical care from experienced specialists",
  },
];

const FeaturesSection = () => {
  return (
    <section className="features">
      <h2 className="features-title">Why Choose Us</h2>
      <p className="features-subtitle">
        Experience healthcare booking made simple and efficient
      </p>

      <div className="features-grid">
        {features.map((item, index) => (
          <div key={index} className="feature-card">
            <div className="icon-box">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
