

const dimInput1 = document.getElementById("dim-1-input");
const dimInput2 = document.getElementById("dim-2-input");
const shapeSelect = document.getElementById("shape-select");
const shapeForm = document.getElementById("shape-form");
const tableBody = document.getElementById("shapes-table-body");

dimInput2.style.visibility="hidden";
shapeSelect.addEventListener('click', ()=>{
  if(shapeSelect.value==="1" || shapeSelect.value==="0"){
  dimInput2.style.visibility="hidden";
}
else{
  dimInput2.style.visibility="visible";
}
});


shapeForm.addEventListener("submit", function(e) {
  e.preventDefault();

  // Task 1: create a new shape instance passing it
  // the required dimensions the selected input
  let d1=dimInput1.value;
  let d2=dimInput2.value; 
  let type = shapeSelect.value;
  let shapeForm=new Shape(type,d1,d2);
  
  
  // Task 2: Call the function 'createTableRow' passing it the
  // object instance created in task 1
  createTableRow(shapeForm);
   dimInput1.value="";
   dimInput2.value="";
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
//.style.visibility = 'hidden';
class Shape{
  constructor(type,dim1,dim2){
    this.type=type;
    this.dim1=dim1;
    this.dim2=dim2;
  }
  getType(){
    return types[parseInt(this.type)].name;
  }
 getDimension1(){
   return parseInt(this.dim1);
 }
 getDimension2(){
   if(this.dim2!==""){
    return parseInt(this.dim2);
   }
   else{
     return "";
   }
 }
 calculateArea(dim1,dim2){
   if(this.type==="0")
   {
     return Math.round(Math.PI*this.dim1**2);
   }
   else if(this.type==="1")
   {
     return Math.round(this.dim1**2);
   }
   else if(this.type==="2"){
     return Math.round(this.dim1*this.dim2);
   }
   else if(this.type==="3"){
     return Math.round(0.5*this.dim1*this.dim2);
   }
 }
  calculateCircumference(){
    if(this.type==="0")
   {
     return Math.round(2*Math.PI*this.dim1) ;
   }
   else if(this.type==="1")
   {
     return Math.round(4*this.dim1);
   }
   else if(this.type==="2"){
     return Math.round((2*this.dim1)+(2*this.dim2));
   }
   else if(this.type==="3"){
     return "It's complicated";
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
