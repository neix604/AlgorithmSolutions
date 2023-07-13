function solution(arr) {
    let answer = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 50) {
            answer[i] = arr[i] % 2 === 0 ? arr[i] / 2 : arr[i];
        } else {
            answer[i] = arr[i] % 2 === 0 ? arr[i] : arr[i] * 2;
        }
    }
    return answer;
}