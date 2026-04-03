"use client";
import { useState } from "react";
import Link from "next/link";
import "./dashboard.css";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="dashboard-container">
      <div className="dash-header">
        <div>
          <div className="dash-title">YOUR ACCOUNT</div>
          <h1>My Dashboard</h1>
          <p>Manage and track all your pool reservations. Data is synced from the backend.</p>
        </div>
        <div className="dash-actions">
          <button className="btn-refresh">
            <span style={{ fontSize: '1.2rem' }}>↻</span> Refresh
          </button>
          <Link href="/booking" className="btn-new-booking">
            <span style={{ fontSize: '1.2rem', fontWeight: "normal" }}>+</span> New Booking
          </Link>
        </div>
      </div>

      <div className="stats-row">
        <div className="stat-card">
          <div className="stat-icon blue">📋</div>
          <div className="stat-info">
            <div className="value">0</div>
            <div className="label">Total Bookings</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon orange">⏳</div>
          <div className="stat-info">
            <div className="value">0</div>
            <div className="label">Upcoming</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon green">✅</div>
          <div className="stat-info">
            <div className="value">0</div>
            <div className="label">Completed</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon red">❌</div>
          <div className="stat-info">
            <div className="value">0</div>
            <div className="label">Canceled</div>
          </div>
        </div>
      </div>

      <div className="alert-box">
        <span style={{ fontSize: '1.2rem' }}>⚠️</span>
        Failed to fetch bookings — Make sure the dev server is running and try refreshing.
      </div>

      <div className="tabs">
        {["All (0)", "Upcoming (0)", "Completed (0)", "Canceled (0)"].map((tabStr) => {
          const tabName = tabStr.split(" ")[0];
          return (
            <div 
              key={tabStr} 
              className={`tab ${activeTab === tabName ? "active" : ""}`}
              onClick={() => setActiveTab(tabName)}
            >
              {tabStr}
            </div>
          );
        })}
      </div>

      <div className="empty-state">
        <div className="illustration">🏊‍♂️</div>
        <h3>No bookings yet</h3>
        <p>Make your first reservation and dive in!</p>
        <Link href="/booking" className="btn-primary">Book a Lane</Link>
      </div>
    </div>
  );
}
