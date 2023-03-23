let todoele = document.getElementById("taskinfo");
let tasklist = document.getElementById("tasklist");

document.getElementById("add").onclick = function () {
  if (todoele.value.length == 0) {
    alert("Enter a task details");
  } else {
    tasklist.innerHTML =
      tasklist.innerHTML +
      `<div class="task"> 
        <input type="checkbox" class="checkbox">&nbsp;&nbsp;
            <span id="work" class="task1">${todoele.value}</span>
        </div>`;
  }
  delet.addEventListener("click", () => {
    tasklist.innerHTML = "";
    allTasks();
  });
};
