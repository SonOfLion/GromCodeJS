function checkSum(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    if (sum < 100) {
        return true;
    } else {
        return false;
    }

}