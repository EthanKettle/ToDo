//lists

let list = {
    1: {name: "shopping List",
        todos: [
            {
                text: "Salt & Pepper",
                complete: false
            },
            {
                text: "1lbs of Mystery Meat",
                complete: false
            }
        ]
    },
    2: {name: "Chores",
        todos: [
            {
                text: "Dishes",
                complete: false
            },
            {
                text: "Clean Room",
                complete: false
            }
        ]
    },
    3: {name: "TNT Ingredients",
        todos: [
            {
                text: "Gun Powder",
                complete: false
            },
            {
                text: "Sand",
                complete: false
            }
        ]
    },
        
}

let currentList = list[0];

//render todos
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
    document.getElementById('list-input-box').value;
    if (name) {
        list.push();
        
    }

}

//render lists
function renderLists() {
    let listHtml = '<ul>';
    list.forEach((lists) => {
        listHtml += `<li">${list.name}</li>`
    });
    listHtml += '</ul>';
}


// To Do List
function addTodo() {
    const text =
    document.getElementById('todo-input-box').value;
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
}