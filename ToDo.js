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

function render() {
    let listHtml = '<ul class="list-group">';
    list.forEach((lists) => {
        listHtml += '<li class="list-group-items">${list.name}</li>'
    });
    listHtml += '</ul>';
    document.getElementById('lists').innerHTML = currentList.name;
    document.getElementById('current-list-name').innerText = currentList.name;
    let todosHtml = '<ul class="list-group-flush">';
    currentList.todos.forEach((lists) => {
        todosHtml += '<li class="list-group-items">${list.name}</li>'
    });
    document.getElementById('current-list-todos').innerHTML = todosHtml;
}

function addTodo() {
    const text =
    document.getElementById('todo-input-box').ariaValueMax;
    if (text) {
        currentList.todos.push({
            text: text,
            complete: false
        })
        render();
    }
}

function addList() {

}

function removeList() {

}

function removeTodo() {

}

function markTodoAsCompleted() {

}

function removeAllTodosCompleted() {

}
