function solution(arr, k) {
    for(let i = 0; i < arr.length; i++) {
        arr[i] = k % 2 === 0 ? arr[i] + k : arr[i] * k;
    }
    return arr;
}