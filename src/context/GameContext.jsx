import React, { createContext, useReducer } from "react";

let initialState = {
  board: Array(9).fill(null),
  currPlayer: "X",
  winner: null
};

const GameContext = createContext();

function gameRed(state, action) {
  switch (action.type) {
    case "Move": {
      let newb = [...state.board];
      if (newb[action.payload.index] || state.winner) {
        return state;
      }
      newb[action.payload.index] = state.currPlayer;
      return {
        ...state,
        board: newb,
        currPlayer: state.currPlayer === "X" ? "O" : "X"
      };
    }
    case "Winner":
      return {
        ...state,
        winner: action.payload.winner
      };
    case "Reset":
      return initialState;
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
