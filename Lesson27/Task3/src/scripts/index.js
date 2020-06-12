import { initTodoListHandlers } from '.todoList.j';
import { renderTasks } from '.renderTask.js';

document.addEventListener("DOMContentLoaded", () => {
    renderTasks();
    initTodoListHandlers();
});

const onStorageChange = (e) => {
    if (e.key === 'tasksList') renderTasks();
};

window.addEventListener('storage', onStorageChange);