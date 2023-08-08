import PlayerButton from "../PlayerButton";
import "./GameBoard.css";
import React from "react";

const GameBoard = () => {
  return (
    <article className="game-board">
      <section className="players-container">
        <div className="player-one-container"></div>
        <div className="player-two-container"></div>
      </section>

      <section className="player-button-container">
        <PlayerButton />
      </section>
    </article>
  );
};

export default GameBoard;
