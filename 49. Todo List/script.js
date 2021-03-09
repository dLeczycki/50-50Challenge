const input = document.querySelector('input');
const todoList = document.querySelector('ul.todo-list');


input.addEventListener('keydown', e => {
    if (e.code === 'Enter' && input.value) {
        appendListItem(input.value);
        updateLocalStorage();
    }
})

addClickListener = item => {
    item.addEventListener('click', e => {
        item.classList.toggle('completed');
        updateLocalStorage();
    })

    item.addEventListener('contextmenu', e => {
        e.preventDefault();
        item.remove();
        updateLocalStorage();
    })
}

renderList = () => {
    const todosList = JSON.parse(localStorage.getItem('todosList'));
    todosList.forEach(todo => {
        appendListItem(todo.text, todo.isCompleted);
    })
}

appendListItem = (text, isCompleted) => {
    const newItem = document.createElement('li');
    newItem.textContent = text;
    if (isCompleted) newItem.classList.add('completed');
    addClickListener(newItem);

    todoList.appendChild(newItem);
    input.value = '';
}

updateLocalStorage = () => {
    const liElements = document.querySelectorAll('li');
    const todosList = [];

    liElements.forEach(element => {
        todosList.push({
            text: element.textContent,
            isCompleted: element.classList.contains('completed')
        })
    })

    localStorage.setItem('todosList', JSON.stringify(todosList));
}

renderList();