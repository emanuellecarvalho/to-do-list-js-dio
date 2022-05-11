let contadorCheckBox = 1;

function adicionaCheckbox(event) {
  let taskInputValue = document.getElementById("task-input").value;

  if (taskInputValue !== "") {
    const containerTarefa = document.createElement("div");
    containerTarefa.setAttribute("class", "task-container");

    const checkbox = document.createElement("input");
    const label = document.createElement("label");

    checkbox.setAttribute("id", "check" + contadorCheckBox);

    checkbox.setAttribute("type", "checkbox");
    containerTarefa.appendChild(checkbox);

    label.innerText = taskInputValue;
    label.setAttribute("for", "check" + contadorCheckBox);
    label.setAttribute("class", "task-item");
    containerTarefa.appendChild(label);

    document.getElementById("tarefas").appendChild(containerTarefa);

    contadorCheckBox++;

    // limpa o texto do input
    document.getElementById("task-input").value = "";
  }
}

document.getElementById("btn-add").addEventListener("click", adicionaCheckbox);

function removeTasks() {
  let deleteTask = document.getElementById("tarefas");
  deleteTask.innerText = "";
}

function eventEnter(event) {
    console.log(event)
  let key = event.which || event.key;
  if (key === 13) { // 13 representa a tecla Enter 
    adicionaCheckbox();
  }
}

const inputEnter = document.getElementById("task-input");
inputEnter.addEventListener("keyup", eventEnter);
