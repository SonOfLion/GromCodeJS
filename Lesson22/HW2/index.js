const task = document.querySelector('.task-status');

task.addEventListener('change', () => {
    console.dir(task.value);
});