import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center justify-center bg-misty-grey gap-6">
      <h1 className="text-4xl font-bold text-white">Blink Tac Toe</h1>

      <div className="flex flex-col gap-4">
        <button
          onClick={() => navigate("/style")}
          className="px-6 py-3 bg-dusk-orange text-white rounded-lg shadow-md hover:scale-105 transition"
        >
          ▶️ Start Game
        </button>

        <button
          onClick={() => navigate("/rules")}
          className="px-6 py-3 bg-sunset-coral text-white rounded-lg shadow-md hover:scale-105 transition"
        >
          📖 Read Rules
        </button>
      </div>
    </div>
  );
};

export default Home;
