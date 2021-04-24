document.addEventListener("DOMContentLoaded", () => {
    let months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    // Variables
    let taskList;
    let id;
    let taskUl;
    let dateElement;
    let formTask;
    let task;
    let taskDate;
    let priority;
    let strPrio;
    let clear;

    getInputsElements();

    // Classes names
    const CHECK = "fa-check-circle";
    const UNCHECK = "fa-circle-thin";
    const LINE_THROUGH = "lineThrough";


    // Show todays date
    const options = { weekday: "long", month: "short", day: "numeric" };
    const today = new Date();

    dateElement.innerHTML = today.toLocaleDateString("en-US", options);


    //move between elements using tab
    moveBetweenElements();

    // get item from localstorage
    let data = localStorage.getItem("TODO");

    // check if data is not empty
    if (data) {
        document.querySelector("h2").innerHTML = "";
        taskList = JSON.parse(data);
        id = taskList.length; // set the id to the last one in the list
        loadList(taskList); // load the list to the user interface
    } else {
        // if data isn't empty
        taskList = [];
        id = 0;
    }

    // load items to the user's interface
    function loadList(array) {
        array.forEach(function(item) {
            addToDo(item.name, item.date, item.priority, item.id, item.done, item.trash);
        });
    }

    // clear the local storage
    clear.addEventListener("click", function() {
        localStorage.clear();
        location.reload();
    });

    function addToDo(toDo, date, priority, id, done, trash) {

        if (trash) { return; }

        const DONE = done ? CHECK : UNCHECK;
        const LINE = done ? LINE_THROUGH : "";
        const dateT = dateInputFormat(date);

        let spanClass = getSpanClass();



        const item = `<li class="item">
                        <i class="fa ${DONE} co" job="complete" id="${id}"></i>
                        <p class="text ${LINE}">${toDo}</p>
                        <p class="details ${LINE}" > ${dateT} <span class=${spanClass}> ${priority} </span></p>
                        <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
                      </li>
                    `;

        const position = "beforeend";

        taskUl.insertAdjacentHTML(position, item);

        let elmt = document.getElementById(id);
        let nextSibling = elmt.nextElementSibling;

        let isPast = compare(taskDate, today);
        if (isPast) {
            nextSibling.style.backgroundColor = "red";
        }

    }

    // add an item to the list 
    document.querySelector('input[type="submit"]').addEventListener("click", addTask);

    function addTask(event) {
        event.preventDefault();

        getInputValues();


        // if the input isn't empty
        if (taskTitle !== "" && taskDate !== "") {
            document.querySelector("h2").innerHTML = "";

            addToDo(taskTitle, taskDate, strPrio, id, false, false);

            taskList.push({
                name: taskTitle,
                date: taskDate,
                priority: strPrio,
                id: id,
                done: false,
                trash: false
            });

            // add item to localstorage ( this code must be added where the taskList array is updated)
            localStorage.setItem("TODO", JSON.stringify(taskList));

            id++;
            formTask.reset();
        }
    }

    // Color Priority
    function getSpanClass() {
        let spanClass;
        if (strPrio === "Priority 1") {
            spanClass = "priorityHigh";
        }
        if (strPrio === "Priority 2") {
            spanClass = "priorityMedium";
        }
        if (strPrio === "Priority 3") {
            spanClass = "priorityLow";
        }
        return spanClass;
    }

    // complete to do
    function completeToDo(element) {
        element.classList.toggle(CHECK);
        element.classList.toggle(UNCHECK);
        element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
        element.parentNode.querySelector(".details").classList.toggle(LINE_THROUGH);

        taskList[element.id].done = taskList[element.id].done ? false : true;
    }

    // remove to do
    function removeToDo(element) {
        element.parentNode.parentNode.removeChild(element.parentNode);

        taskList[element.id].trash = true;
    }

    // target the items created dynamically

    taskUl.addEventListener("click", function(event) {
        const element = event.target; // return the clicked element inside list
        const elementJob = element.attributes.job.value; // complete or delete

        if (elementJob == "complete") {
            completeToDo(element);
        } else if (elementJob == "delete") {
            removeToDo(element);
        }

        // add item to localstorage ( this code must be added where the LIST array is updated)
        localStorage.setItem("TODO", JSON.stringify(taskList));
    });


    function getInputsElements() {
        clear = document.querySelector(".clear");
        taskUl = document.querySelector("ul");
        dateElement = document.getElementById("todayDate");
        formTask = document.getElementById("Taskform");
        priorityElement = document.getElementById("priorityList");
    }

    function getInputValues() {
        taskTitle = document.getElementById("tasktxt").value;
        taskDate = document.getElementById("input_date").value;
        strPrio = priorityElement.options[priorityElement.selectedIndex].text;
        if (strPrio === "Priority 1") {

        }
    }

    function dateInputFormat(date) {
        let r = date.split("-");
        let mo = r[1].split("");
        mo = mo[1];
        let coco = getMonthName(mo);
        array = [coco, r[2], r[0]];
        let comma = ",";
        date = `${array[0]} ${array[1]}${comma+' '}${array[2]}`;
        return date;
    }

    function getMonthName(mm) {
        let mmm;
        if (mm < 10) {
            mm = "0" + mm;
            mmm = months[mm.split("")[1]];
        } else { mmm = months[mm] }
        return mmm;
    }

    function moveBetweenElements() {
        let f = document.getElementsByTagName("form");
        for (let i = 0; i < f.length; i++) {
            document.addEventListener("keypress", function(ev) {
                if (ev.key === 9) {
                    f[i + 1].focus();
                }
            });
        }
    }

    function compare(date1, date2) {

        let d1 = Date.parse(date1);
        let d2 = Date.parse(date2);

        if (d1 < d2) {
            return true;
        }

        return false;
    }

});