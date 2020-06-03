function getTitle() {
    const textCont = document.querySelector('.title').textContent;

    console.dir(textCont);
    return textCont;
}

function getDescription() {
    const desc = document.querySelector('.about').innerText;

    console.dir(desc);
    return desc;
}

function getPlans() {
    const plan = document.querySelector('.plans').innerHTML;

    console.dir(plan);
    return plan;
}

function getGoal() {
    const goal = document.querySelector('.goal').outerHTML;

    console.dir(goal);
    return goal;
}

getTitle();
getDescription();
getPlans();
getGoal();

export { getTitle, getDescription, getPlans, getGoal };