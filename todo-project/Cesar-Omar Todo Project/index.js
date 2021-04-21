//Add the time
let today = new Date();
let weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let day = weekday[today.getDay()];
let date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
document.getElementById('currentday').innerHTML = day;
document.getElementById('currentdate').innerHTML = date;

//Adding task
document.getElementById('submit').addEventListener('click',addtask);
function addtask(event){
    event.preventDefault();
    let todoinput = document.getElementById('todoinput').value;
    let deadlineinput = document.getElementById('deadline').value;
    if (todoinput === '' || deadlineinput ===''){
        alert("Enter A Valid Task or Date");
    } else {
        let li = document.createElement('li');
        let task = todoinput + ' ' + deadlineinput;
        let t = document.createTextNode(task);
        li.appendChild(t);
        document.getElementById('todolist').appendChild(li);
        document.getElementById('todoform').reset();            
    }
}
