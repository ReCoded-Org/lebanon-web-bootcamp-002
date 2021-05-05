
let  input = [
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 1, 0, 1],
  [1, 1, 0, 0],
];


function minesweeper(input) {
  for (let i=0; i < input.length ;i++){ 
    for (let j=0; j<input[0].length; j++){
      if(input[i][j] === 1) {
           input [i][j] += 8;
       }
     }
    }
}


function count(data, i, j) {
  let c = 0;

  const prevRow = data[i - 1];
  const currentRow = data[i]
  const nextRow = data[i + 1];

  [prevRow, currentRow, nextRow].forEach(row => {
    if (row) {
      if (row[j - 1] == 9) c++;
      if (row[j] == 9) c++;
      if (row[j + 1] == 9) c++;
    }
  })

  return c;
}

function update(data) {
   minesweeper(data);
  return data.map((a, i) => {
    return a.map((b, j) => {
      return b == 9 ? b : count(data, i, j)
    })
  })
}

const result = update(input);
console.log(result);