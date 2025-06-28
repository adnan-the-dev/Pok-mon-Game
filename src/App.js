import React from "react";
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import GameContainer from "./components/GameContainer";
import { gamesList } from "./games";
function App() {
  const [selectedGame, setSelectedGame] = useState(gamesList[0]);
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
            element={<GameContainer selectedGame={selectedGame} />}
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
