let input = [
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 1, 0, 1],
  [1, 1, 0, 0],
]
// replace all the 1s with 9s
for (let i =0; i<input.length; i++){
  for (let j=0; j<input[i].length; j++){
    if (input[i][j]===1){
      input[i][j] = 9
    }
  }
}

// checks if the given indecies are valid
function isValid (row, col){
  if (row>=0 && row <4 && col>=0 && col <4){
    return true
  }
}

// this is probably the longest and the worst way to do it. but nothing else worked
function adj(arr){
  for (let i =0; i<input.length; i++){
    for (let j=0; j<input[i].length; j++){
      // Don't increment mines
      if (arr[i][j] === 9){
        continue
      }
      // North element
      if (isValid (i-1 , j) == true){
        if (arr[i-1][j] === 9 ){
          arr[i][j] +=1
        }
      }
      // South element
      if(isValid(i+1 , j) == true){
        if (arr[i+1][j] === 9){
          arr[i][j] += 1
        }
      }
      // East element
      if(isValid(i, j+1) == true){
        if(arr[i][j+1] === 9){
          arr [i][j] +=1
        }
      }
      // West element
      if(isValid(i,j-1) == true){
        if(arr[i][j-1] === 9 ){
          arr[i][j] +=1
        }
      }
      // North East element
      if(isValid(i-1, j+1) == true){
        if (arr[i-1][j+1] === 9 ){
          arr[i][j] +=1
        }
      }
      // North West element
      if(isValid(i-1, j-1) == true){
        if(arr[i-1][j-1] === 9 ){
          arr[i][j] += 1
        }
      }
      // South East element
      if(isValid(i+1, j+1) == true){
        if(arr[i+1][j+1] === 9 ){
          arr[i][j] += 1
        }
      }
      // South West element
      if(isValid(i+1,j-1) ==true){
        if(arr[i+1][j-1] === 9 ){
          arr[i][j] +=1
        }
      }
  }
}

}
adj(input)
console.log(input)
