import { onCreateTask } from './createTask';
import { onToggleTask } from './updateTask';

export const initTodoListHandlers = () => {
    const createBtnElem = document.querySelector('.create-task-btn')
    createBtnElem.addEventListener('click', onCreateTask)
}

const initTodoListElem = document.querySelector('.list')
initTodoListElem.addEventListener('click', onToggleTask)