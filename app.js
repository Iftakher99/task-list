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
  // remove task event
  taskList.addEventListener("click", removeTask);
  //clear task Event
  clearBtn.addEventListener("click", clearTasks);
  //filter task Event
  filter.addEventListener("keyup", filterTasks);
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
  taskInput.value = "";
  e.preventDefault();
}

// Remove Task
function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are You sure?")) {
      e.target.parentElement.parentElement.remove();
    }
  }
}
//Clear All tsk function
function clearTasks() {
  // taskList.innerHTML = "";

  //Faster way
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}
//Filtering Task
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll(".collection-item").forEach(function (task) {
    const item = task.firstChild.textContent;
    if (item.toLocaleLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}
