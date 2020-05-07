function addPropertyV1(userData, userId) {
    userData = userId;

    return userData;
}

function addPropertyV2(userData, userId) {
    let idUser = { id: userId };

    return Object.assign({}, userData, idUser);
}

function addPropertyV3(userData, userId) {
    let idUser = { id: userId };

    return Object.assign(userData, idUser);
}