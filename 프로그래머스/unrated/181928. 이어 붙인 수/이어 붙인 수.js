function solution(arr) {
    let even = '';
    let odd = '';
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 == 0) {
            even += arr[i];
        } else {
            odd += arr[i];
        }
    }
    return ~~(even) + ~~(odd);
}