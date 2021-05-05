/*import "./styles.css";*/
//gives today's date
const dateElement = document.getElementById("date");
let options = {
  weekday: "long",
  month: "short",
  day: "numeric",
  year: "numeric"
};
let today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US", options);

//listDiv.addEventListener("change",addComment);
/*const CHECK= "fa-check-circle";
const UNCHECK= "fa-circle-thin";
const LINE_THROUGH= "lineThrough";*/
/*let DONE = done ? CHECK : UNCHECK;
  let LINE = done ? LINE_THROUGH : "";*/
function addComment() {
  let dOfTask = document.getElementById("toDoDate").value;
  let comments = document.getElementById("item").value;
  let prio=document.getElementById("mySelect").value;
  let ul = document.getElementById("list");
  let li = document.createElement("li");

  //phrase that disappears when a task is added
  document.getElementById('par').style.display='none';

  //document.getElementById('par').style.display='block';

//add propreties to an object
let object = {
  valueTask: comments,
  ddLineTask: dOfTask,
  prioTask: prio
};
let array=[];
array.push(object);
renderTask(array);

  function renderTask(array) {
    
    for (let i = 0; i < array.length; i++) {
  li.innerHTML = `  
   <input type="checkbox" id="myCheck"> <label id="text"> ${array[i].valueTask} </label> <br>
     <p>${array[i].ddLineTask},${array[i].prioTask} `;}
    }
    // li.innerHTML = `  
     //<input type="checkbox" id="myCheck"> <label id="text"> ${array[i].valueTask} </label> <br>
      // <p>${dOfTask},${prio} />`;
//alert
  if (comments === "") {
    alert("You must write something!");
  } else {
    ul.appendChild(li);}
    document.getElementById("item").value = "";

//highlight expired dates
    let ddlinevalue =document.getElementById("toDoDate").valueAsDate;
     let now=new Date();
  if (ddlinevalue.getTime() < now.getTime()) {
    li.className+="expired";

   //create a delete button 
   const deleteBtn = document.createElement('span');
   deleteBtn.textContent = 'DELETE';
   deleteBtn.classList.add('remove');
   li.appendChild(deleteBtn);
   //ul.appendChild(li);
   deleteBtn.addEventListener('click', (e) => {
     if (e.target.className == 'remove') {
       const li = e.target.parentElement;
       li.parentNode.removeChild(li); 
     }
     
    });

  };
  // to restore LIST from storage
  //let data = localStorage.getItem("li");
  //if (data == null){
   // LIST=[];
  //}else{
   // LIST=JSON.parse(data);
     //update local storages
  //localStorage.setItem("li", JSON.stringify(LIST));
  //}
  }




