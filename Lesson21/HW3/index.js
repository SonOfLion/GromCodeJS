function getTitle() {
    const textCont = document.querySelector('.title').textContent;

    return textCont;
}

function getDescription() {
    const desc = document.querySelector('.about').innerText;

    return desc;
}

function getPlans() {
    const plan = document.querySelector('.plans').innerHTML;

    return plan;
}

function getGoal() {
    const goal = document.querySelector('.goal').outerHTML;

    return goal;
}

getTitle();
getDescription();
getPlans();
getGoal();

export { getTitle, getDescription, getPlans, getGoal };