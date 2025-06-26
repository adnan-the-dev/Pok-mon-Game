import React, { useEffect, useState } from "react";
import ScoreBoard from "./ScoreBoard";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import CardGrid from "./CardGrid";
function Home() {
  const [pokemon, setPokemon] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [loading, setLoading] = useState(true);
  const [playerName, setPlayerName] = useState("");
  const [scoreboard, setScoreboard] = useState([]);
  const [scoreSaved, setScoreSaved] = useState(false);

  // Load saved scores on first load
  useEffect(() => {
    const savedScores = JSON.parse(localStorage.getItem("scoreboard")) || [];
    setScoreboard(savedScores);
  }, []);

  // Fetch Pokémon
  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true);
      const data = [];

      for (let i = 1; i <= 16; i++) {
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
      setLoading(false);
    };

    fetchPokemon();
  }, []);

  // Handle card click
  const handleCardClick = (id, name) => {
    if (clickedCards.includes(id)) {
      setGameOver(true);
    } else {
      setClickedCards([...clickedCards, id]);
      setScore(score + 1);
      setPokemon(shuffleArray([...pokemon]));
      playCry(name);
    }
  };

  // Play cry
  const playCry = (name) => {
    const cryURL = `https://play.pokemonshowdown.com/audio/cries/${name}.mp3`;
    const audio = new Audio(cryURL);
    audio.play().catch((err) => console.error("Audio error:", err));
  };

  // Reset game
  const resetGame = () => {
    setClickedCards([]);
    setScore(0);
    setGameOver(false);
    setPlayerName("");
    setScoreSaved(false);
    setPokemon(shuffleArray([...pokemon]));
  };

  // Shuffle array
  const shuffleArray = (arr) => {
    return arr.sort(() => Math.random() - 0.5);
  };

  // Save score
  const handleSaveScore = () => {
    if (!playerName.trim()) return;

    const newEntry = { name: playerName.trim(), score };
    const updated = [...scoreboard, newEntry];
    setScoreboard(updated);
    localStorage.setItem("scoreboard", JSON.stringify(updated));
    setPlayerName("");
    setScoreSaved(true);
  };
  const handleClearScores = () => {
    localStorage.removeItem("scoreboard");
    setScoreboard([]);
  };

  return (
    <div
      style={{
        display: "flex",
        // flexDirection: "row",
        padding: "20px",
        justifyContent: "space-between",
      }}
    >
      <div style={{ flex: 3, textAlign: "center" }}>
        {/* <div style={{  }}> */}
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
            {!scoreSaved && (
              <>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={playerName}
                  onChange={(e) => setPlayerName(e.target.value)}
                  style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    borderRadius: "30px",
                    border: "2px solid #ff6a00",
                    marginBottom: "10px",
                    outline: "none",
                  }}
                />
                <br />
                <button
                  onClick={handleSaveScore}
                  style={{
                    padding: "10px 24px",
                    fontSize: "16px",
                    background: "linear-gradient(135deg, #6dd5ed, #2193b0)",
                    color: "#fff",
                    border: "none",
                    borderRadius: "30px",
                    cursor: "pointer",
                    marginBottom: "20px",
                  }}
                >
                  💾 Save Score
                </button>
              </>
            )}
            {scoreSaved && (
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
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                🔁 Restart Game
              </button>
            )}
          </div>
        ) : (
          <CardGrid cards={pokemon} onCardClick={handleCardClick} />
        )}
      </div>
      <div style={{ width: "20%" }}>
        <ScoreBoard
          scoreboard={scoreboard}
          handleClearScores={handleClearScores}
        />
      </div>
    </div>
  );
}

export default Home;
