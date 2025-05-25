import React, { createContext, useReducer } from "react";
import CheckWinner from "../utils/CheckWinner";
import { themes } from "../utils/ThemeOptions";

let initialState = {
  board: Array(9).fill(null),
  currPlayer: 1,
  winner: null,
  moveCount: { 1: 0, 2: 0 },
  suddenDeath: false,
  theme: null,
  playerSymbols: { 1: "X", 2: "O" }
};

const GameContext = createContext();

function getRandomPair(emojis) {
  const shuffled = [...emojis].sort(() => 0.5 - Math.random());
  return { 1: shuffled[0], 2: shuffled[1] };
}

function gameRed(state, action) {
  switch (action.type) {
    case "Theme": {
      const selectedTheme = action.payload.theme;
      const themeObj = themes.find(t => t.value === selectedTheme);
      const randomSymbols = getRandomPair(themeObj.emojis);
      return {
        ...state,
        theme: selectedTheme,
        playerSymbols: randomSymbols
      };
    }

    case "Move": {
      const { index } = action.payload;
      const cell = state.board[index];
      const player = state.currPlayer;
      const opponent = player === 1 ? 2 : 1;

      let newb = [...state.board];

      if (state.winner) return state;

      if (cell && cell.player === player) return state;

      if (!state.suddenDeath) {
        if (!cell) {
          const symbol = state.playerSymbols[player];
          newb[index] = { player, hp: 5, symbol };
        } else if (cell.player === opponent) {
          const newHp = cell.hp - 2;
          newb[index] = newHp <= 0 ? null : { ...cell, hp: newHp };
        }

        newb = newb.map((tile) => {
          if (!tile) return null;
          if (tile.player === player) {
            const newHp = tile.hp - 1;
            return newHp <= 0 ? null : { ...tile, hp: newHp };
          }
          return tile;
        });
      } else {
        if (!cell) {
          const symbol = state.playerSymbols[player];
          newb[index] = { player, hp: 5, symbol };
        }
      }

      const newMoveCount = {
        ...state.moveCount,
        [player]: state.moveCount[player] + 1
      };

      const deathFlag = newMoveCount[1] >= 15 ? true : state.suddenDeath;
      const winner = CheckWinner(newb);

      return {
        ...state,
        board: newb,
        currPlayer: player === 1 ? 2 : 1,
        moveCount: newMoveCount,
        suddenDeath: deathFlag,
        winner
      };
    }

    case "Winner":
      return {
        ...state,
        winner: action.payload.winner
      };

      case "Reset":
        return {
          ...initialState,
          theme: state.theme,
          playerSymbols: state.playerSymbols
        };
      

    default:
      return state;
  }
}

const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gameRed, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };