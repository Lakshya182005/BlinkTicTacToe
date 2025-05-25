import React from "react";

function CheckWinner(board) {
  const matches = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let match of matches) {
    const [a, b, c] = match;
    if (
      board[a]?.player &&
      board[b]?.player &&
      board[c]?.player &&
      board[a].player === board[b].player &&
      board[a].player === board[c].player
    ) {
      return board[a].player;
    }
  }

  return null;
}

export default CheckWinner;
