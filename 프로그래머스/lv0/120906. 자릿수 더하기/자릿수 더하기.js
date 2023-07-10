function solution(n) {
    var answer = [];
    answer = [...n.toString()].map(Number);
    for(i = 1; i < answer.length; i++) {
        answer[0] += answer[i];
    }
    return answer[0];
}