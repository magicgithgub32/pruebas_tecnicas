import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./Game.css";
import React, { useEffect, useState } from "react";
import PlayButton from "../../components/PlayButton";
import GameBoard from "../../components/GameBoard/GameBoard";
import { checkGame } from "../../utils/checkGame";

const Game = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [isPlayerOneTurn, setIsPlayerOneTurn] = useState(true);
  const [playerOne, setPlayerOne] = useState(null);
  const [playerTwo, setPlayerTwo] = useState(null);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    checkGame(isGameOver, playerOne, playerTwo, setIsGameOver);
  }, [playerOne, playerTwo, isGameOver]);

  return (
    <section className="game-wrapper">
      <Link to={"/Home"}>
        <Button text={"HOME"} />
      </Link>
      <article className="home-button-article">
        <PlayButton
          setIsStarted={setIsStarted}
          isStarted={isStarted}
          setPlayerOne={setPlayerOne}
          setPlayerTwo={setPlayerTwo}
          isGameOver={isGameOver}
        />
      </article>
      {isStarted && (
        <GameBoard
          isPlayerOneTurn={isPlayerOneTurn}
          setIsPlayerOneTurn={setIsPlayerOneTurn}
          playerOne={playerOne}
          setPlayerOne={setPlayerOne}
          playerTwo={playerTwo}
          setPlayerTwo={setPlayerTwo}
          isGameOver={isGameOver}
          setIsGameOver={setIsGameOver}
        />
      )}
    </section>
  );
};

export default Game;
