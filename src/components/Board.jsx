import React from "react";
import Tile from "./Tile";

const Board = () => {
  return (
    <div className="grid grid-cols-3 gap-2 p-4">
      {Array.from({ length: 9 }).map((i, j) => (
        <Tile key={j} index={j} />
      ))}
    </div>
  );
};

export default Board;
