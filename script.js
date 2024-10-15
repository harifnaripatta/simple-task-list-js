let tasks = [];

function addTask() {
  const taskInput = document.getElementById("taskInput").value;
  if (taskInput.trim() !== "") {
    tasks.push(taskInput);
    document.getElementById("taskInput").value = ""; // Clear input field
    displayTasks();
  } else {
    alert("Please enter a task.");
  }
}

function removeTask() {
  if (tasks.length > 0) {
    tasks.pop();
    displayTasks();
  } else {
    alert("No tasks to remove.");
  }
}

function displayTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = ""; // Clear existing tasks
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${task}`;
    taskList.appendChild(li);
  });
}
