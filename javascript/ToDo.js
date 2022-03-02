class List {
    constructor(name) {
        this.name = name;
        this.todos = [];
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

let lists = returnList() || [
    {
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
    }
];

currentList = lists[0]


function addList() {
    const text = document.getElementById('list-input').value;
    if(text) {
      const newList = new List(text)
      lists.push(newList)
      showList();
    }
    save();
};

function addTodo() {
    const text = document.getElementById("todo-input").value;
    if(text) {
        const newTodo = new Task(text)
        currentList.todos.push(newTodo)
        showTodo();
    }  
    save();
}

function showList () {
    let listHtml = '';
    lists.forEach((list, index) => {
        listHtml += `<li class="list-group-items" onclick="current(${index})">${list.name}</li> <button onclick=delete()></button>`
    });
    document.getElementById('listHere').innerHTML = listHtml;
    showTodo ();

};

function showTodo () {
    let todoHTML ='';
    currentList.todos.forEach((todo) => {
        todoHTML+= `<li class="list-group-items" onclick=markComplete()>${todo.text}</li> <button onclick=edit()>Edit</button> <button onclick=delete()></button>`
    });
    document.getElementById('todosHere').innerHTML = todoHTML;

};

function current (i) {
    currentList = lists[i];
    showTodo ();
}

function edit () {
    
}

function save() {
    localStorage.setItem('ListKey', JSON.stringify(lists));
} 

function returnList() {
    return JSON.parse(localStorage.getItem(ListKey))
}