function addPropertyV1(userData, userId) {
    userData.id = userId;

    return userData;
}


function addPropertyV2(userData, userId) {
    let id = { id: userId };

    return Object.assign(userData, id);
}


function addPropertyV3(userData, userId) {
    let id = { id: userId };

    return Object.assign({}, userData, id);
}