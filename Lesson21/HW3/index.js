function getTitle() {
    return document.querySelector('.title').textContent;
}

function getDescription() {
    return document.querySelector('.about').innerText;
}

function getPlans() {
    return document.querySelector('.plans').innerHTML;
}

function getGoal() {
    return document.querySelector('.goal').outerHTML;
}

getTitle();
getDescription();
getPlans();
getGoal();

export { getTitle, getDescription, getPlans, getGoal };