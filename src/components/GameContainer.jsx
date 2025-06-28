export default function GameContainer({ selectedGame }) {
  return (
    <div style={{ padding: "20px", flexGrow: 1 }}>
      {/* <h2>{selectedGame?.name || "Select a Game"}</h2> */}
      <div style={{ marginTop: "" }}>{selectedGame?.component()}</div>
    </div>
  );
}
