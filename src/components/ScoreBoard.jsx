import React from "react";

function ScoreBoard({ scoreboard, handleClearScores }) {
  return (
    <div
      style={{
        flex: 1,
        padding: "20px",
        maxWidth: "400px",
        borderLeft: "2px solid #ff6a00",
        height: "100%",
        background: "linear-gradient(145deg, #ffffffcc, #f0f0f0cc)",
        backdropFilter: "blur(10px)",
        borderRadius: "16px",
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.05)",
        marginLeft: "20px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h3
        style={{
          fontSize: "1.8rem",
          color: "#ff6a00",
          marginBottom: "12px",
          borderBottom: "2px solid #ddd",
          paddingBottom: "8px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        🏆 Top Players
      </h3>

      <button
        onClick={handleClearScores}
        style={{
          background: "#fff0f0",
          color: "#d32f2f",
          border: "1px solid #f8d7da",
          fontSize: "13px",
          padding: "6px 12px",
          borderRadius: "20px",
          cursor: "pointer",
          marginBottom: "16px",
          transition: "0.3s ease",
        }}
        onMouseOver={(e) => (e.currentTarget.style.background = "#ffe5e5")}
        onMouseOut={(e) => (e.currentTarget.style.background = "#fff0f0")}
      >
        ❌ Clear All Scores
      </button>

      <div style={{ flex: 1, overflowY: "auto" }}>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {scoreboard.length === 0 ? (
            <li
              style={{
                textAlign: "center",
                color: "#888",
                fontStyle: "italic",
                marginTop: "20px",
              }}
            >
              No scores saved yet.
            </li>
          ) : (
            scoreboard.map((entry, index) => (
              <li
                key={index}
                style={{
                  background: "#fff",
                  marginBottom: "12px",
                  padding: "14px",
                  borderRadius: "14px",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.07)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div
                    style={{
                      width: "34px",
                      height: "34px",
                      borderRadius: "50%",
                      backgroundColor: "#ff6a00",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontSize: "14px",
                    }}
                  >
                    {entry.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <div style={{ fontWeight: "bold", color: "#333" }}>
                      {entry.name}
                    </div>
                    <div style={{ fontSize: "12px", color: "#888" }}>
                      Player #{index + 1}
                    </div>
                  </div>
                </div>
                <div style={{ fontWeight: "bold", color: "#2196f3" }}>
                  {entry.score} pts
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default ScoreBoard;
