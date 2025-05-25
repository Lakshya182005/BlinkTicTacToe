import React, { useContext } from "react";
import Tile from "./Tile";
import { GameContext } from "../context/GameContext";


const Board = () => {
let {state}= useContext(GameContext)
  return (
    <div>
      {state.winner && (
        <div className="text-2xl text-[white] text-center font-bold text-sunset-coral mt-4">
          🎉 Player {state.winner} Wins!
        </div>
      )}
    <div className="grid grid-cols-3 gap-2 p-4">
      
      {Array.from({ length: 9 }).map((i, j) => (
        <Tile key={j} index={j} />
      ))}
    </div>
    </div>
  );
};

export default Board;
