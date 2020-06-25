import { onCreateTask } from './createTask.js';
import { onToggleTask } from './updateTask.js';
import { onDeleteTask } from './deleteTask.js';

export const initTodoListHandlers = () => {
    const createBtnElem = document.querySelector('.create-task-btn');
    createBtnElem.addEventListener('click', onCreateTask);
}

const initTodoListElem = document.querySelector('.list');
initTodoListElem.addEventListener('click', onToggleTask);
initTodoListElem.addEventListener('click', onDeleteTask);