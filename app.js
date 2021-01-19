//ui vars
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");

const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");
//Load All Event Listeners
loadEventListeners();
//Load All Event Listeners
function loadEventListeners() {
  //add task Event
  form.addEventListener("submit", addTask);
}

//Add Task Function
function addTask(e) {
  if (taskInput.value === "") {
    alert("Add A task");
  }
  //creat li elements
  const li = document.createElement("li");
  // add a class
  li.className = "collection-item";
  //add text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Creat NEw
  const link = document.createElement("a");
  link.className = "delete-item secondary-content";
  link.innerHTML = '<i class="fa fa-remove"></i>';
  //append to the li
  li.appendChild(link);
  // append li to ul
  taskList.appendChild(li);
  //clear input
  taskInput.value === "";
  e.preventDefault();
}
