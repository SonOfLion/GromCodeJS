function checker(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }

    let minElOfArray = arr[0];
    let maxElOfArray = arr[0];
    let sumOfMinMaxArr = 0;

    for (let i = 0; i < arr.length; i++) {
        if (maxElOfArray < arr[i]) {
            maxElOfArray = arr[i];
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (minElOfArray > arr[i]) {
            minElOfArray = arr[i];
        }
    }

    sumOfMinMaxArr = minElOfArray + maxElOfArray;
    if (sum > 1000) {
        return true;
    } else {
        return false;
    }

}