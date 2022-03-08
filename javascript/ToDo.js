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
        listHtml += `<span><li class="list-group-items" onclick="current(${index})">${list.name}</li> <button onclick=delList()>Delete</button></span>`
    });
    document.getElementById('listHere').innerHTML = listHtml;
    
    showTodo ();

};

function showTodo () {
    let todoHTML ='';
    currentList.todos.forEach((todo, index) => {
        todoHTML+= `<span><li id="todo-li-${index}" class="list-group-items" onclick=edit()>${todo.text}</li> <button onclick=markComplete()>Mark Complete</button><button onclick=delTodo(${index})>Delete</button></span>`
    });
    document.getElementById('todosHere').innerHTML = todoHTML;

};

function current (i) {
    currentList = lists[i];
    showTodo ();
}

function edit () { 
    const text = document.getElementById('todo-li-${index}').value;
    if(text) {
      editText(text)
      showTodo();
    }
    save();
};

function delTodo (x) {
    currentList.todos.splice(x, 1)
    showTodo ();
}

function delList(x) {
    del = lists[x]
    for (let i = 0; i < del.todos.length; i++) {
        del.todos.splice(i, 1)
    }
    lists.splice(x, 1)
    
    
    showList ();
}

function save() {
    localStorage.setItem('ListKey', JSON.stringify(lists));
} 

function returnList() {
    return JSON.parse(localStorage.getItem(ListKey))
}