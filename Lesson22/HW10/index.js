// 1 при нажатии на кнопку создать запись с текстом и добавить в список
// 2 после добавления почистить поле ввода,если поле пустое не добавлять задачу
// 3 создать событие на чекбокс 
// 4 сравнить значение id  на чекбоксе если элемент чек присвоить значение done
// algo:
// 1. create array of tasks - and create 5 test tasks +++
// 2. write renderTasks (tasks) fucn that render all tasks+++
// 3. addEventListener for .list+++
// 4. addEventListener for create button+++
// 5. checkbox handler - update task in the array and render tasks+++
// 6. create handler - create task object and put to the array and render tasks+++

const tasks = [
    { text: 'Buy milk', done: false, id: '1' },
    { text: 'Pick up Tom from airport', done: false, id: '2' },
    { text: 'Visit party', done: false, id: '3' },
    { text: 'Visit doctor', done: true, id: '4' },
    { text: 'Buy meat', done: true, id: '5' },
];

const listElem = document.querySelector('.list');
const renderTasks = (tasksList) => {
    listElem.innerHTML = '';
    const tasksElems = tasksList
        .slice()
        .sort((a, b) => a.done - b.done)
        .map((task) => {
            // console.log(task);
            const listItemElem = document.createElement('li');
            // console.log(listItemElem);
            listItemElem.classList.add('list__item');
            const checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            checkbox.setAttribute('data-task-id', task.id);
            checkbox.checked = task.done;
            checkbox.classList.add('list__item-checkbox');
            if (task.done) {
                listItemElem.classList.add('list__item_done');
            };
            listItemElem.append(checkbox, task.text);
            // console.log(listItemElem);
            return listItemElem;

        });
    listElem.append(...tasksElems);
};
renderTasks(tasks);
console.log(tasks);
const inputAdd = document.querySelector('.task-input')

const createBtn = document.querySelector('.btn');
createBtn.addEventListener('click', createTask);
// console.log(createBtn);

function createTask(event) {
    const input = document.querySelector('.task-input');
    if (!input.value) return;
    tasks.push({
        text: input.value,
        done: false,
        id: `${tasks.length + 1}`
    })

    input.value = '';
    // console.log(input.value);
    renderTasks(tasks);
    // console.log(tasks);
}

listElem.addEventListener('click', updateTask);

function updateTask(event) {
    const classes = event.target.classList;
    // console.log(classes);
    const checkbox = event.target;
    // console.log(checkbox);
    if (!classes.contains('list__item-checkbox')) return;

    const task = tasks.find(task => task.id === event.target.dataset.taskId);
    // console.log(task)
    task.done = checkbox.checked;
    // console.log(done, true);
    renderTasks(tasks);
}