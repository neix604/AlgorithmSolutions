function solution(my_string, n) {
    let answer = '';
    let arr = [...my_string];
    
    for(i = 0; i < my_string.length; i++) {
        for(j = 0; j < n; j++) {
            answer += arr[i];
        }
    }
    
    return answer;
}