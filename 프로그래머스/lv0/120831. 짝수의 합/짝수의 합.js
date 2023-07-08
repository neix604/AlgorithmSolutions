function solution(n) {
    let answer = 0;
    for(i = 1; i <= ~~(n / 2); i++) {
        answer += i * 2;
    }
    return answer;
}