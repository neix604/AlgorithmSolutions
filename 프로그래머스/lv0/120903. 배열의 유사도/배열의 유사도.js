function solution(s1, s2) {
    let answer = 0;
    
    for(let i in s1) {
        for(let j in s2) {
            if(s1[i] === s2[j]) {
                answer++;
            }
        }
    }
    
    return answer;
}