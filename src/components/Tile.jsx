import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext';

function Tile({ index }) {
  const { state, dispatch } = useContext(GameContext);
  const cell = state.board[index];

  function handleClick() {
    if (!state.winner && (!cell || cell.player !== state.currPlayer)) {
    dispatch({ type: "Move", payload: { index } });
  }
  }

  let burnClass = "bg-neutral-200";
  if (cell) {
    if (cell.hp === 4) burnClass = "bg-emerald-100";
    else if (cell.hp === 3) burnClass = "bg-yellow-100";
    else if (cell.hp === 2) burnClass = "bg-orange-200";
    else if (cell.hp === 1) burnClass = "bg-red-300";
  }

  return (
    <div
      onClick={handleClick}
      className={`w-24 h-24 sm:w-28 sm:h-28 border-2 border-neutral-600 rounded-xl 
                  flex flex-col items-center justify-center text-2xl font-semibold 
                  ${burnClass} cursor-pointer select-none 
                  hover:scale-[1.03] active:scale-[0.98]`}
    >
      <span className="mb-1">{cell?.symbol || ""}</span>

      {cell && (
        <div className="w-16 h-2 rounded-full bg-neutral-300 mt-1">
          <div
            className="h-full bg-teal-500 rounded-full"
            style={{ width: `${(cell.hp / 4) * 100}%` }}
          />
        </div>
      )}
    </div>
  );
}

export default Tile;
