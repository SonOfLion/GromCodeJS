export const reposList = document.querySelector('.repo-list');

export const cleanReposList = () => {
    reposList.innerHTML = '';
};

export const renderRepos = list => {
    const reposListElems = list
        .map(({ name }) => {
            const listElem = document.createElement('li');
            listElem.classList.add('repo-list__item');
            listElem.textContent = name;

            return listElem;
        });
    console.log(reposListElems);
    cleanReposList();
    reposList.append(...reposListElems);
};

// repo-list