import React, { useEffect, useState } from "react";
import axios from "axios";
import CardGrid from "./components/CardGrid";
import { ClipLoader } from "react-spinners"; // stylish spinner

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [loading, setLoading] = useState(true); // new state

  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true); // Start loading
      const data = [];

      for (let i = 1; i <= 15; i++) {
        try {
          const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${i}`
          );
          const pokemon = {
            id: response.data.id,
            name: response.data.name,
            image: response.data.sprites.front_default,
          };
          data.push(pokemon);
        } catch (error) {
          console.error(`Error fetching Pokémon ${i}:`, error);
        }
      }

      setPokemon(shuffleArray(data));
      setLoading(false); // Stop loading
    };

    fetchPokemon();
  }, []);

  const handleCardClick = (id) => {
    if (clickedCards.includes(id)) {
      setGameOver(true);
    } else {
      setClickedCards([...clickedCards, id]);
      setScore(score + 1);
      setPokemon(shuffleArray([...pokemon]));
    }
  };

  const resetGame = () => {
    setClickedCards([]);
    setScore(0);
    setGameOver(false);
    setPokemon(shuffleArray([...pokemon]));
  };

  const shuffleArray = (arr) => {
    return arr.sort(() => Math.random() - 0.5);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          background: "linear-gradient(90deg, #ff6a00, #ee0979)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: "10px",
          textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
        }}
      >
        🎮 Pokémon Memory Game
      </h1>

      <h2
        style={{
          fontSize: "1.8rem",
          color: "#333",
          marginBottom: "20px",
          background: "linear-gradient(135deg, #2193b0, #6dd5ed)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
        }}
      >
        🧠 Score: {score}
      </h2>

      {loading ? (
        <div style={{ marginTop: "50px" }}>
          <ClipLoader size={100} color="#ff6a00" loading={loading} />
          <p style={{ marginTop: "20px", fontSize: "18px", color: "#777" }}>
            Loading Pokémon...
          </p>
        </div>
      ) : gameOver ? (
        <div>
          <h2 style={{ color: "red" }}>Game Over!</h2>
          <button
            onClick={resetGame}
            style={{
              padding: "12px 28px",
              fontSize: "16px",
              background: "linear-gradient(135deg, #ff6a00, #ee0979)",
              color: "#fff",
              border: "none",
              borderRadius: "30px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            🔁 Restart
          </button>
        </div>
      ) : (
        <CardGrid cards={pokemon} onCardClick={handleCardClick} />
      )}
    </div>
  );
}

export default App;
