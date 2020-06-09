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
// 7. tasks not completed should will be sorted by date added +++

const tasks = [{
        text: 'Buy milk',
        done: false,
        id: '1',
        createDate: new Date(),
        doneDate: undefined,
    },
    {
        text: 'Pick up Tom from airport',
        done: false,
        id: '2',
        createDate: new Date(),
        doneDate: null,
    },
    {
        text: 'Visit party',
        done: false,
        id: '3',
        createDate: new Date(),
        doneDate: new Date(),
    },
    {
        text: 'Visit doctor',
        done: true,
        id: '4',
        createDate: new Date(),
        doneDate: new Date(),
    },
    {
        text: 'Buy meat',
        done: true,
        id: '5',
        createDate: new Date(),
        doneDate: null,
    },
];

const listElem = document.querySelector('.list');
const renderTasks = (tasksList) => {
    listElem.innerHTML = '';
    const tasksElem = tasksList
        .slice()
        .sort((a, b) => {
            if (a.done !== b.done) return a.done - b.done
            if (a.done) return new Date(b.doneDate) - new Date(a.doneDate)
            return new Date(b.date) - new Date(a.date)
        })
        .map((task) => {
            const listItemElem = document.createElement('li');
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
            return listItemElem;
        });
    listElem.append(...tasksElem);
    // console.log(tasksElem);
};
renderTasks(tasks);
// console.log(tasks);
const inputAdd = document.querySelector('.task-input')

const createBtn = document.querySelector('.btn');
createBtn.addEventListener('click', createTask);

function createTask(event) {
    const input = document.querySelector('.task-input');
    if (!input.value) return;
    tasks.push({
        text: input.value,
        done: false,
        id: `${tasks.length + 1}`,
        date: new Date(),
        doneDate: null
    })

    input.value = '';
    renderTasks(tasks);
}

listElem.addEventListener('click', updateTask);

function updateTask(event) {
    const classes = event.target.classList;
    const checkbox = event.target;
    if (!classes.contains('list__item-checkbox')) return;

    const task = tasks.find(task => task.id === event.target.dataset.taskId);
    task.done = checkbox.checked;
    task.doneDate = new Date()

    renderTasks(tasks);
}