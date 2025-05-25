import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-w-screen min-h-screen w-full flex items-center justify-center bg-[#faf8ef]">
      <div className="w-full max-w-md flex flex-col items-center justify-center p-6">
        <h1 className="text-5xl font-bold text-[#776e65] mb-10">Blink Tac Toe</h1>

        <div className="flex flex-col gap-4 w-full">
          <button
            onClick={() => navigate("/style")}
            className="w-full py-4 bg-[#8f7a66] text-white text-xl font-semibold rounded shadow hover:bg-[#9c8674] transition duration-200"
          >
            ▶️ Start Game
          </button>

          <button
            onClick={() => navigate("/rules")}
            className="w-full py-4 bg-[#edc22e] text-white text-xl font-semibold rounded shadow hover:bg-[#f2d06b] transition duration-200"
          >
            📖 Read Rules
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
