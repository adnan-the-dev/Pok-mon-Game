import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import GameContainer from "./components/GameContainer";
import { gamesList } from "./games";

function App() {
  const [selectedGame, setSelectedGame] = useState(null);
  const navigate = useNavigate();

  const handleSelect = (game) => {
    setSelectedGame(game);
    navigate(`/game/${game.name.toLowerCase().replace(/\s+/g, "-")}`);
  };

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "Arial" }}>
      <Sidebar onSelect={handleSelect} games={gamesList} />
      <div style={{ flexGrow: 1, overflow: "auto" }}>
        <Routes>
          <Route
            path="/"
            element={
              selectedGame ? (
                <GameContainer selectedGame={selectedGame} />
              ) : (
                <div style={{ padding: "40px", fontSize: "24px", color: "#666" }}>
                  🎮 Please select a game from the sidebar to begin playing!
                </div>
              )
            }
          />
          {gamesList.map((game) => (
            <Route
              key={game.name}
              path={`/game/${game.name.toLowerCase().replace(/\s+/g, "-")}`}
              element={<GameContainer selectedGame={game} />}
            />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default App;
