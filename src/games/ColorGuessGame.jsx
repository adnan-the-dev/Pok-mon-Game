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
    const newColors = Array.from({ length: 8 }, generateRandomColor);
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
          padding: "10px",
          boxShadow: "0 12px 32px rgba(0,0,0,0.1)",
          textAlign: "center",
          width: "100%",
        border:'1px solid red'

        }}
      >
   <h1
  style={{
    fontSize: "3rem",
    fontWeight: "800",
    background: "linear-gradient(90deg, rgb(255, 144, 169), rgb(255, 127, 105)) padding-box text",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "20px",
    fontFamily: `'Poppins', 'Segoe UI Emoji', 'Apple Color Emoji', sans-serif`,
    letterSpacing: "1px",
  }}
>
  🎨 Guess This Color
</h1>


<div
  style={{
    fontSize: "22px",
    fontWeight: "700",
    background: "rgba(255, 255, 255, 0.2)",
    padding: "12px 24px",
    borderRadius: "16px",
    display: "inline-block",
    marginBottom: "20px",
    boxShadow: "inset 0 0 6px rgba(255,255,255,0.3), 0 4px 15px rgba(0,0,0,0.2)",
    color: "#111",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
  }}
>
  {targetColor}
</div>

<h2
  style={{
    fontSize: "20px",
    fontWeight: "600",
    color: "#333",
    marginBottom: "12px",
  }}
>
  🏆 Score:{" "}
  <span
    style={{
      fontWeight: "700",
      background: "#f9f9f9",
      padding: "4px 12px",
      borderRadius: "8px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      color: "#333",
    }}
  >
    {score}
  </span>
</h2>

<div
  style={{
    minHeight: "32px",
    fontSize: "16px",
    fontWeight: "600",
    padding: "6px 12px",
    color: message.includes("Correct") ? "#2ecc71" : "#e74c3c",
    background: message
      ? "rgba(255,255,255,0.3)"
      : "transparent",
    borderRadius: "10px",
    transition: "all 0.3s ease",
    boxShadow:
      message && message.includes("Correct")
        ? "0 0 10px rgba(46, 204, 113, 0.5)"
        : message
        ? "0 0 10px rgba(231, 76, 60, 0.5)"
        : "none",
  }}
>
  {message}
</div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 200px)",
            // gridTemplateColumns: "repeat(3, 100px)",
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
                width: "200px",
                height: "200px",
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
