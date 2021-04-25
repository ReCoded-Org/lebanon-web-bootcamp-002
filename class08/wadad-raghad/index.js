// write your code here
const solution = document.getElementById("solution");
function squareNumber(nb) {
  const square = nb * nb;
  console.log(`The result of squaring the number ${nb} is ${square}`);
  return square;
}

const sqBt = document.getElementById("square-button");
const sqIn = document.getElementById("square-input");
sqBt.addEventListener("click", function (e) {
  let sqnb = sqIn.value;
  let square = squareNumber(sqnb);
  solution.innerHTML = `The result of squaring the number ${sqnb} is ${square}.`;
});

function halfNumber(y) {
  let half = y / 2;
  console.log(`Half of ${y} is ${half}`);
  return half;
}

const halfLb = document.getElementById("half-input");
const halfBt = document.getElementById("half-button");

halfBt.addEventListener("click", function (e) {
  let halfN = halfLb.value;
  let half = halfNumber(halfN);
  solution.innerText = `Half of ${halfN} is ${half}`;
});

function percentOf(num1, num2) {
  let percent = (num1 / num2) * 100;
  console.log(`${num1} + "is" + ${percent} + "% of" + ${num2}`);
  return percent;
}

const fraction = document.getElementById("percent1-input");
const whole = document.getElementById("percent2-input");
const percentBt = document.getElementById("percent-button");

percentBt.addEventListener("click", function (e) {
  let f = fraction.value;
  let w = whole.value;
  let percent = percentOf(f, w);
  solution.innerText = `${f} is ${percent}% of ${w}`;
});

function areaOfCircle(radius) {
  let area = Math.PI * radius ** 2;
  console.log(`The area for a circle with radius ${radius} is ${area}.`);
  return area;
}

const circleBt = document.getElementById("area-button");
const ra = document.getElementById("area-input");
circleBt.addEventListener("click", function (e) {
  let radius = ra.value;
  let area = areaOfCircle(radius);
  solution.innerHTML = `The area for a circle with radius ${radius} is ${area}.`;
});
