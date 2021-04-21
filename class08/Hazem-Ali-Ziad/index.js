// write your code here

function squareNumber(y) {
  let sq = y * y;
  console.log(`The result of squaring the number ${y} is ${sq}`);
  return sq;
}

function halfNumber(x) {
  let hn = x / 2;
  console.log(`Half of ${x} is ${x / 2}`);
  return hn;
}

function areaOfCircle(r) {
  let area = (3.14 * Math.pow(r, 2)) / 4;
  console.log(`The area of a circle of radius ${r} is ${area}`);
  return area;
}

function percentOf(a, b) {
  let p = (a / b) * 100;
  console.log(`${a} + "is" + ${p} + "% of" + ${b}`);
  return p;
}

function all(z) {
  let half = halfNumber(z);
  let squared = squareNumber(half);
  let area = areaOfCircle(squared);
  let pe = percentOf(area, squared);
}

let squareButton = document.getElementById("square-button");

squareButton.addEventListener("click", function () {
  let num = document.getElementById("square-input").value;
  let num_i = parseInt(num, 10);
  document.getElementById("solution").innerHTML = squareNumber(num_i);
});
let halfbtn = document.getElementById("half-button");
halfbtn.addEventListener("click", function () {
  let num = document.getElementById("half-input").value;
  document.getElementById("solution").innerHTML = halfNumber(num);
});

let percentbtn = document.getElementById("percent-button");
percentbtn.addEventListener("click", function () {
  let num1 = document.getElementById("percent1-input").value;
  let num2 = document.getElementById("percent2-input").value;
  document.getElementById("solution").innerHTML = percentOf(num1, num2);
});

let circleButton = document.getElementById("area-button");

circleButton.addEventListener("click", function () {
  let a = document.getElementById("area-input");
  document.getElementById("solution").innerHTML = areaOfCircle(a);
});
