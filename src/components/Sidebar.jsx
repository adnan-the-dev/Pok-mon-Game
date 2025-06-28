export default function Sidebar({ onSelect, games }) {
  return (
    <div
      style={{
        width: "260px",
        background: "linear-gradient(160deg, #1f1f3a, #0f0f1f)",
        padding: "30px 20px",
        color: "#ffffff",
        boxShadow: "6px 0 18px rgba(0, 0, 0, 0.3)",
        display: "flex",
        flexDirection: "column",
        borderTopRightRadius: "16px",
        borderBottomRightRadius: "16px",
        borderLeft: "4px solid #6a5acd",
        height: "100vh",
        position: "sticky",
        top: 0,
      }}
    >
      <h2
        style={{
          marginBottom: "32px",
          paddingBottom: "14px",
          borderBottom: "2px solid #555",
          fontSize: "22px",
          fontWeight: "700",
          textAlign: "center",
          letterSpacing: "1px",
          color: "#d4d4ff",
        }}
      >
        🎮 Game Zone
      </h2>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {games.map((game, index) => (
          <li
            key={index}
            onClick={() => onSelect(game)}
            style={{
              padding: "14px 20px",
              marginBottom: "14px",
              borderRadius: "12px",
              background: "linear-gradient(145deg, #2a2a4f, #1b1b34)",
              boxShadow: "inset 0 0 0 1px #3c3c64",
              cursor: "pointer",
              transition: "all 0.3s ease",
              fontSize: "16px",
              fontWeight: "500",
              textAlign: "center",
              color: "#f0f0ff",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(145deg, #3b3b6f, #2c2c54)";
              e.currentTarget.style.boxShadow = "0 0 8px #6a5acd";
              e.currentTarget.style.color = "#ffffff";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(145deg, #2a2a4f, #1b1b34)";
              e.currentTarget.style.boxShadow = "inset 0 0 0 1px #3c3c64";
              e.currentTarget.style.color = "#f0f0ff";
            }}
          >
            ⭐ {game.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
