function getNumNeighborMines(inputArray, currentI, currentJ) {
  let counter = 0;
  for (let i = -1; i < 2; i++) {
    let x = currentI + i;
    for (let j = -1; j < 2; j++) {
      let y = currentJ + j;

      if (inputArray[x] && inputArray[x][y]) {
        if (x === currentI && y === currentJ) continue;

        if (inputArray[x][y] === 1) {
          counter++;
        }
      }
    }
  }

  return counter;
}

function minesweeper(inputArray) {
  const resultArr = JSON.parse(JSON.stringify(inputArray));

  //console.log(typeof JSON.stringify(inputArray));
  for (let i = 0; i < inputArray.length; i++) {
    for (let j = 0; j < inputArray[i].length; j++) {
      const input = inputArray[i][j];

      if (input === 0) {
        const numNeighborMines = getNumNeighborMines(inputArray, i, j);

        resultArr[i][j] = numNeighborMines;
      } else if (input === 1) {
        resultArr[i][j] = 9;
      }
    }
  }
  return resultArr;
}

console.log(
  minesweeper([
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 1, 0, 1],
    [1, 1, 0, 0]
  ])
);
