import React from "react";
import { useNavigate } from "react-router-dom";

const Rules = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen min-w-screen  bg-misty-grey p-6 flex flex-col gap-4 text-white">
      <div className="space-y-4 text-lg leading-relaxed">
        <p>
          <strong>Blink Tac Toe</strong> is a strategic spin on the classic Tic
          Tac Toe. Every tile has HP, and every move matters.
        </p>

        <h2 className="text-xl font-semibold">🎮 Game Basics</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Two players take turns placing tiles (X or O) on a 3×3 grid.</li>
          <li>You can place a tile on an empty square.</li>
          <li>
            Tiles start with <strong>5 HP</strong>.
          </li>
          <li>
            You can attack an opponent’s tile to reduce its HP by{" "}
            <strong>2</strong>.
          </li>
          <li>
            Your own tiles lose <strong>1 HP</strong> at the end of your turn
            (decay).
          </li>
          <li>
            Tiles with <strong>0 HP</strong> disappear.
          </li>
          <li>
            You <strong>can’t play on or attack your own tile</strong>.
          </li>
        </ul>


        <h2 className="text-xl font-semibold mt-6">💀 Sudden Death</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            After <strong>15 moves</strong> by both players, sudden death
            begins.
          </li>
          <li>No more attacking or HP decay.</li>
          <li>All tiles become permanent — choose wisely.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">🏆 How to Win</h2>
        <p>
          Form a straight line of <strong>3 of your tiles</strong> (row, column,
          or diagonal) before your opponent does.
        </p>
      </div>

      <button
        onClick={() => navigate("/")}
        className="mt-6 self-center px-6 py-2 bg-dusk-orange text-white rounded-lg hover:scale-105 transition"
      >
        ⬅️ Back to Home
      </button>
    </div>
  );
};

export default Rules;
