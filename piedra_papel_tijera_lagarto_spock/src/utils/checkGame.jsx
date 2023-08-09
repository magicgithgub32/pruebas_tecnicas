import { gameOptions } from "../gameOptions";

export const checkGame = (isGameOver, setIsGameOver, playerOne, playerTwo) => {
  if (
    isGameOver ||
    playerOne === null ||
    playerTwo === null ||
    playerOne === playerTwo
  ) {
    return;
  }

  console.log("playerOne", playerOne);
  console.log("playerTwo", playerTwo);

  if (gameOptions[playerOne].beats.includes(playerTwo)) {
    alert("🥳 PLAYER ONE WINS 🥳");
    setIsGameOver(true);
  } else if (gameOptions[playerTwo]?.beats.includes(playerOne)) {
    alert("🎉 PLAYER TWO WINS!! 🎉");
    setIsGameOver(true);
  }

  //   if (
  //     (playerOne == 0 && playerTwo == 2) ||
  //     (playerOne == 0 && playerTwo == 3) ||
  //     (playerOne == 1 && playerTwo == 0) ||
  //     (playerOne == 2 && playerTwo == 1) ||
  //     (playerOne == 2 && playerTwo == 3) ||
  //     (playerOne == 3 && playerTwo == 1) ||
  //     (playerOne == 4 && playerTwo == 3) ||
  //     (playerOne == 4 && playerTwo == 0)
  //   ) {
  //     alert("🥳 PLAYER ONE WINS 🥳");
  //     setIsGameOver(true);
  //   }
};
