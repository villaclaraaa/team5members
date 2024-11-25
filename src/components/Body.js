import React from "react";

const Body = () => {
  return (
    <main style={styles.body}>
      {/* Mariya Tarasyuk */}
      <div style={styles.card}>
        <img src={"/Mariya-photo.jpg"} alt="Mariya Tarasyuk" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Mariya Tarasyuk</h2>
          <p style={styles.position}>QA</p>
        </div>
      </div>

      {/* Yurii Surniak */}
      <div style={styles.card}>
        <img src={"/YuraAvatar.jpg"} alt="Yurii Surniak" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Yurii Surniak</h2>
          <p style={styles.position}>Team Lead</p>
        </div>
      </div>

      {/* Andrii Chornyi */}
      <div style={styles.card}>
        <img src={"/pudge.png"} alt="Andrii Chornyi" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Andrii Chornyi</h2>
          <p style={styles.position}>UI/UX Designer</p>
        </div>
      </div>

      {/* Andrii Khreptak */}
      <div style={styles.card}>
        <img src={"/sf.png"} alt="Andrii Khreptak" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Andrii Khreptak</h2>
          <p style={styles.position}>Project Manager</p>
        </div>
      </div>

      {/* Anastasia Shpilka */}
      <div style={styles.card}>
        <img src={"/AnastasiaAvatar.jpg"} alt="Anastasia Spilka" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Anastasia Spilka</h2>
          <p style={styles.position}>Fullstack developer</p>
        </div>
      </div>
    </main>
  );
};


const styles = {
  body: {
    display: "flex",
    flexWrap: "wrap",
  },
  card: {
    width: "150px",
    padding: "1em",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    margin: "1em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  photo: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  textContainer: {
    marginTop: "0.5em",
  },
  name: {
    fontSize: "1em",
    fontWeight: "bold",
    color: "#333",
    margin: "0",
  },
  position: {
    fontSize: "0.9em",
    color: "#6a0dad", // Same purple color as header
    margin: "0.5em 0 0 0",
  },
};

export default Body;
