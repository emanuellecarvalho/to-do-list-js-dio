let contadorCheckBox = 1;

function adicionaCheckbox() {
    let taskInputValue = document.getElementById('task-input').value;

    if (taskInputValue !== "") {
        const checkbox = document.createElement('input');
        const label = document.createElement('label');


        checkbox.setAttribute('id', 'check' + contadorCheckBox);

        checkbox.setAttribute('type', 'checkbox');
        document.getElementById('tarefas').appendChild(checkbox);


        label.innerText = taskInputValue;
        label.setAttribute('for', 'check' + contadorCheckBox);
        label.setAttribute('class', 'task-item');
        document.getElementById('tarefas').appendChild(label);

        contadorCheckBox++;
    }
}

function removeTasks() {
    let deleteTask = document.getElementById('tarefas');
    deleteTask.innerText = "";
}
