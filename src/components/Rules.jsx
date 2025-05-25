import React from "react";
import { useNavigate } from "react-router-dom";

const Rules = () => {
  const navigate = useNavigate();

  return (
    <div className="min-w-screen min-h-screen bg-neutral-900 text-white p-6 flex flex-col gap-6 sm:px-12 sm:py-10">
      <div className="max-w-3xl mx-auto space-y-6 text-lg leading-relaxed">
        <p>
          <span className="text-2xl font-bold text-orange-400">Blink Tac Toe</span> is a strategic spin on the classic Tic Tac Toe. Every tile has HP, and every move matters.
        </p>

        <section>
          <h2 className="text-xl font-semibold text-yellow-400">🎮 Game Basics</h2>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Two players take turns placing tiles (X or O) on a 3×3 grid.</li>
            <li>You can place a tile on an empty square.</li>
            <li>Tiles start with <strong>5 HP</strong>.</li>
            <li>You can attack an opponent’s tile to reduce its HP by <strong>2</strong>.</li>
            <li>Your own tiles lose <strong>1 HP</strong> at the end of your turn (decay).</li>
            <li>Tiles with <strong>0 HP</strong> disappear.</li>
            <li><strong>You can’t play on or attack your own tile.</strong></li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-red-400 mt-4">💀 Sudden Death</h2>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>After <strong>15 moves</strong> by both players, sudden death begins.</li>
            <li>No more attacking or HP decay.</li>
            <li>All tiles become permanent — choose wisely.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-emerald-400 mt-4">🏆 How to Win</h2>
          <p className="mt-2">Form a straight line of <strong>3 of your tiles</strong> (row, column, or diagonal) before your opponent does.</p>
        </section>
      </div>

      <button
        onClick={() => navigate("/")}
        className="mt-10 self-center px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 transition text-white text-lg font-medium"
      >
        ⬅️ Back to Home
      </button>
    </div>
  );
};

export default Rules;
