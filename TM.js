var tasks = [];

function addTask() 
{
    var taskName = document.getElementById("taskName").value;
    var deadline = document.getElementById("deadline").value;
    var priority = document.getElementById("priority").value;
    var labels = document.getElementById("labels").value;

    var task = {
        name: taskName,
        deadline: deadline,
        priority: priority,
        labels: labels};

    tasks.push(task);
    updateTaskList();
}

function deleteTask(index) 
{
    tasks.splice(index, 1);
    updateTaskList();
}

function editTask(index) {
    var task = tasks[index];
    document.getElementById("taskName").value = task.name;
    document.getElementById("deadline").value = task.deadline;
    document.getElementById("priority").value = task.priority;
    document.getElementById("labels").value = task.labels;

    var updateButton = document.createElement("button");
    updateButton.innerHTML = "Update Task";
    updateButton.onclick = function() {
        updateTask(index);
    };

    var taskForm = document.querySelector(".task-form");
    var addButton = taskForm.querySelector("button");
    taskForm.replaceChild(updateButton, addButton);
}


function updateTask(index) 
{
    var taskName = document.getElementById("taskName").value;
    var deadline = document.getElementById("deadline").value;
    var priority = document.getElementById("priority").value;
    var labels = document.getElementById("labels").value;

    var updatedTask = {
        name: taskName,
        deadline: deadline,
        priority: priority,
        labels: labels
    };

    tasks[index] = updatedTask;
    updateTaskList();
    resetForm();
}

function resetForm() {
    document.getElementById("taskName").value = "";
    document.getElementById("deadline").value = "";
    document.getElementById("priority").value = "high";
    document.getElementById("labels").value = "";

    var addButton = document.createElement("button");
    addButton.innerHTML = "Add Task";
    addButton.onclick = addTask;

    var taskForm = document.querySelector(".task-form");
    var updateButton = taskForm.querySelector("button");
    taskForm.replaceChild(addButton, updateButton);
}

function updateTaskList() 
{
    var taskList = document.getElementById("tasks");
    taskList.innerHTML = "";

    tasks.forEach(function(task, index) {
        var listItem = document.createElement("li");
        listItem.innerHTML = `
            <strong>${task.name}</strong><br>
            Deadline: ${task.deadline}<br>
            Priority: ${task.priority}<br>
            Labels: ${task.labels}<br>
            <button onclick="editTask(${index})">Edit</button>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(listItem);
    });
}
