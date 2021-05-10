const dimInput1 = document.getElementById("dim-1-input");
const dimInput2 = document.getElementById("dim-2-input");
const shapeSelect = document.getElementById("shape-select");
const shapeForm = document.getElementById("shape-form");
const tableBody = document.getElementById("shapes-table-body");

shapeForm.addEventListener("submit", function(e) {
  e.preventDefault();
let text= shapeSelect.options[shapeSelect.selectedIndex].text;
let d1=dimInput1.value;
let d2=dimInput2.value;
  // Task 1: create a new shape instance passing it
  // the required dimensions the selected input
let shape = new Shape(text,d1,d2);
createTableRow(shape);
  // Task 2: Call the function 'createTableRow' passing it the
  // object instance created in task 1
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
class Shape{
  constructor(type,dim1,dim2){
    this.type=type;
    this.dim1=dim1;
    if(dim2===''){
    this.dim2 = "this type does not support another dimension";
    }else{
     this.dim2=dim2;
    }
    
  }

  getType(){
    return this.type;
  }
  getDimension1(){
    return this.dim1;
  }
  getDimension2(){
    return this.dim2;
  }
  calculateArea(){
   switch(this.type) {
  case "Square":
  return this.dim1**2;
    break;
  case "Circle":
    return ((Math.PI)*(this.dim1**2)).toFixed(2);
    break;
    case "Rectangle":
    return this.dim1*this.dim2;
    break;
    case "Triangle":
    return (this.dim1*this.dim2)/2;
    break;
  default:
    // code block
}
  }
  calculateCircumference(){
   switch(this.type) {
  case "Square":
  return this.dim1*4;
    break;
  case "Circle":
    return (2*(Math.PI)*(this.dim1)).toFixed(2);
    break;
    case "Rectangle":
    return (this.dim1+this.dim2)*2;
    break;
    case "Triangle":
    return "it's complicated";
    break;
  default:
    // code block
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
