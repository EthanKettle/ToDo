import {Task} from "./task"
import {List} from "./list"

const itemsList = [];
const itemsTodo = [];

document.addEventListener('click', addList);
document.addEventListener('click', addTodo);


function addList() {
    let myList = new List(document.getElementById("list-input").value);
    const itemList = myList;
    itemsList.push(itemList);
    document.getElementById('list-input').value = '';
    showList();

};

function showList () {
    let listHTML ='';
    itemsList.forEach((itemList) => {
        listHTML+= `<li>${itemList}</li>`
    });
    document.getElementById('listHere').innerHTML = listHTML;

};

function addTodo() {
    const itemTodo= document.getElementById("todo-input").value;
    itemsTodo.push(itemTodo);
    document.getElementById('todo-input').value = '';
    showTodo();

}

function showTodo () {
    let todoHTML ='';
    itemsTodo.forEach((itemTodo) => {
        listHTML+= `<li>${itemTodo}</li>`
    });
    document.getElementById('todosHere').innerHTML = todoHTML;

};

/*render todos
function render() {
    let listHtml = '<ul class="list-group">';
    list.forEach((lists) => {
        listHtml += `<li class="list-group-items">${list.name}</li>`
    });
    listHtml += '</ul>';
    document.getElementById('lists').innerHTML = currentList.name;
    document.getElementById('current-list-name').innerText = currentList.name;
    let todosHtml = '<ul class="list-group-flush">';
    currentList.todos.forEach((lists) => {
        todosHtml += `<li class="list-group-items">${list.name}</li>`
    });
    document.getElementById('current-list-todos').innerHTML = todosHtml;
}

//user

function addList() {
    const name =
    document.getElementById('list-input').value;
    if (name) {
        list.push();
        
    }

}


// To Do List
function addTodo() {
    const text =
    document.getElementById('todo-input').value;
    if (text) {
        currentList.todos.push({
            text: text,
            complete: false
        })
        render();
    }
}

function removeList() {
    document.getElementById('removeList');
}

function removeTodo() {
    document.getElementById('removeToDo');
}

function markTodoAsCompleted() {
    if (complete) {

    };
}

function removeAllTodosCompleted() {

}

function save() {
    localStorage.setItem('currentList', JSON.stringify(currentList)); 
    localStorage.setItem('lists', JSON.stringify(lists));
} */