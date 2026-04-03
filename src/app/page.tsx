import Link from "next/link";
import "./globals.css";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Where Performance<br/>Meets Celebration</h1>
          <p>
            The ultimate destination for elite swim training and unforgettable private events.<br/>
            Professional lanes by day, exclusive parties by night.
          </p>
          <Link href="/booking" className="btn-primary">Start Your Booking</Link>
        </div>
      </section>

      <section className="cards-section">
        <div className="service-card">
          <div className="service-category">TRAINING & RECREATION</div>
          <h3>Individual Lanes</h3>
          <p className="text-secondary">
            Book a professional 50m lane for your daily workout. Precision depth, anti-wave dividers, and live slot tracking.
          </p>
          <ul>
            <li>Single lane focus</li>
            <li>Professional equipment</li>
            <li>6:00 AM - 10:00 PM access</li>
          </ul>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
            <Link href="/booking" className="btn-secondary" style={{ width: '100%', textAlign: 'center' }}>Book a Lane</Link>
          </div>
        </div>

        <div className="service-card">
          <div className="service-category">EXCLUSIVE BOOKINGS</div>
          <h3>Private Events</h3>
          <p className="text-secondary">
            Take over the entire facility for your next big celebration. Birthdays, evening hangouts, or private swimming galas.
          </p>
          <ul>
            <li>Entire pool access</li>
            <li>Premium lighting options</li>
            <li>Up to 50 guests</li>
          </ul>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
            <Link href="/booking" className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>Plan Your Event</Link>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="stat-item">
          <div className="stat-num">8</div>
          <div className="stat-label">Indoor pools</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">16</div>
          <div className="stat-label">Daily lanes</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">5000+</div>
          <div className="stat-label">Happy Swimmers</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">7</div>
          <div className="stat-label">Days a Week</div>
        </div>
      </section>

      <section className="features-section">
        <div className="service-category" style={{marginBottom: '1rem'}}>WHY AQUABOOK?</div>
        <h2>Everything for the<br/>perfect session</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h4>Professional Lanes</h4>
            <p>Competition-standard lanes with anti-wave dividers and precision depth marking for every skill level.</p>
          </div>
          <div className="feature-card">
            <h4>Instant Booking</h4>
            <p>Reserve your lane in under a minute. Real-time slot availability with instant email confirmation.</p>
          </div>
          <div className="feature-card">
            <h4>Flexible Schedules</h4>
            <p>Training runs from 6 AM to 10 PM. Choose regular sessions or all-day access tailored to you.</p>
          </div>
          <div className="feature-card">
            <h4>Exclusive Events</h4>
            <p>Book the entire pool for birthday parties, team hangouts, or private evening galas.</p>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <div className="service-category" style={{marginBottom: '1rem'}}>SIMPLE PROCESS</div>
        <h2>How it works</h2>
        <div className="steps-container">
          <div className="step">
            <div className="step-icon">📅</div>
            <h5>Pick a Date</h5>
            <p>Choose any available date and time span.</p>
          </div>
          <div className="step">
            <div className="step-icon">⏱️</div>
            <h5>Select Your Slot</h5>
            <p>Browse morning, afternoon, or evening slots.</p>
          </div>
          <div className="step">
            <div className="step-icon">💳</div>
            <h5>Confirm & Pay</h5>
            <p>Secure your slot with easy online payment.</p>
          </div>
          <div className="step">
            <div className="step-icon">🏊</div>
            <h5>Dive In!</h5>
            <p>Arrive and enjoy your premium session.</p>
          </div>
        </div>
      </section>

      <section className="schedule-section">
        <div className="service-category" style={{marginBottom: '1rem'}}>HOURS & AVAILABILITY</div>
        <h2>Pool Schedule</h2>
        
        <div className="schedule-cards">
          <div className="schedule-card">
            <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>🌅</div>
            <h4>Morning</h4>
            <p>6:30 AM - 12:00 PM</p>
          </div>
          <div className="schedule-card active">
            <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>☀️</div>
            <h4>Afternoon</h4>
            <p>12:00 PM - 6:00 PM</p>
            <div className="badge">MOST POPULAR</div>
          </div>
          <div className="schedule-card">
            <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>🌙</div>
            <h4>Evening</h4>
            <p>6:00 PM - 10:00 PM</p>
          </div>
        </div>

        <div className="cta-wrapper">
          <div className="cta-card">
            <div style={{fontSize: '3.5rem', marginBottom: '1rem'}}>🏊‍♂️</div>
            <h3>Ready to Dive In?</h3>
            <p>Book your lane today and experience premium aquatic facilities.</p>
            <Link href="/booking" className="btn-primary">Book Your Lanes →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
