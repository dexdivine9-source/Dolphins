"use client";
import { useState } from "react";
import "./booking.css";

export default function BookingPage() {
  const [bookingType, setBookingType] = useState("Individual Lane");
  const [swimmers, setSwimmers] = useState(1);

  return (
    <div className="booking-container">
      <div className="booking-header">
        <h4 style={{ color: "var(--accent-cyan)", fontWeight: 700, letterSpacing: "1px", marginBottom: "0.5rem", fontSize: "0.85rem", textTransform: "uppercase" }}>RESERVE YOUR SPOT</h4>
        <h1>Book a Lane</h1>
        <p>Fill in the details below. Slots are checked live to prevent double bookings.</p>
      </div>

      <div className="booking-section">
        <div className="section-title">
          <div className="step-num">★</div>
          What are you booking for?
        </div>
        <div className="booking-types">
          {["Individual Lane", "Birthday Party", "Social Hangout", "Night Party"].map(type => (
            <div 
              key={type}
              className={`type-card ${bookingType === type ? "active" : ""}`}
              onClick={() => setBookingType(type)}
            >
              <div className="icon">
                {type === "Individual Lane" ? "🏊‍♂️" : type === "Birthday Party" ? "🎂" : type === "Social Hangout" ? "🍻" : "🌙"}
              </div>
              <div className="label">{type}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="booking-section">
        <div className="section-title">
          <div className="step-num">1</div>
          Personal Information
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="e.g. Alex Johnson" />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="alex@example.com" />
          </div>
        </div>
      </div>

      <div className="booking-section">
        <div className="section-title">
          <div className="step-num">2</div>
          Date & Time
        </div>
        <div className="form-group" style={{ marginBottom: "2rem" }}>
          <label>Select Date</label>
          <input type="date" />
        </div>
        
        <div className="time-group">
          <div className="time-group-label">🌅 MORNING</div>
          <div className="slots-grid">
            {["6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM"].map(time => (
              <div key={time} className="slot-btn">{time}</div>
            ))}
          </div>
        </div>

        <div className="time-group">
          <div className="time-group-label">☀️ AFTERNOON</div>
          <div className="slots-grid">
            {["12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"].map(time => (
              <div key={time} className="slot-btn">{time}</div>
            ))}
          </div>
        </div>

        <div className="time-group">
          <div className="time-group-label">🌙 EVENING</div>
          <div className="slots-grid">
            {["6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM"].map(time => (
              <div key={time} className="slot-btn">{time}</div>
            ))}
          </div>
        </div>
      </div>

      <div className="booking-section">
        <div className="section-title">
          <div className="step-num">3</div>
          Pool Preferences
        </div>
        <div className="form-group" style={{ marginBottom: "1rem" }}>
          <label>Number of Swimmers</label>
          <div className="swimmer-counter" style={{ marginTop: "0.5rem" }}>
            <div className="swimmer-btn" onClick={() => setSwimmers(Math.max(1, swimmers - 1))}>-</div>
            <div className="swimmer-val">{swimmers}</div>
            <div className="swimmer-btn" onClick={() => setSwimmers(Math.min(8, swimmers + 1))}>+</div>
            <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>Max 8 per lane</span>
          </div>
        </div>
      </div>

      <button className="confirm-btn">✓ Confirm Booking</button>
    </div>
  );
}
