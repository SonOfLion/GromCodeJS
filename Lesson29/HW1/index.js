export function requestUserData(userId, callback) {
    if (userId === broken) {
        callback(null, 'Failed to load user data');
        return;
    };

    setInterval(() => callback({
        userId,
        email: `${userId}@example`,
    }), Math.ceil(Math.random() * 1000 + 3000));
}