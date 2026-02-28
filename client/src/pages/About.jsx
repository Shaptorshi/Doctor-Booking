import React from 'react';
import { Stethoscope, Lightbulb, HeartPulse, ShieldCheck } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './About.css';

const About = () => {
  return (
    <div className='about-page'>
      <Navbar />

      {/* Hero Section */}
      <section className='about-hero'>
        <div className='hero-content'>
          <Stethoscope className='hero-icon' />
          <h1>About HealthConnect</h1>
          <p>
            HealthConnect is your trusted digital healthcare companion, designed to make
            quality medical care accessible, simple, and stress-free. Our platform connects
            patients with verified doctors and specialists across various fields — anytime,
            anywhere. Whether you need a quick consultation, routine checkup, or expert
            advice, HealthConnect ensures you’re just a few clicks away from professional care.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className='mission-section'>
        <div className='mission-container'>
          <Lightbulb className='mission-icon' />
          <h2>Our Mission</h2>
          <p>
            To empower people by simplifying access to healthcare services and enabling
            seamless communication between patients and doctors — promoting healthier,
            happier lives.
          </p>
        </div>
      </section>

      {/* Vision and Values */}
      <section className='vision-section'>
        <h2>Our Vision & Values</h2>
        <div className='values-grid'>
          <div className='value-card'>
            <HeartPulse className='value-icon' />
            <h3>Compassionate Care</h3>
            <p>
              We believe in putting people first — ensuring that every interaction is caring,
              respectful, and centered around patient well-being.
            </p>
          </div>
          <div className='value-card'>
            <ShieldCheck className='value-icon' />
            <h3>Trust & Transparency</h3>
            <p>
              We prioritize privacy, honesty, and security in every aspect of healthcare,
              building long-term trust between patients and professionals.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
