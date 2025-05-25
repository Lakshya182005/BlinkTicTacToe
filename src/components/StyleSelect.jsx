import React, { useContext } from "react";
import { GameContext } from "../context/GameContext";
import { useNavigate } from "react-router-dom";

function StyleSelect() {
  const { dispatch } = useContext(GameContext);
  const navigate = useNavigate();

  const handleSelect = (theme, route) => {
    dispatch({ type: "Theme", payload: { theme } });
    navigate(route);
  };

  return (
    <div className="min-w-screen min-h-screen flex items-center justify-center bg-[#faf8ef]">
      <div className="w-full max-w-md flex flex-col items-center p-6 gap-6">
        <h1 className="text-3xl md:text-4xl font-bold text-[#776e65] text-center mb-6">
          Choose Your Game's Theme
        </h1>

        <button
          onClick={() => handleSelect("animals", "/game-animals")}
          className="w-full py-4 bg-[#8f7a66] text-white text-lg font-semibold rounded shadow hover:bg-[#9c8674] transition duration-200"
        >
          🐳 Animals
        </button>

        <button
          onClick={() => handleSelect("food", "/game-food")}
          className="w-full py-4 bg-[#edc22e] text-white text-lg font-semibold rounded shadow hover:bg-[#f2d06b] transition duration-200"
        >
          🍕 Food
        </button>

        <button
          onClick={() => handleSelect("sports", "/game-sports")}
          className="w-full py-4 bg-[#3cba54] text-white text-lg font-semibold rounded shadow hover:bg-[#60cc75] transition duration-200"
        >
          🏀 Sports
        </button>
      </div>
    </div>
  );
}

export default StyleSelect;
