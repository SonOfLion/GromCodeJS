export const fetchUser = async userId => {
    try {
        const response = await fetch(`https://api.github.com/users/${userId}`);
        if (!response.ok) {
            return null;
        }
        const userData = await response.jason();
        return userData;
    } catch (error) {
        throw new Error('Failed to fetch user');
    }
};

fetchUser('facebook')
    .then(userData => console.log(userData))
    .catch(err => alert(err.message));