const dimInput1 = document.getElementById("dim-1-input");
const dimInput2 = document.getElementById("dim-2-input");
const shapeSelect = document.getElementById("shape-select");
const shapeForm = document.getElementById("shape-form");
const tableBody = document.getElementById("shapes-table-body");


shapeForm.addEventListener("submit", function(e) {
  e.preventDefault();

  // Task 1: create a new shape instance passing it
  // the required dimensions the selected input
let newShape = new Shape(shapeSelect, dimInput1,dimInput2);
  // Task 2: Call the function 'createTableRow' passing it the
  // object instance created in task 1
  console.log(newShape.type);
  createTableRow(newShape);
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
constructor(type, dimInput1, dimInput2){
  this.dimInput1 = dimInput1.value;
  this.dimInput2 = dimInput2.value;
  this.type = shapeSelect.value;
}

  getType(){
    for(let i = 0;i < types.length; i++){
      if(types[i].id == this.type){
        return types[i].name; 
      }
    }
  }

  getDimension1 (){
    return this.dimInput1;
 }
  getDimension2(){
  if (this.type == 0 || this.type ==1){
  throw 'Parameter for dimension2 is not required!';
  } 
    return this.dimInput2;
  
 }

 calculateArea(){
  if (this.type == 0){
    return  Math.floor(Math.PI* (this.dimInput1**2));
  } else if(this.type == 1) {
    return this.dimInput1 * this.dimInput1 ;

  } else if(this.type == 2) {
    return this.dimInput1 * this.dimInput2;
  } else if(this.type == 3){
    return "it's complicated";
  }
 }

calculateCircumference(){
  if (this.type == 0){
   return Math.floor(2 * Math.PI * this.dimInput1)
  } else if(this.type == 1) {
    return this.dimInput1*4
  } else if(this.type == 2) {
    return (this.dimInput1+this.dimInput2)*2
  } else if(this.type == 3){
    return "it's complicated";
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
