export function requestUser(userId, callback) {
    if (userId === broken) {
        callback(null, 'Failed to load user data');
    };

    setInterval(() => callback({
        userId,
        email: `${userId}@example`,
    }), Math.ceil(Math.random() * 1000 + 3000));
}