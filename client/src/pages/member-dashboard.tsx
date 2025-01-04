import React from "react";
import Sidebar from "../components/sidebar/Sidebar";

const MemberDashboard = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.title}>Dashboard</h1>
          <span style={styles.role}>GOLD MEMBER</span>
        </header>
        <div style={styles.profileSection}>
          <h2 style={styles.name}>JHON DOE</h2>
          <p style={styles.email}>jhondoe@example.com</p>
          <p style={styles.joined}>Since 12 Nov, 2023</p>
        </div>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
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
    color: "#e0a800",
    fontWeight: "bold",
    textTransform: "uppercase" as "uppercase", // Ensure this is a valid CSS value
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
  joined: {
    color: "#0070f3",
    fontWeight: "bold",
  },
};

export default MemberDashboard;
