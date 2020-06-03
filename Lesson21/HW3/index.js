const getTitle = () => {
    return document.querySelector('.title').textContent;
};

const getDescription = () => {
    return document.querySelector('.about').innerText;
};

const getPlans = () => {
    return document.querySelector('.plans').innerHTML;
};

const getGoal = () => {
    return document.querySelector('.goal').outerHTML;
};

// getTitle();
// getDescription();
// getPlans();
// getGoal();

export { getTitle, getDescription, getPlans, getGoal };