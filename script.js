function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value;

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create a new list item
  const taskList = document.getElementById("taskList");
  const li = document.createElement("li");
  li.textContent = taskText;

  // Create a delete button for each task
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.onclick = function() {
    taskList.removeChild(li);  // Remove the task when clicked
  };

  // Add the delete button to the list item
  li.appendChild(deleteButton);
  taskList.appendChild(li);

  taskInput.value = "";  // Clear the input field
}

