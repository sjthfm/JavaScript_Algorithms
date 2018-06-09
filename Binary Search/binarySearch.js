// assume sorted by value -> least to greatest
function binarySearch(arr, key) {
    var midIndex = Math.floor(arr.length / 2);
    var midEle = arr[midIndex];

    if (midEle === key) { return true;
    } else if (midEle < key && arr.length > 1) {
        return binarySearch(arr.splice(midIndex, arr.length), key);
    } else if (midEle > key && arr.length > 1) {
        return binarySearch(arr.splice(0, midIndex), key);
    } else {
        return false;
    }
}

console.log(binarySearch([5, 6, 7, 8, 9, 15, 55, 71], 55));