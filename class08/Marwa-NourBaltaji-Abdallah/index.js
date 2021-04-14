// write your code here
function squareNumber(numb) {
    const sq = numb * numb;
    console.log(`The result of squaring the number ${numb} is ${sq}`);
    return sq;
  }
  function halfNumber(num) {
    const sq = num / 2;
    console.log(`Half of ${num} is ${sq}`);
    return sq;
  }
  
  function percentOf(a, b) {
    const percent = (a * 100) / b;
    console.log(`${a} is ${percent} % of ${b}`);
    return percent;
  }
  
  function areaOfCircle(radius) {
    let area = Math.PI * radius * radius;
    area = area.toFixed(2);
    console.log(`The area for a circle with radius ${radius} is  ${area}`);
    return area;
  }
  
  function multiOperation(num) {
    return percentOf(areaOfCircle(squareNumber(halfNumber(num))));
  }
  document.getElementById("square-button").addEventListener("click", (e) => {
    const n = document.getElementById("square-input").value;
    document.getElementById(
      "solution"
    ).innerText = `Square of ${n} is ${squareNumber(n)}`;
  });
  
  document.getElementById("half-button").addEventListener("click", (e) => {
    const b = document.getElementById("half-input").value;
    document.getElementById("solution").innerText = `half of ${b} is ${halfNumber(
      b
    )}`;
  });
  document.getElementById("percent-button").addEventListener("click", (e) => {
    const n1 = document.getElementById("percent1-input").value;
    const n2 = document.getElementById("percent2-input").value;
    document.getElementById("solution").innerText = `${n1} is ${percentOf(
      n1,
      n2
    )} % of ${n2}`;
  });
  document.getElementById("area-button").addEventListener("click", (e) => {
    const b = document.getElementById("area-input").value;
    document.getElementById(
      "solution"
    ).innerText = `Area of circle of radius ${b} is ${areaOfCircle(b)}`;
  });
  
  document.querySelector("body").addEventListener("keydown", (e) => {
    let key = e.key.toLocaleLowerCase();
    switch (key) {
      case "s":
        const n = document.getElementById("square-input").value;
        if (n !== "") {
          document.getElementById(
            "solution"
          ).innerText = `Square of ${n} is ${squareNumber(n)}`;
        }
        break;
  
      case "h":
        const b = document.getElementById("half-input").value;
        if (b !== "") {
          document.getElementById(
            "solution"
          ).innerText = `half of ${b} is ${halfNumber(b)}`;
        }
        break;
      case "p":
        const n1 = document.getElementById("percent1-input").value;
        const n2 = document.getElementById("percent2-input").value;
        if ((n1 !== "") & (n2 !== "")) {
          document.getElementById("solution").innerText = `${n1} is ${percentOf(
            n1,
            n2
          )} % of ${n2}`;
        }
        break;
      case "a":
        const c = document.getElementById("area-input").value;
        if (c !== "") {
          document.getElementById(
            "solution"
          ).innerText = `Area of circle of radius ${c} is ${areaOfCircle(c)}`;
        }
        break;
      default:
        break;
    }
  });
  