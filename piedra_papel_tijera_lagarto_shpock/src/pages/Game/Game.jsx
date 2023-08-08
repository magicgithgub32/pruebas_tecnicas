import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./Game.css";
import React, { useState } from "react";
import PlayButton from "../../components/PlayButton";
import GameBoard from "../../components/GameBoard/GameBoard";

const Game = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [playerOneTurn, setPlayerOneTurn] = useState(true);

  return (
    <section className="game-wrapper">
      <Link to={"/Home"}>
        <Button text={"HOME"} />
      </Link>
      <article className="home-button-article">
        <PlayButton setIsStarted={setIsStarted} isStarted={isStarted} />
      </article>
      {isStarted && <GameBoard />}
    </section>
  );
};

export default Game;
