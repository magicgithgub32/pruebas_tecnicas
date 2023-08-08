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

////////////////

const zipzap = (arr) => {
  return arr.map((num) =>
    num % 3 === 0
      ? "fizz"
      : num % 5 === 0
      ? "buzz"
      : num % 3 && num % 5 === 0
      ? "fizzbuzz"
      : ""
  );
};

console.log(zipzap([1, 3, 5, 6, 7, 8, 9, 10, 13, 15, 19, 21]));

///////
const fizzbuzz = (num) => {
  return num % 3 === 0 && num % 5 === 0
    ? "fizzbuzz"
    : num % 3 === 0
    ? "fizz"
    : num % 5 === 0
    ? "buzz"
    : num;
};

const print = (num) => {
  for (let i = 1; i <= num; i++) {
    console.log(`${i} : ${fizzbuzz(i)}`);
  }
};

print(16);
