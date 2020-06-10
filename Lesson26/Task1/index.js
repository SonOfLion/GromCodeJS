import { createCheckBoxElem } from '/checkbox.js';
import { tasks } from '/storage.js';

const renderTasks = (tasksList) => {
    listElem.innerHTML = '';
    const tasksElems = tasksList
        .slice()
        .sort(doneTask)
        .map((task) => {
            const listItemElem = document.createElement('li');
            listItemElem.classList.add('list__item');
            const checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            checkbox.setAttribute('data-id', task.id);
            checkbox.checked = task.done;
            checkbox.classList.add('list__item-checkbox');
            if (task.done) {
                listItemElem.classList.add('list__item_done');
            };
            listItemElem.append(checkbox, task.text);
            return listItemElem;
        });

    listElem.append(...tasksElems);
};