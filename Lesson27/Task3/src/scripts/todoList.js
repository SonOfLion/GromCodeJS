import { onCreateTask } from `./createTask.js`
import { onToggleTask } from `./updateTask.js`

export const initTodoListHandlers = () => {
    const createBtnElem = document.querySelector('.create-task-btn')
    createBtnElem.addEventListener('click', onCreateTask)
}

const initTodoListElem = document.querySelector('.list')
initTodoListElem.addEventListener('click', onToggleTask)