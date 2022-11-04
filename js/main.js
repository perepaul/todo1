var todoText = document.getElementById('todoText');
var addTodoButton = document.getElementById('addTodoButton');
var todoContent = document.getElementById('todoContent');

var todos = [];

addTodoButton.onclick = () => {
    let text = todoText.value;

    if (text != '') {
        addTodo(text)
    }
}


const addTodo = (text) => {
    todos.push({
        id: todos.length + 1,
        userId: 2,
        title: text,
        completed: false
    })
    displayTodos();
}

const displayTodos = () => {
    let htmlStr = '<ul class="list-group">';
    for (let task of todos) {
        htmlStr += `<li class="list-group-item">`
        htmlStr += `<input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox">`
        htmlStr += `<label class="form-check-label" for="firstCheckbox">${ task.title }</label>`
        htmlStr += `</li>`
    }
    htmlStr += '</ul>'
    todoText.value = '';
    todoContent.innerHTML = htmlStr;
}


