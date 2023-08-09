import React, { useEffect } from "react";
import { gameOptions } from "../gameOptions";

const PlayerButton = ({
  setIsPlayerOneTurn,
  isPlayerOneTurn,
  playerOne,
  setPlayerOne,
  playerTwo,
  setPlayerTwo,
}) => {
  const playerButtonhandler = () => {
    const play = Math.floor(Math.random() * gameOptions.length);
    const selectedOption = gameOptions[play];

    isPlayerOneTurn
      ? setPlayerOne(selectedOption.id)
      : setPlayerTwo(selectedOption.id);

    console.log("playerOne", playerOne);
    console.log("playerTwo", playerTwo);

    setIsPlayerOneTurn(!isPlayerOneTurn);
  };

  return (
    <button className="play-button" onClick={playerButtonhandler}>
      CLICK
    </button>
  );
};

export default PlayerButton;
