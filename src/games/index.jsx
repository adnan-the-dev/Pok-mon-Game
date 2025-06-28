import Pokemoon from "./Pokemoon";
import TicTacToe from "./TicTacToe";
import ColorGuessGame from "./ColorGuessGame"
// import Snake from "./Snake";
// import MemoryCards from "./MemoryCards";

export const gamesList = [
  { name: "TicTack", component: () => <TicTacToe /> },
  { name: "Pokemoon", component: () => <Pokemoon /> },
  { name: "Guess Color Game", component: () => <ColorGuessGame /> },
//   { name: "Memory Cards", component: () => <MemoryCards /> },
];
