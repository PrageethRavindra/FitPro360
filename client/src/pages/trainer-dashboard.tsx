import React from "react";
import Sidebar from "../components/sidebar/Sidebar";

const TrainerDashboard = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.title}>Dashboard</h1>
          <span style={styles.role}>TRAINER</span>
        </header>
        <div style={styles.profileSection}>
          <h2 style={styles.name}>JHON DOE</h2>
          <p style={styles.email}>jhondoe@example.com</p>
          <p style={styles.specialty}>BOX FIT</p>
        </div>
        <div style={styles.schedule}>
          <h3>Schedules</h3>
          <div style={styles.scheduleCard}>
            <p>Beginner BOX FIT</p>
            <span>Saturday</span>
            <span>2:00 PM - 3:00 PM</span>
          </div>
          <div style={styles.scheduleCard}>
            <p>Intermediate BOX FIT</p>
            <span>Saturday</span>
            <span>3:00 PM - 4:00 PM</span>
          </div>
          <div style={styles.scheduleCard}>
            <p>Advanced BOX FIT</p>
            <span>Saturday</span>
            <span>4:00 PM - 5:00 PM</span>
          </div>
        </div>
      </div>
    </div>
  );
};

import { CSSProperties } from "react";

const styles: { [key: string]: CSSProperties } = {
  container: {
    padding: "20px",
    flexGrow: 1,
    backgroundColor: "#f4f4f4",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
  },
  role: {
    color: "#0070f3",
    fontWeight: "bold",
    textTransform: "uppercase" as React.CSSProperties['textTransform'],
  },
  profileSection: {
    textAlign: "center",
    marginBottom: "30px",
  },
  name: {
    fontSize: "2.5rem",
    fontWeight: "bold",
  },
  email: {
    color: "#666",
  },
  specialty: {
    fontWeight: "bold",
    color: "#0070f3",
  },
  schedule: {
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "10px",
  },
  scheduleCard: {
    marginBottom: "10px",
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    textAlign: "left",
  },
};

export default TrainerDashboard;
