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
        listHtml += `<li class="list-group-items">${list.name}</li><button id="editList" onclick="editList()>Edit</button><button id="editStopList" onclick="editStopList()>Done</button>`
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
        listHTML+= `<li class="list-group-items">${itemTodo}</li><button id="editTodo" onclick="editTodo()>Edit</button><button id="editStopTodo" onclick="editStopTodo()>Done</button>`
    });
    document.getElementById('todosHere').innerHTML = todoHTML;

};

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
}
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
    const name = document.getElementById('list-input').value;
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
*/

function save() {
    localStorage.setItem('currentList', JSON.stringify(currentList)); 
    localStorage.setItem('lists', JSON.stringify(lists));
} 