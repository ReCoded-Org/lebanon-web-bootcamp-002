// write your code here


function squareNumber(num) {
    let squaredNumber = num * num;
    console.log('The result of squaring the number ' + num + ' is ' + squaredNumber);
    return squaredNumber;
}

function halfOf(num) {
    let half = num / 2;
    console.log('Half of ' + num + ' is ' +  half);
    return half;
}

function percentOf(num1, num2) {
    let percent = (num1/num2) * 100;
    console.log(num1 + ' is ' + percent + '% of ' + num2);
    return percent;
}

function areaOfCircle(radius) {
    let area = Math.PI * squareNumber(radius);
    console.log('The area of circle with radius ' + radius + ' is ' + area);
    return area;
}
    
let squareButton = document.getElementById("square-button");
squareButton.addEventListener("click", function() {
  let num = document.getElementById("square-input").value;
  document.getElementById("solution").innerHTML = squareNumber(num);
});
    
let halfButton = document.getElementById("half-button");
halfButton.addEventListener("click", function() {
  let num = document.getElementById("half-input").value;
  document.getElementById("solution").innerHTML = halfOf(num);
});


  let percentButton = document.getElementById("percent-button");
percentButton.addEventListener("click", function() {
  let num1 = document.getElementById("percent1-input").value;
  let num2 = document.getElementById("percent2-input").value;
  document.getElementById("solution").innerHTML = percentOf(num1, num2);
});
    

let areaButton = document.getElementById("area-button");
areaButton.addEventListener("click", function() {
  let num = document.getElementById("area-input").value;
  document.getElementById("solution").innerHTML = areaOfCircle(num);
});
