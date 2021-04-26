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

//Add tasks to the list
const form = document.getElementById("submit");
const list = document.getElementById("list");
const defaulTxt = document.getElementById('defaultText');
const input = document.getElementById("input");
const taskDate = document.getElementById("date");

form.addEventListener('submit', function(e){
    defaulTxt.style.display = "none";
    list.innerHTML += `<li>${input.value}<br>${taskDate.value}</li>`;
    input.value = "";
    e.preventDefault();
});