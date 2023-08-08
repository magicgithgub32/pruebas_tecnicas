import React from "react";

const PlayButton = ({ isStarted, setIsStarted }) => {
  const playButtonhandler = () => {
    setIsStarted(!isStarted);
  };

  return (
    <button className="play-button" onClick={playButtonhandler}>
      {isStarted ? "STOP" : "PLAY"}
    </button>
  );
};

export default PlayButton;
