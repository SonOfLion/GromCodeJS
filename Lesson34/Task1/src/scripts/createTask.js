import { renderTasks } from './renderTask.js';
import { getItem, setItem } from './storage.js';
import { createTask, getTasksList } from './tasksGateway.js';

export const onCreateTask = () => {
    const taskTitleInputElem = document.querySelector('.task-input');
    const text = taskTitleInputElem.value;
    if (!text) {
        return;
    };

    taskTitleInputElem.value = '';

    const newTask = {
        text,
        done: false,
        date: new Date().toISOString(),
        id: Math.random().toString(),
        doneDate: null,
    };

    createTask(newTask)
        .then(() => getTasksList())
        .then(newTasksList => {
            setItem('tasksList', newTasksList);

            renderTasks();
        });
};

//1. Preperate data
//2. Write data to data Bace
//3. Read new data from server
//4. Save new data to front-end storage
//5. Update UI baced on new data