// write your code here

function squareNumber(x) {
  let res = x ** 2;
  console.log(`The result of squaring the number ${x} is ${res}`);
  return res;
}

squareNumber(5);

function halfNumber(x) {
  let res = x / 2;
  console.log(`Half of  ${x} is ${res}`);
  return res;
}
halfNumber(10);

function percentOf(x, y) {
  let res = (x / y) * 100;
  console.log(`${x} is ${res.toFixed(2)}% of ${y}`);
  return res;
}

function areaOfCircle(radius) {
  let res = Math.PI * radius ** 2;
  console.log(
    `The area for a circle with radius ${radius} is ${res.toFixed(2)}`
  );
  return res.toFixed(2);
}

function resolveAll(x) {
  let res1 = halfNumber(x);
  console.log(res1);
  let res2 = squareNumber(res1);
  console.log(res2);
  let res3 = areaOfCircle(res2);
  console.log(res3);
  let res4 = percentOf(res2, res3);
  console.log(res4);
}

let button1 = document.getElementById("square-button");
button1.addEventListener("click", function (e) {
  let input = document.getElementById("square-input").value;
  let fRes = squareNumber(input);
  let ht = (document.getElementById("div-solution").innerText = fRes);
});

let button2 = document.getElementById("half-button");
button2.addEventListener("click", function (e) {
  let input = document.getElementById("half-input").value;
  let fRes = halfNumber(input);
  let ht = (document.getElementById("div-solution").innerText = fRes);
});

let button3 = document.getElementById("percent-button");
button3.addEventListener("click", function (e) {
  let input = document.getElementById("percent1-input").value;
  let input2 = document.getElementById("percent2-input").value;
  let fRes = percentOf(input, input2);
  let ht = (document.getElementById("div-solution").innerText = fRes);
});
let button4 = document.getElementById("area-button");
button4.addEventListener("click", function (e) {
  let input = document.getElementById("area-input").value;
  let fRes = areaOfCircle(input);
  let ht = (document.getElementById("div-solution").innerText = fRes);
});
