const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.className = "task-text";
  span.textContent = taskText;

  const actions = document.createElement("div");
  actions.className = "actions";

  const editButton = document.createElement("button");
  editButton.className = "edit-btn";
  editButton.textContent = "Edit";
  editButton.onclick = function () {
    editTask(span);
  };

  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-btn";
  deleteButton.textContent = "Delete";
  deleteButton.onclick = function () {
    deleteTask(li);
  };

  actions.appendChild(editButton);
  actions.appendChild(deleteButton);

  li.appendChild(span);
  li.appendChild(actions);

  taskList.appendChild(li);
  taskInput.value = "";
}

function editTask(span) {
  const newTask = prompt("Edit your task:", span.textContent);

  if (newTask !== null && newTask.trim() !== "") {
    span.textContent = newTask.trim();
  }
}

function deleteTask(taskItem) {
  taskItem.remove();
}
