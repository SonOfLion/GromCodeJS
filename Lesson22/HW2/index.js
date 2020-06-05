const task = document.querySelector('.task-status');

const checkedChBox = () => {
    console.log(task.checked);
};

task.addEventListener('change', checkedChBox);