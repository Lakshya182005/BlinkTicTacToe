import React, { useContext } from 'react'
import { GameContext } from '../context/GameContext'

function Tile({index}) {
  const {state,dispatch}=useContext(GameContext)
  let cell = state.board[index]

  function handleClick(){
    dispatch({ type: "Move", payload: { index } });
  }
  let burnClass = "bg-white";

  if (cell) {
    if (cell.hp === 4){
      burnClass = "bg-green-100"
      }else if (cell.hp === 3){
        burnClass = "bg-yellow-100"
      }else if (cell.hp === 2){
        burnClass = "bg-orange-200"
      }else if (cell.hp === 1){
        burnClass = "bg-red-300"
      }
  }


  return (
    <div
      onClick={handleClick}
      className={`w-24 h-24 sm:w-28 sm:h-28 border-2 border-gray-600 flex flex-col items-center justify-center font-bold text-2xl cursor-pointer ${burnClass} transition-all`}
    >
      {cell?.symbol || ""}
      {cell && (
        <div className="w-full h-2 bg-gray-300 mt-2 relative">
          <div
            className="absolute top-0 left-0 h-full bg-teal-500"
            style={{ width: `${(cell.hp / 4) * 100}%` }}
          />
        </div>
      )}
    </div>
  );
};


export default Tile