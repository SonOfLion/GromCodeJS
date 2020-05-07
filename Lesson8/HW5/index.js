function addPropertyV1(obj, key, value) {
    obj[key] = value;

    return obj;
}

function addPropertyV2(obj, key, value) {
    let idUser = {
        key: [value]
    };
    return Object.assign(obj, idUser);
}