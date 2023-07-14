function solution(start, end) {
    var answer = [start];
    for(let i = 1; i <=start - end; i++) {
        answer[i] = answer[0] - i;
    }
    return answer;
}