// empty array to store the added tasks by the user

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];


// Task Counter using Closure
const taskCounter = (() => {
    let count = tasks.length;
    
    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    };

    
})();

// console.log(taskCounter.getCount());





function saveTask() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


//Function to add a task to the list of tasks

function addTask() {

    let userTask = document.getElementById('taskInput');

    let taskTitle = userTask.value.trim();

    if (taskTitle === '') {
        alert('Please enter a task');
        return;
    }

    let priorityPrompt = prompt("Enter Priority(1-High , 2-Medium , 3- Low):", "2");
    priorityPrompt = isNaN(priorityPrompt) || priorityPrompt < 1 || priorityPrompt > 10 ? 2 : Number(priorityPrompt);

    let addNewtask = {
        id: taskCounter.increment(),
        title: taskTitle.charAt(0).toUpperCase() + taskTitle.slice(1),
        status: "pending",
        priorityPrompt: priorityPrompt
    };

    tasks.push(addNewtask);
    userTask.value = '';
    saveTask(); 
    displayTask();


}

function displayTask() {
    let taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        let taskItem = document.createElement('div');
        taskItem.classList.add("task");
        if (task.status === 'complete') taskItem.classList.add("task-complete");

        taskItem.innerHTML = `<span>${task.title}(Priority : ${task.priorityPrompt})</span>


        <div>
            <button class="toggle-btn" onclick="toggleTask(${task.id})">✔</button>
            <button class="remove-btn" onclick="removeTask(${task.id})">✖</button>
        </div>

        `;

        taskList.appendChild(taskItem);




    })
}

//Toggle Task Status

function toggleTask(id) {

    tasks = tasks.map(task =>
        task.id === id ? { ...task, status: task.status === "pending" ? "complete" : "pending" } : task);

    saveTask();
    displayTask();

}

function removeTask(id) {

    tasks = tasks.filter(task => task.id !== id);
    taskCounter.decrement();

    saveTask();
    displayTask();



}

// Sorting Code -------------
function sortTasks() {
    let n = tasks.length;
    for (let i = 0; i < n - 1; ++i) {
        for (let j = 0; j < n - i - 1; ++j) {
            if (tasks[j].priorityPrompt > tasks[j + 1].priorityPrompt) {
                [tasks[j], tasks[j + 1]] = [tasks[j + 1], tasks[j]];
            }
        }
    }
    saveTask();
    displayTask();

}

//Searching Code -------------

// Binary Search 
function searchTask() {
    let inputSearch = document.getElementById("search").value.trim().toLowerCase();
    let sortedTasks = [...tasks].sort((a, b) => a.title.localeCompare(b.title));
    
    let left = 0, right = sortedTasks.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (sortedTasks[mid].title.toLowerCase() === inputSearch) {
            alert(`Task Found: ${sortedTasks[mid].title} (Priority: ${sortedTasks[mid].priorityPrompt})`);
            // console.log( );
            
            return;
        } else if (sortedTasks[mid].title.toLowerCase() < inputSearch) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    alert("Task not found.");
}

// Debounce function for search
function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
}

document.getElementById("search").addEventListener("input", debounce(searchTask, 1000));


setInterval(displayTask, 4000);

displayTask();



