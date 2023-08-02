function solution(arr, a) {
    let answer = '';
    for(let i of arr) {
        if (!i.includes(a)) {
            answer += i;    
        }
    }
    return answer;
}