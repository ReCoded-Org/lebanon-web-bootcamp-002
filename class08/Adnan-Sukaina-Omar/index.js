// write your code here
function squareNumber(number) {
  let squareNumber = number * number;

  return squareNumber;
}

const sol = document.getElementById("solution");
const square = document.getElementById("square-button");

square.addEventListener("click", (e) => {
  const inputNumber = document.getElementById("square-input").value;
  let a = squareNumber(inputNumber);

  sol.innerText = `the number ${inputNumber} = ${a} \n`;
});

//////
function halfOf(num) {
  let half = num / 2;

  return half;
}
const halfInput = document.getElementById("half-input");
const halfBtn = document.getElementById("half-button");
halfBtn.addEventListener("click", (e) => {
  const halfInput = document.getElementById("half-input").value;
  let b = halfOf(halfInput);

  sol.innerText += `Half of ${halfInput} = ${b} \n`;
});

function percentOf(num1, num2) {
  const percent = (num1 / num2) * 100;

  return percent;
}
//const  pOne= document.getElementById("percent1-input");
//const  pTwo= document.getElementById("percent2-input");
const pBtn = document.getElementById("percent-button");
pBtn.addEventListener("click", (e) => {
  const per1 = document.getElementById("percent1-input").value;
  const per2 = document.getElementById("percent2-input").value;
  let c = percentOf(per1, per2);

  sol.innerText += `${per1} is ${c} % of ${per2}`;
});

function areaOfCircle(radius) {
  var area = Math.PI * squareNumber(radius);
  console.log("The area of circle with radius " + radius + " is " + area);
  return area;
}

// const areaInput = document.getElementById("area-input");
const areaBtn = document.getElementById("area-button");
areaBtn.addEventListener("click", (e) => {
  const areaInput = document.getElementById("area-input").value;
  let d = areaOfCircle(areaInput);

  sol.innerText += `The area for a circle with radius ${areaInput} = ${d} \n`;
});
