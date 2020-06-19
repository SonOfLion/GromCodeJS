const getRandomNumber = (from, to) =>
    from + Math.random() * (to - from);

const request = url => new Promise(resolve => {
    const randomDelay = getRandomNumber(1000, 3000);

    setTimeout(() => {
        resolve({
            userData: {
                name: 'Tom',
                age: 17,
            },
            source: url
        });
    }, 1000, 3000);
});

const servers = [
    'httpf://server.com/us',
    'httpf://server.com/eu',
    'httpf://server.com/au',
];

export const getUserASAP = (userId) => {
    const userUrls = servers
        .map(serverUrl => `${serverUrl}/users/${userId}`);

    const requests = userUrls
        .map(userUrl => request(userUrl));

    return Promise.race(requests);
};

getUserASAP('user -id-1')
    .then(res => console.log(res));