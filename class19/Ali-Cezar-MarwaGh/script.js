
const dimInput1 = document.getElementById("dim-1-input");
const dimInput2 = document.getElementById("dim-2-input");
const shapeSelect = document.getElementById("shape-select");
const shapeForm = document.getElementById("shape-form");
const tableBody = document.getElementById("shapes-table-body");

shapeForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Task 1: create a new shape instance passing it
  // the required dimensions the selected input

let text = shapeSelect.options[shapeSelect.selectedIndex].text;

let shape = new Shape(text, dimInput1, dimInput2);

  // Task 2: Call the function 'createTableRow' passing it the
  // object instance created in task 1

  createTableRow(shape);

});

function createTableRow(shape) {
  const row = document.createElement("tr");
  row.innerHTML = `
  <td>${shape.getType()}</td>
  <td>${shape.getDimension1()}</td>
  <td>${shape.getDimension2()}</td>
  <td>${shape.calculateArea()}</td>
  <td>${shape.calculateCircumference()}
  `;

  tableBody.appendChild(row);
}

const types = [
  { id: 0, name: "Circle" },
  { id: 1, name: "Square" },
  { id: 2, name: "Rectangle" },
  { id: 3, name: "Triangle" }
];

// Task 3: create the Shape class
// with constructor taking a type and 2 dimenstions
// Use the types enumerator above to map select-box ids to types

class Shape {
  constructor(type, dimInput1, dimInput2) {
    this.type = type;
    this.dimInput1 = dimInput1.value;
    if (dimInput2 === "") {
      this.dimInput2 = "None";
    } else {
      this.dimInput2 = dimInput2.value;
    }
  }

  getType() {
    return this.type;
  }
  getDimension1() {
    return this.dimInput1;
  }
  getDimension2() {

    return this.dimInput2;
  }
  calculateArea() {
    if (shapeSelect.value === '0') {
      return ((Math.PI) * (this.dimInput1) ** 2).toFixed(2);
    } else if (shapeSelect.value === '1') {
      return this.dimInput1 ** 2;
    } else if (shapeSelect.value === '2') {
      return this.dimInput1 * this.dimInput2;
    } else if (shapeSelect.value === '3') {
      return "It's Complicated";
    };
  }
  calculateCircumference() {
    if (shapeSelect.value === '0') {
        return (this.dimInput1 * 2 * (Math.PI)).toFixed(2);
    } else if (shapeSelect.value === '1') {
      return this.dimInput1 * 4;
    } else if (shapeSelect.value === '2') {
      return this.dimInput1 * 2 + this.dimInput2 * 2;
    } else if (shapeSelect.value === '3') {
      return "It's Complicated";
    }
  }

}


/*
The class should hold these properties
- type
- dim1
- dim2

and it should hold these methods
- getType()
- getDimension1()
- getDimension2()
- calculateArea()
- calculateCircumference()


Area and circumference calculation should be type dependant
if the shape have only 1 dimension, dimesion 2 can be undefined

for circles, let dim1 be the radius

for triangle circumference, just return "it's complicated"

Search on how to get PI value from JS library.
*/