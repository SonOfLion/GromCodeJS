import { renderTasks } from `./renderTasks.js`;
import { getItem, setItem } from `./storage.js`;

export const onCreateTask = () => {
    const taskTitleInputElem = document.querySelector('.task-input');
    const text = taskTitleInputElem.value;
    if (!text) {
        return;
    }

    taskTitleInputElem.value = '';
    const taskList = getItem('tasksList') || [];
    const newTasksList = taskList.concat({
        text,
        done: false,
        date: new Date().toISOString(),
        id: Math.random().toString(),
        doneDate: null,
    });
    setItem('tasksList', newTasksList);

    renderTasks();
};