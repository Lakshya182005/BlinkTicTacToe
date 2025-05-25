import React, { useContext } from "react";
import Tile from "./Tile";
import { GameContext } from "../context/GameContext";
import { useNavigate } from "react-router-dom";

const Board = () => {
  const { state, dispatch } = useContext(GameContext);
  const navigate = useNavigate();

  const handleReset = () => {
    dispatch({ type: "Reset" });
  };

  const handleNavigate = () => {
    navigate("/style")
  };

  return (
    <div className="min-w-screen min-h-screen flex flex-col items-center justify-center bg-[#fdf6e3] px-4">
      {state.winner && (
        <div className="text-3xl font-bold text-[#776e65] mb-6 text-center">
          🎉 Player {state.winner} Wins!
        </div>
      )}

      <div className="grid grid-cols-3 gap-3 mb-6">
        {Array.from({ length: 9 }).map((_, index) => (
          <Tile key={index} index={index} />
        ))}
      </div>

      <div>
        <button
          onClick={handleReset}
          className="bg-[#8f7a66] text-white text-lg font-semibold m-5 px-6 py-3 rounded shadow hover:bg-[#9c8674] transition duration-200"
        >
          🔁 Play Again
        </button>
        <button
          onClick={handleNavigate}
          className="bg-[#8f7a66] text-white text-lg font-semibold m-5 px-6 py-3 rounded shadow hover:bg-[#9c8674] transition duration-200"
        >
          ▶️ New Theme
        </button>
      </div>
    </div>
  );
};

export default Board;
