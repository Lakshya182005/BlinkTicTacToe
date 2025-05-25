import React, { createContext, useReducer } from "react";
import CheckWinner from "../utils/CheckWinner";

let initialState = {
  board: Array(9).fill(null),
  currPlayer: 1,
  winner: null,
  moveCount: { 1: 0, 2: 0 },
  suddenDeath: false
};

const GameContext = createContext();

function gameRed(state, action) {
  switch (action.type) {
    case "Move": {
      console.log(state);
      const { index } = action.payload;
      const cell = state.board[index];
      const player = state.currPlayer;
      const opponent = player === 1 ? 2 : 1;

      let newb = [...state.board];

      if (state.winner) {
        return state;
      }

      if (!state.suddenDeath) {
        if (!cell) {
          const symbol = player === 1 ? "X" : "O";
          newb[index] = { player, hp: 5, symbol };
        } else if (cell.player === opponent) {
          const newHp = cell.hp - 2;
          if (newHp <= 0) {
            newb[index] = null; 
          } else {
            newb[index] = { ...cell, hp: newHp };
          }
        }

        newb = newb.map((tile) => {
          if (!tile) return null;
          if (tile.player === player) {
            const newHp = tile.hp - 1;
            return newHp <= 0 ? null : { ...tile, hp: newHp };
          }
          return tile;
        });
      }else{
        if (!cell) {
          const symbol = player === 1 ? "X" : "O";
          newb[index] = { player, hp: 5, symbol };
        } 
      }

      const newMoveCount = {
        ...state.moveCount,
        [player]: state.moveCount[player] + 1
      };
      let deathFlag = state.suddenDeath;

      if (state.moveCount[1]>= 15) {
        deathFlag = true;
      }
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
