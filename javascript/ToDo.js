import {Task} from "./task"
import {List} from "./list"

const lists = {
    1: {
      name: "Shopping list",
      todos: [
        {
          text: 'bananas',
          completed: false
        },
        {
          text: '1 lbs ground turkey',
          completed: false
        }
      ]
    },
};

currentList = lists[0]

document.addEventListener('click', addList);
document.addEventListener('click', addTodo);


function addList() {
    const text = document.getElementById('list-input').value;
    if(text) {
      list.push({
        newList = new List(text)
      })
      showList();
    }
};

function showList () {
    let listHtml = '';
    list.forEach((lists) => {
        listHtml += `<li class="list-group-items">${list.name}</li>`
    });
    document.getElementById('listHere').innerHTML = listHTML;

};

function addTodo() {
    const text = document.getElementById("todo-input").value;
    if(text) {
        currentList.todos.push({
            newTodo = new Task(text)
        })
        showTodo();
    }  
}

function showTodo () {
    let todoHTML ='';
    itemsTodo.forEach((itemTodo) => {
        listHTML+= `<li class="list-group-items" onclick=markComplete()>${itemTodo}</li> <button onclick></button>`
    });
    document.getElementById('todosHere').innerHTML = todoHTML;

};

/*
<button id="editList" onclick="editList()>Edit</button><button id="editStopList" onclick="editStopList()>Done</button>
<button id="editTodo" onclick="editTodo()>Edit</button><button id="editStopTodo" onclick="editStopTodo()>Done</button>

function editTodo() {
    li.contentEditable = true;
}

function editList() {
    li.contentEditable = true;
}

function editStopTodo() {
    li.contentEditable = false;
}

function editStopList() {
    li.contentEditable = false;
}*/

function save() {
    localStorage.setItem('currentList', JSON.stringify(currentList)); 
    localStorage.setItem('lists', JSON.stringify(lists));
} 