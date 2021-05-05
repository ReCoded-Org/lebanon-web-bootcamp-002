//Set the date of today
function getDate (sp) {
    today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1; //As January is 0.
    let yyyy = today.getFullYear();
    
    if(dd<10)
     dd='0'+dd;
    if(mm<10)
     mm='0'+mm;
    return (mm+sp+dd+sp+yyyy);
}

let todayH1 = document.getElementById('todayDate');
let date = getDate('/');
todayH1.innerText = date;

// //Add tasks to the list
const form = document.getElementById("submit");
const list = document.getElementById("list");
const defaulTxt = document.getElementById('defaultText');
const input = document.getElementById("input");
const taskDate = document.getElementById("date");
const priority = document.getElementById("priorities");

//tasks list and task object
let allTasks = [];

let to_do = {
    task : input.value,
    date : taskDate.value,
    priority : priority.value
};

form.addEventListener('submit', function(e){
    e.preventDefault();
    defaulTxt.style.display = "none";

    let item = document.createElement("li")
    item.innerHTML = `<input type="checkbox" class = "check"><span class="title">${input.value}</span><br>${taskDate.value} ${priority.value}`;
    list.appendChild(item);

    let checkBox = item.children[0];
    let title = item.children[1];

    checkBox.addEventListener('change', function(e){
        if(checkBox.checked ){
            title.style.textDecoration = "line-through";
        } else{
            title.style.textDecoration = "none";
        }
    });

    //make object of this task and add it to the list
    let obj = {...to_do}
    obj.task = input.value;
    obj.date = taskDate.value;
    obj.priority = priority.value;
    allTasks.push(obj);
    

    //set the inputs value to none
    input.value = "";
    taskDate.value = "";
    priority.value = "Priority 1";
});