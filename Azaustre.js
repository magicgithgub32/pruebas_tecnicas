const mostOccLetters = (lettersList) => {
  const letters = {};
  lettersList.forEach((letter) => {
    letters[letter] = !letters[letter] ? 1 : (letters[letter] += 1);
  });

  return Object.keys(letters)
    .map((letter) => ({
      name: letter,
      times: letters[letter],
    }))
    .sort((a, b) => b.times - a.times)
    .slice(0, 3)
    .map((letter) => letter.name);
};

console.log(
  mostOccLetters([
    "I",
    "K",
    "G",
    "N",
    "R",
    "R",
    "P",
    "S",
    "L",
    "J",
    "R",
    "O",
    "M",
    "J",
    "J",
    "H",
    "I",
    "O",
    "R",
    "L",
    "L",
    "L",
    "J",
  ])
);
