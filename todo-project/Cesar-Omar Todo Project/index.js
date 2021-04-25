//Add the time
let today = new Date();
let weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let day = weekday[today.getDay()];
let date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
document.getElementById('currentday').innerHTML = day;
document.getElementById('currentdate').innerHTML = date;

//Adding task
// Setting the event
document.getElementById('submit').addEventListener('click',addtask);
function addtask(event){
    let tasks = [];
    event.preventDefault();
    let todoinput = document.getElementById('todoinput').value;
    let deadlineinput = document.getElementById('deadline').value;
    let priorityinput = document.getElementById('priority-box').value;
    
    if (todoinput === '' || deadlineinput ===''){
        alert("Enter A Valid Task or Date");
    } else {
        let taskform = {
            task: todoinput,
            deadline: deadlineinput,
            priority: priorityinput    
        }
        tasks.push(taskform);
        document.getElementById('todoform').reset(); 
        render(tasks)           
    }
}

// Rendering tasks 
function render(tasks){
    document.getElementById('no-task').style.display = 'none';
    for (const task in tasks){
        let span1 = document.createElement('span');
        span1.className = 'task-date';
        let date = document.createTextNode(tasks[task].deadline);
        span1.appendChild(date);

        let span2 = document.createElement('span');
        span2.className = 'task-priority';
        let priority = document.createTextNode(tasks[task].priority);
        span2.appendChild(priority);
        
        let div1 = document.createElement('div');
        div1.appendChild(span1);
        div1.appendChild(span2);

        let span3 = document.createElement('span');
        span3.className = 'task';
        let t = document.createTextNode(tasks[task].task);
        span3.appendChild(t);

        let div2 = document.createElement('div');
        div2.className = 'tasks';
        div2.appendChild(span3);
        div2.appendChild(div1);

        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'task-checkbox';

        let li = document.createElement('li');
        li.appendChild(checkbox);
        li.appendChild(div2);

        document.getElementById('todolist').appendChild(li);

    }
}
let elems = document.getElementsByClassName('task-checkbox');
Array.from(elems).forEach(v => v.addEventListener('change', function(){
    this.parentNode.classList.toggle('checked');
}))