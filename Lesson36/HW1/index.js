export const getUsersBlogs = async USERID => {
    try {
        return Promise.all(USERID.map(user =>
            fetchUsers(user)
            .then(userData => userData.blog)
        ));
    } catch (error) {
        console.error(error);
    }
};

const fetchUsers = async users => {
    const answer = await fetch(`https://api.github.com/users/${users}`);

    if (answer.ok) {
        return answer.json();
    }
};

getUsersBlogs(['google', 'facebook', 'gaearon'])
    .then(linksList => console.log(linksList));