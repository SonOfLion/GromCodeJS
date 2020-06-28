import { fetchUserData, fetchRespositories } from './gateWays.js';
import { renderUserData } from './user.js';
import { renderRepos, cleanReposList } from './repos.js';
import { showSpinner, hideSpinner } from './spinner.js';
const defaultUser = {
    avatar_url: 'https://avatars3.githubusercontent.com/u10001',
    name: '',
    location: '',
};

renderUserData(defaultUser);

const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');
export const reposList = document.querySelector('.repo-list');

const onSearchUser = async() => {
    showSpinner();
    cleanReposList();
    const userName = userNameInputElem.value;
    try {
        const userData = await fetchUserData(userName);
        renderUserData(userData);
        const reposList = await fetchRespositories(userData.repos_url);
        renderRepos(reposList);
    } catch (err) {
        alert(err.message);
    } finally {
        hideSpinner();
    }



    // fetchUserData(userName)
    //     .then(userData => {
    //         renderUserData(userData);
    //         console.log(userData.repos_url);
    //         return userData.repos_url;
    //     })
    //     .then(url => fetchRespositories(url))
    //     .then(reposList => {
    //         console.log(reposList);
    //         renderRepos(reposList);
    //     })
    //     .catch(err => {
    //         alert(err.message)
    //     })
    //     .finally(() => {
    //         hideSpinner();
    //     });
};

showUserBtnElem.addEventListener('click', onSearchUser);