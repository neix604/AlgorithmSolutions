function solution(arr1, arr2) {
    let isEqual = arr1.reduce((a, b) => a + b) == arr2.reduce((a, b) => a + b);
    let check = arr1.reduce((a, b) => a + b) > arr2.reduce((a, b) => a + b);
    if (arr1.length - arr2.length == 0) {
        return isEqual ? 0 : check ? 1 : -1;
    } else {
        return arr1.length > arr2.length ? 1 : -1;
    }
}