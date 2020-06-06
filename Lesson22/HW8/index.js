const task = document.querySelector('.task-status');

const check = (event) => {
    console.log(event.target.checked);
}

task.addEventListener('change', check);