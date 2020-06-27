export const fetchUser = async USERID => {
    try {
        const response = await fetch(`https://api.github.com/users/${USERID}`);
        if (!response.ok) {
            return null;
        }
        const userData = await response.json();
        return userData;
    } catch (err) {
        throw new Error('Failed to fetch user');
    }
};

fetchUser('facebook')
    .then(userData => console.log(userData))
    .catch(err => alert(err.message));