document.addEventListener("DOMContentLoaded", contentLoaded);

function contentLoaded(event) {
    var index = 0;
    var todoForm = document.forms["todoForm"];
    var clearButton = document.getElementById("clearButton");
    var markAllButton = document.getElementById("markAllButton");
    var deleteAllButton = document.getElementById("deleteAllButton");

    todoForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const value = todoForm.elements["todoText"].value;

        if (validateForm(value))
        {
            todoForm.elements["todoText"].value = "";

            var checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.id = `todo${index}`;
            checkbox.className = "todoItem";
            checkbox.name = `todo${index}`;
            checkbox.value = `todo${index}`;

            var label = document.createElement("label");
            label.htmlFor = `todo${index}`;
            label.appendChild(document.createTextNode(value));

            var br = document.createElement("br");

            var listTodos = document.getElementById("listTodos");
            listTodos.appendChild(checkbox);
            listTodos.appendChild(label);
            listTodos.appendChild(br);
            index++;
        }
    });
    
    clearButton.addEventListener("click", function() {
        var todoList = document.getElementsByClassName("todoItem");

        if (validateNotEmpty(todoList))
        {
            for (let todoItem of todoList)
                todoItem.checked = false;
        }
    });

    markAllButton.addEventListener("click", function() {
        var todoList = document.getElementsByClassName("todoItem");

        if (validateNotEmpty(todoList))
        {
            for (let todoItem of todoList)
                todoItem.checked = true;
        }
    });

    deleteAllButton.addEventListener("click", function() {
        var todoList = document.getElementsByClassName("todoItem");

        if (validateNotEmpty(todoList))
        {
            var result = confirm("Do you wish to clear your list?");
            if (result) {
                while (listTodos.firstChild)
                    listTodos.removeChild(listTodos.firstChild);
            }
        }
    });
}

function validateForm(value) {
    if (value == "") {
        alert("El campo de texto está vacío");
        return false;
    }    
    return true;
}

function validateNotEmpty(todoList) {
    if (todoList.length == 0)
    {
        alert("The list is empty");
        return false;
    }
    return true;
}