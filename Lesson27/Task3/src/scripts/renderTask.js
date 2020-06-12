import { getItem } from './storage';
const listElem = document.querySelector('.list');

const compareTasks = (a, b) => {
    if (a.done !== b.done) return a.done - b.done
    if (a.done) return new Date(b.doneDate) - new Date(a.doneDate)
    return new Date(b.date) - new Date(a.date)
};

const createCheckbox = ({ done, id }) => {
    const checkboxElem = document.createElement('input');
    checkboxElem.setAttribute('type', 'checkbox');
    checkboxElem.setAttribute('data-id', id);
    checkboxElem.checked = done;
    checkboxElem.classList.add('list__item-checkbox');

    return checkboxElem;
};

const createListItem = ({ text, done, id }) => {
    const listItemElem = document.createElement("li");
    listItemElem.classList.add('list__item');
    const checkboxElem = createCheckbox({ done, id });
    if (done) {
        listItemElem.classList.add('list__item_done');
    }
    listItemElem.append(checkboxElem, text);
    return listItemElem;
};

export const renderTasks = () => {
    const tasksList = getItem('tasksList') || [];
    listElem.innerHTML = '';
    const tasksElems = tasksList.sort(compareTasks).map(createListItem);

    listElem.append(...tasksElems);
};