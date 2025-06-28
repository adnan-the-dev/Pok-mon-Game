import React, { useEffect, useState } from "react";

const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const generateRandomColor = () => {
  const r = getRandomNumber(0, 255);
  const g = getRandomNumber(0, 255);
  const b = getRandomNumber(0, 255);
  return `rgb(${r}, ${g}, ${b})`;
};

export default function ColorGuessGame() {
  const [colors, setColors] = useState([]);
  const [targetColor, setTargetColor] = useState("");
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");

  const generateColors = () => {
    const newColors = Array.from({ length: 6 }, generateRandomColor);
    const picked = newColors[getRandomNumber(0, newColors.length - 1)];
    setColors(newColors);
    setTargetColor(picked);
    setMessage("");
  };

  const handleClick = (color) => {
    if (color === targetColor) {
      setScore((prev) => prev + 1);
      setMessage("✅ Correct!");
      setTimeout(generateColors, 800);
    } else {
      setMessage("❌ Wrong! Try again.");
    }
  };

  useEffect(() => {
    generateColors();
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right top, #dfe9f3, #ffffff)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Poppins', sans-serif",
        padding: "20px",
      }}
    >
      <div
        style={{
          backdropFilter: "blur(10px)",
          background: "rgba(255, 255, 255, 0.3)",
          borderRadius: "24px",
          padding: "40px",
          boxShadow: "0 12px 32px rgba(0,0,0,0.1)",
          textAlign: "center",
          maxWidth: "420px",
          width: "100%",
        }}
      >
        <h1
          style={{
            fontSize: "24px",
            color: "#333",
            marginBottom: "8px",
            fontWeight: "600",
          }}
        >
          Guess this color:
        </h1>
        <div
          style={{
            fontSize: "20px",
            fontWeight: "600",
            background: "#fff",
            padding: "10px 16px",
            borderRadius: "12px",
            display: "inline-block",
            marginBottom: "16px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            color: "#222",
          }}
        >
          {targetColor}
        </div>
        <h2 style={{ fontSize: "18px", marginBottom: "8px" }}>
          Score: <span style={{ fontWeight: "600" }}>{score}</span>
        </h2>
        <div
          style={{
            height: "28px",
            fontSize: "16px",
            fontWeight: "500",
            color: message.includes("Correct") ? "#4CAF50" : "#F44336",
            marginBottom: "20px",
            transition: "0.3s",
          }}
        >
          {message}
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 100px)",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          {colors.map((color, i) => (
            <div
              key={i}
              onClick={() => handleClick(color)}
              style={{
                backgroundColor: color,
                width: "100px",
                height: "100px",
                borderRadius: "20px",
                cursor: "pointer",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.08)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
