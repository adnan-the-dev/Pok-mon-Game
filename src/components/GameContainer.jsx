export default function GameContainer({ selectedGame }) {
  return (
    <div>
      {/* <h2>{selectedGame?.name || "Select a Game"}</h2> */}
      <div style={{ marginTop: "" }}>{selectedGame?.component()}</div>
    </div>
  );
}
