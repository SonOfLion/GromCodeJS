export const requestUserData = (userId) => {
    const request = new Promise((resolve, reject) => {
        if (userId === 'broken') {
            setTimeout(() => {
                reject(new Error('User not found'));
            }, 500);
        } else {
            setTimeout(() => {
                resolve({
                    name: 'John',
                    age: 17,
                    email: `${userId}@example.com`,
                    userId
                });
            }, 1000);
        }
    });
    return request;
};

requestUserData('user-1')
    .then(data => console.log(data));