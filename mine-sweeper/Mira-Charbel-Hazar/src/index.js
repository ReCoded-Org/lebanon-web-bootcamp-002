import "./styles.css";
let input = [
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 1, 0, 1],
  [1, 1, 0, 0]
];
function checkMines(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      if (input[i][j] === 1) {
        input[i][j] = 9;
      }
    }
  }
}
checkMines(input);

function adjacentCells(input, i, j) {
  let total = 0;
  const prevRow = input[i - 1];
  const currentRow = input[i];
  const nextRow = input[i + 1];
  [prevRow, currentRow, nextRow].forEach((row) => {
    if (row) {
      if (row[j - 1] === 1) total++;
      if (row[j] === 1) total++;
      if (row[j + 1] === 1) total++;
    }
  });
  return total;
}
function output(input) {
  return input.map((x, i) => {
    return x.map((b, j) => {
      if (y === 1) {
        return (by = 9);
      } else {
        return y === 1 ? y : adjacentCells(input, i, j);
      }
    });
  });
}
