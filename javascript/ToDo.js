class List {
    constructor(name) {
        this.name = name;
        this.todos = [];
    }
    addTask(text) {
        const newTask = new Task(text);
        this.tasks.push(newTask);
    }
    editTask(text) {
        this.text = text;
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
        listHtml += `<li class="list-group-items" onclick="current(${index})">${list.name}<button onclick=delList()><img src="Images/xIcon.png"></button></li>`
    });
    document.getElementById('listHere').innerHTML = listHtml;
    
    showTodo ();

};

function showTodo () {
    let todoHTML ='';
    currentList.todos.forEach((todo, index) => {
        todoHTML += `<li class="list-group-items complete-${todo.completed}"><span contenteditable="true" id="todo-li-${index}">${todo.text}</span><button onclick="edit('todo-li-${index}', ${index})">Save</button><button onclick="delTodo(${index})"><img src="Images/xIcon.png"></button><input onclick="mark(${index},mark-${index})" type="checkbox" id='mark-${index}'></li>`;
    });
    document.getElementById('todosHere').innerHTML = todoHTML;

};

function current (i) {
    currentList = lists[i];
    showTodo ();
}

function edit(id,x) {
    currentList.todos[x].text = (document.getElementById(id).textContent);
    showTodo ();
};

function mark(x,id) {
    let mark = document.getElementById(id);
    if (mark == true) {
        currentList.todos[x].completed = true;
    } else {
        currentList.todos[x].completed = false;
    };
    showTodo ();
};

function delTodo (x) {
    currentList.todos.splice(x, 1)
    showTodo ();
}

function delList(x) {
    lists.splice(x, 1)
    showList ();
}

function save() {
    localStorage.setItem('ListKey', JSON.stringify(lists));
} 

function returnList() {
    return JSON.parse(localStorage.getItem(ListKey))
}