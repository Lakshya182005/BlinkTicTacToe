import React, { createContext, useReducer } from "react";

let initialState = {
  board: Array(9).fill(null),
  currPlayer: 1,
  winner: null,
  moveCount:{1:0,2:0},
  suddenDeath:0

};

const GameContext = createContext();

function gameRed(state, action) {
  switch (action.type) {
    case "Move": {
      const { index } = action.payload;
      const cell = state.board[index];
      const player = state.currPlayer;
      const opponent = player === 1 ? 2 : 1;

      let newb = [...state.board];

      if (state.winner) {
        return state;
      }
      if (!cell) {
        const symbol = player === 1 ? 'X' : 'O';
        newb[index] = { player, hp: 4, symbol };
    }else if (cell.player === opponent){
        const newHp = cell.hp - 2
        if (newHp<=0){
            newb[index] = null;
        }else{
            newb[index] = {...cell,hp:newHp}
        }
      }

      if (player === 2) {
        newb = newb.map((cell) => {
            if (!cell) return null;
            const decayed = { ...cell, hp: cell.hp - 1 };
            return decayed.hp <= 0 ? null : decayed;
        });
        }

      const newMoveCount = {
        ...state.moveCount,
        [player]: state.moveCount[player] + 1,
      };

      return {
        ...state,
        board: newb,
        currPlayer: player === 1 ? 2 : 1,
        moveCount:newMoveCount
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
