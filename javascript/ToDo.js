class List {
    constructor(name) {
        this.name = name;
        this.task = [];
    }
    addTask(text) {
        const newTask = new Task(text);
        this.tasks.push(newtask);
    }
    removeTask(id) {
        this.tasks = this.tasks.filter(task => task.id != id);
    }
    rename(name) {
        this.name = name;
    }
}

class Task {
    constructor(text) {
        this.text = text;
        this.completed = false;
    }
    editText(text) {
        this.text = text;
    }
    markCompleted(completed) {
        this.completed = completed;
    }
}

const ListKey = 'lists'

let lists = returnList() || {
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
    save();
};

function showList () {
    let listHtml = '';
    list.forEach((lists) => {
        listHtml += `<li class="list-group-items">${list.name}</li> <button onclick=delete()></button>`
    });
    document.getElementById('listHere').innerHTML = listHtml;
    showTodo ()

};

function addTodo() {
    const text = document.getElementById("todo-input").value;
    if(text) {
        currentList.todos.push({
            newTodo = new Task(text)
        })
        showTodo();
    }  
    save();
}

function showTodo () {
    let todoHTML ='';
    itemsTodo.forEach((itemTodo) => {
        listHTML+= `<li class="list-group-items" onclick=markComplete()>${itemTodo}</li> <button onclick=edit()>Edit</button> <button onclick=delete()></button>`
    });
    document.getElementById('todosHere').innerHTML = todoHTML;

};

function edit () {
    
}

/*
<button id="editTodo" onclick="editTodo()>Edit</button><button id="editStopTodo" onclick="editStopTodo()>Done</button>

function editTodo() {
    li.contentEditable = true;
}

function editStopTodo() {
    li.contentEditable = false;
}*/

function save() {
    localStorage.setItem('ListKey', JSON.stringify(lists));
} 

function returnList() {
    return JSON.parse(localStorage.getItem(ListKey))
}