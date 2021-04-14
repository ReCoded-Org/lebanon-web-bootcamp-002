const solution = document.getElementById("solution");

function Show2Digits(number) {
  const digTwo = Math.round(number * 100) / 100;
  return digTwo;
}

//----------------------------------

function squareNumber(num) {
  const square = Math.pow(num, 2);
  console.log(`The result of squaring the number ${num} is ${square}.`);
  return square;
}

const squareNb = document.getElementById("square-button");
const inp = document.getElementById("square-input").value;
squareNb.addEventListener("click", (e) => {
  let square = squareNumber(inp);
  solution.innerHTML = `The result of squaring the number ${inp} is ${square}.`;
});

//------------------------------

function areaOfCircle(radius) {
  let area = Math.PI * radius * 2;
  area = Show2Digits(area);
  console.log(`The area for a circle with radius ${radius} is ${area}.`);
  return area;
}

const circleButton = document.getElementById("area-button");

circleButton.addEventListener("click", function (e) {
  const radius = document.getElementById("area-input").value;
  let area = areaOfCircle(radius);
  solution.innerHTML = `The area for a circle with radius ${radius} is ${area}.`;
});

//--------------------------------

function halfNumber(nb) {
  const y = nb / 2;
  console.log(`Half of ${nb} is ${y}`);
  return y;
}

const halfLabel = document.getElementById("half-input");
const halfButton = document.getElementById("half-button");

halfButton.addEventListener("click", function (e) {
  let n = halfLabel.value;
  let half = halfNumber(n);
  solution.innerText = `Half of ${n} is ${half}`;
});

//----------------------------

function percentOf(n1, n2) {
  let percent = (n1 / n2) * 100;
  percent = Show2Digits(percent);
  console.log(`${n1} is ${percent}% of ${n2}`);
  return percent;
}

const n1Label = document.getElementById("percent1-input");
const n2Label = document.getElementById("percent2-input");
const percentButton = document.getElementById("percent-button");

percentButton.addEventListener("click", function (e) {
  let n1 = n1Label.value;
  let n2 = n2Label.value;
  let percent = percentOf(n1, n2);
  solution.innerText = `${n1} is ${percent}% of ${n2}`;
});
//--------------------------------
const bod = document.getElementsByTagName("body")[0];
bod.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    if (e.target.id === "square-input") {
      const inp = document.getElementById("square-input").value;
      let square = squareNumber(inp);
      solution.innerHTML = `The result of squaring the number ${inp} is ${square}.`;
    } else if (e.target.id === "half-input") {
      const halfLabel = document.getElementById("half-input").value;
      let half = halfNumber(halfLabel);
      solution.innerHTML = `Half of ${halfLabel} is ${half}`;
    } else if (
      e.target.id === "percent1-input" ||
      e.target.id === "percent2-input"
    ) {
      const n1Label = document.getElementById("percent1-input").value;
      const n2Label = document.getElementById("percent2-input").value;
      let percent = percentOf(n1Label, n2Label);
      solution.innerHTML = `${n1Label} is ${percent}% of ${n2Label}`;
    } else if (e.target.id === "area-input") {
      const radius = document.getElementById("area-input").value;
      let area = areaOfCircle(radius);
      solution.innerHTML = `The area for a circle with radius ${radius} is ${area}.`;
    }
  }
});
//--------------------------

function operation(x) {
  const half = halfNumber(x);
  const square = squareNumber(half);
  const area = areaOfCircle(square);
  const percent = percentOf(area, square);
  return percent;
}
