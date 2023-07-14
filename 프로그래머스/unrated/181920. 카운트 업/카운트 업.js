function solution(start, end) {
    let answer = [start];
    for(let i = 1; i <= end - start; i++) {
        answer[i] = answer[0] + i;
    }
    return answer;
}