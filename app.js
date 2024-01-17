let input = document.querySelector("#input");
let listItems = document.querySelector("#list_items");

// Function to add the task, if user is given either given input or not..!
function addTask() {
  if (input.value == "") {
    alert("Por favor, kindly enter a task");
  } else {
    let li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = input.value;
    listItems.appendChild(li);

    let span = document.createElement("span");
    span.className = "spantag";
    span.textContent = "\u00d7";
    li.appendChild(span);
  }
  input.value = "";
}

// function to check the tasks and remove the task

listItems.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName == "LI") {
      e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    }
  },
  false
);
