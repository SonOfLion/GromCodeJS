import { renderTasks } from './renderTask.js';
import { getItem, setItem } from './storage.js';
import { updateTask, getTasksList } from './tasksGateway.js';

export const onToggleTask = (e) => {
    const isCheckbox = e.target.classList.contains('list-item__checkbox');

    if (!isCheckbox) {
        return;
    }
    const taskId = e.target.dataset.id;
    const tasksList = getItem('tasksList');
    const { text, createDate } = tasksList
        .find(task => task.id === taskId);
    const done = e.target.checked;

    const updatedTask = {
        text,
        createDate,
        done,
        doneDate: done ?
            new Date().toISOString() : null,
    };
    updateTask(taskId, updatedTask)
        .then(() => getTasksList())
        .then(newTasksList => {
            setItem('tasksList', newTasksList);
            renderTasks();
        });
    // const newTasksList = tasksList.map((task) => {
    //     if (task.id === e.target.dataset.id) {
    //         const done = e.target.checked;
    //         return {
    //             ...task,
    //             done,
    //             doneDate: done ?
    //                 new Date().toISOString() : null,
    //         };
    //     }
    //     return task;
    // });

    // setItem("tasksList", newTasksList);

    // renderTasks();
};

//1. Preperate data
//2. Write data to data Bace
//3. Read new data from server
//4. Save new data to front-end storage
//5. Update UI baced on new data