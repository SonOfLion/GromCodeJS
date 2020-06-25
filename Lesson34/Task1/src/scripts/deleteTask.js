import { setItem } from "./storage.js";
import { getTasksList } from "./tasksGateway.js";
import { deleteTask } from "./tasksGateway.js";
import { renderTasks } from "./renderTask.js";

export const onDeleteTask = (event) => {
    const deleteButton = event.target.classList.contains("list-item__delete-btn"); //++

    if (!deleteButton) return;

    const taskId = event.target //++
        .closest(".list-item")
        .querySelector(".list-item__checkbox").dataset.id;

    deleteTask(taskId) //++
        .then(() => getTasksList())
        .then((newTasksList) => {
            setItem("tasksList", newTasksList);

            renderTasks();
        });
};