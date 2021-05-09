const input = [
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 1, 0, 1],
  [1, 1, 0, 0],
]
console.log(input);
function count(data, i, j) {
  let c = 0;
  const prevRow = data[i - 1];
  const currentRow = data[i];
  const nextRow = data[i + 1];
  [prevRow, currentRow, nextRow].forEach((row) => {
    if (row) {
      if (row[j - 1] == 1) c++;
      if (row[j] == 1) c++;
      if (row[j + 1] == 1) c++;
    }
  });
  return c;
}
function update(data) {
  return data.map((a, i) => {
    return a.map((b, j) => {
		if(b== 1){
			return b = 9
		} else {
			return b == 1 ? b : count(data, i, j);
		}
    });
  });
}
const result = update(input);
console.log(result);