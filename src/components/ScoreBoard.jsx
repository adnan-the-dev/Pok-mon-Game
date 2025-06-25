import React from "react";

function ScoreBoard({ scoreboard, handleClearScores }) {
  return (
    <div
      style={{
        flex: 1,
        padding: "20px",
        maxWidth: "400px",
        borderLeft: "1px solid red",
        height: "100%",
      }}
    >
      <h3
        style={{
          fontSize: "1.5rem",
          color: "#444",
          marginBottom: "10px",
          borderBottom: "2px solid #ddd",
          paddingBottom: "8px",
        }}
      >
        🏆 Scoreboard
      </h3>

      {/* ✅ Clear Scores Button */}
      <button
        onClick={handleClearScores}
        style={{
          background: "transparent",
          color: "#ff4d4f",
          border: "none",
          fontSize: "14px",
          cursor: "pointer",
          marginBottom: "12px",
          textDecoration: "underline",
        }}
      >
        Clear all scores
      </button>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {scoreboard.map((entry, index) => (
          <li
            key={index}
            style={{
              background: "#f9f9f9",
              marginBottom: "10px",
              padding: "10px",
              borderRadius: "12px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              textAlign: "left",
            }}
          >
            <strong>{entry.name}</strong>
            <span style={{ float: "right" }}>{entry.score} pts</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ScoreBoard;
