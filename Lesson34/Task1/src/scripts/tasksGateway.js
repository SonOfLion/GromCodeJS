const baceUrl = 'https://5ef46efeac6d1e00168ca095.mockapi.io/api/v1/tasks';

const mapTasks = tasks =>
    tasks.map(({ id, ...rest }) => ({...rest, id: id }));

export const getTasksList = () => {
    return fetch(baceUrl)
        .then(response => response.json())
        .then(tasks => mapTasks(tasks))
};

export const createTask = taskData => {
    return fetch(baceUrl, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(taskdata)
    })
};

export const updateTask = (taskId, updatedTaskData) => {
    return fetch(`${baceUrl}/${taskId}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(updatedTaskData)
    })
};

export const deleteTask = (taskId) => {
    return fetch(`${baceUrl}/${taskId}`, {
        method: 'DELETE',
    });
};