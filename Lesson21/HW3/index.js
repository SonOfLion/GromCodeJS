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
    const plans = document.querySelector('.plans').innerHTML;

    console.dir(plans);
    return plans;
}

function getGoal() {
    const goal = document.querySelector('.goal').innerHTML;

    console.dir(goal);
    return goal;
}

getTitle();
getDescription();
getPlans();
getGoal();

export { getTitle, getDescription, getPlans, getGoal };