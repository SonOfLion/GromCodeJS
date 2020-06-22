const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks';

/* getTasksList code here */
export const getTasksList = (tasksList) => fetch(baseUrl)
    .then(tasksList => tasksList.json());

// getTasksList(baseUrl)
//     .then(tasksList => console.log(tasksList));



/* getTaskById code here */

export const getTaskById = (taskId) => fetch(`${baseUrl}/${taskId}`)
    .then(taskId => taskId.json());

// getTaskById(2)
//     .then(task => console.log(task));