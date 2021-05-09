let mine = [
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 1, 0, 1],
  [1, 1, 0, 0]
];

function minesweeper(mine) {
  //Change 1 -> 9
  for (let i = 0; i < mine.length; i++) {
    for (let j = 0; j < mine[i].length; j++) {
      if (mine[i][j] === 1) {
        mine[i][j] = 9;
      }
    }
  }

  //Count the mines
  //r is row and c is column
  for (let r = 0; r < mine.length; r++) {
    for (let c = 0; c < mine[r].length; c++) {
      if (mine[r][c] !== 9) {
        //Start with corners
        let count = 0;
        //Top-Left Corner:
        if (r === 0 && c === 0) {
          if (mine[r + 1][c + 1] === 9) {
            count++;
          }
          if (mine[r][c + 1] === 9) {
            count++;
          }
          if (mine[r + 1][c + 1] === 9) {
            count++;
          }
          mine[r][c] = count;
        }
        //Bottom-Left Corner"
        else if (r === mine.length - 1 && c === 0) {
          if (mine[r - 1][c] === 9) {
            count++;
          }
          if (mine[r - 1][c + 1] === 9) {
            count++;
          }
          if (mine[r][c + 1] === 9) {
            count++;
          }
          mine[r][c] = count;
        }
        // //Top-Right Corner"
        else if (r === 0 && c === mine[r].length - 1) {
          if (mine[r][c - 1] === 9) {
            count++;
          }
          if (mine[r + 1][c - 1] === 9) {
            count++;
          }
          if (mine[r + 1][c] === 9) {
            count++;
          }
          mine[r][c] = count;
        }
        // //Bottom-Right Corner"
        else if (r === mine.length - 1 && c === mine[r].length - 1) {
          if (mine[r - 1][c] === 9) {
            count++;
          }
          if (mine[r][c - 1] === 9) {
            count++;
          }
          if (mine[r - 1][c - 1] === 9) {
            count++;
          }
          mine[r][c] = count;
        }
        // //Top Border:
        else if (r === 0 && c > 0 && c < mine.length - 1) {
          if (mine[r][c - 1] === 9) {
            count++;
          }
          if (mine[r][c + 1] === 9) {
            count++;
          }
          if (mine[r + 1][c] === 9) {
            count++;
          }
          if (mine[r + 1][c - 1] === 9) {
            count++;
          }
          if (mine[r + 1][c + 1] === 9) {
            count++;
          }
          mine[r][c] = count;
        }
        // //Bottom Border:
        else if (r === mine.length - 1 && c > 0 && c < mine.length - 1) {
          if (mine[r][c - 1] === 9) {
            count++;
          }
          if (mine[r][c + 1] === 9) {
            count++;
          }
          if (mine[r - 1][c - 1] === 9) {
            count++;
          }
          if (mine[r - 1][c + 1] === 9) {
            count++;
          }
          if (mine[r - 1][c] === 9) {
            count++;
          }
          mine[r][c] = count;
        }
        // //Right Border:
        else if (r < mine.length - 1 && r > 0 && c === mine.length - 1) {
          if (mine[r][c - 1] === 9) {
            count++;
          }
          if (mine[r - 1][c] === 9) {
            count++;
          }
          if (mine[r + 1][c] === 9) {
            count++;
          }
          if (mine[r - 1][c - 1] === 9) {
            count++;
          }
          if (mine[r + 1][c - 1] === 9) {
            count++;
          }
          mine[r][c] = count;
        }
        // //Left Border:
        else if (r < mine.length - 1 && r > 0 && c === 0) {
          if (mine[r - 1][c] === 9) {
            count++;
          }
          if (mine[r - 1][c + 1] === 9) {
            count++;
          }
          if (mine[r][c + 1] === 9) {
            count++;
          }
          if (mine[r + 1][c + 1] === 9) {
            count++;
          }
          if (mine[r + 1][c] === 9) {
            count++;
          }
          mine[r][c] = count;
        }
        // //Middle of Mine:
        else if (
          r < mine.length - 1 &&
          r > 0 &&
          c < mine[r].length - 1 &&
          c > 0
        ) {
          if (mine[r - 1][c - 1] === 9) {
            count++;
          }
          if (mine[r - 1][c] === 9) {
            count++;
          }
          if (mine[r - 1][c + 1] === 9) {
            count++;
          }
          if (mine[r][c + 1] === 9) {
            count++;
          }
          if (mine[r + 1][c + 1] === 9) {
            count++;
          }
          if (mine[r + 1][c] === 9) {
            count++;
          }
          if (mine[r + 1][c - 1] === 9) {
            count++;
          }
          if (mine[r][c - 1] === 9) {
            count++;
          }
          mine[r][c] = count;
        }
      }
    }
  }
  return mine;
}

minesweeper(mine);
