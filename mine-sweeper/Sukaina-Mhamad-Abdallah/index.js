const inp = [
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 1, 0, 1],
    [1, 1, 0, 0]
  ];
  
  function minesweeper(input) {
    let out = input;
    out = out.map((line, i) => {
      return line.map((el, j) => {
        let count = 0;
        let neighboors;
        if (el === 0) {
          neighboors = getNeighboors(i, j, input);
          for (let a = 0; a < neighboors.length; a++) {
            if (neighboors[a] === 1) count++;
          }
          el = count;
        } else {
          el = 9;
        }
        return el;
      });
    });
    return out;
  }
  
  function getNeighboors(i, j, arr) {
    let neighboors = [];
    for (let n = i - 1; n <= i + 1; n++) {
      if (n === -1) n++;
      for (let m = j - 1; m <= j + 1; m++) {
        if (m === -1) m++;
        neighboors.push(arr[n][m]);
        if (m === arr[n].length - 1) break;
      }
      if (n === arr.length - 1) break;
    }
    return neighboors;
  }
  
  console.log(minesweeper(inp));
  