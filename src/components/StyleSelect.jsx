import React, { useContext } from 'react'
import { GameContext } from '../context/GameContext'
import { useNavigate } from "react-router-dom";

function StyleSelect() {
  const { dispatch } = useContext(GameContext)
  const navigate = useNavigate();

  return (
    <div>
      <h1>Choose your game's theme</h1>
      <button onClick={() => {
        dispatch({ type: "Theme", payload: { theme: "animals" } });
        navigate("/game-animals");
      }}>
        Animals
      </button>
      <button onClick={() => {
        dispatch({ type: "Theme", payload: { theme: "food" } });
        navigate("/game-food");
      }}>
        Food
      </button>
      <button onClick={() => {
        dispatch({ type: "Theme", payload: { theme: "sports" } });
        navigate("/game-sports");
      }}>
        Sports
      </button>
    </div>
  )
}

export default StyleSelect