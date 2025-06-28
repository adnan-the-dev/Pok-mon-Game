import Pokemoon from "./Pokemoon";
import TicTacToe from "./TicTacToe";
import ColorGuessGame from "./ColorGuessGame"

export const gamesList = [
  { name: "TicTack", component: () => <TicTacToe /> },
  { name: "Pokemoon", component: () => <Pokemoon /> },
  { name: "Guess Color Game", component: () => <ColorGuessGame /> },
];
