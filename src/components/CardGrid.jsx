import React from "react";

const CardGrid = ({ cards, onCardClick }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "24px",
        padding: "20px",
        justifyContent: "center",
      }}
    >
      {cards.map((card) => (
        <div
          key={card.id}
          onClick={() => onCardClick(card.id, card.name)}
          style={{
            width: "180px",
            height: "260px",
            border: "2px solid transparent",
            borderRadius: "16px",
            padding: "16px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
            background:
              "linear-gradient(#fff, #fff) padding-box, linear-gradient(135deg, #ff6a00, #ee0979) border-box",
            textAlign: "center",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 12px 28px rgba(0, 0, 0, 0.15)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.1)";
          }}
        >
          <img
            src={card.image}
            alt={card.name}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "contain",
              marginBottom: "12px",
              filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))",
            }}
          />
          <h3
            style={{
              textTransform: "capitalize",
              fontSize: "1.2rem",
              color: "#333",
              margin: 0,
            }}
          >
            {card.name}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;