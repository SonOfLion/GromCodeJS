export function requestUserData(userId, callback) {
    if (userId === 'broken') {
        callback(null, 'Failed to load user data');
        return;
    };

    setTimeout(() => callback({
        userId,
        email: `${userId}@example`,
    }), Math.ceil(Math.random() * 1 + 3) * 1000);
}