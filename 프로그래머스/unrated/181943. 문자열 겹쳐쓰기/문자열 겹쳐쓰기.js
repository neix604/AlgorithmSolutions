function solution(my_string, overwrite_string, s) {
    let arr1 = [...my_string];
    let arr2 = [...overwrite_string];
    
    for(i = s; i < overwrite_string.length + s; i++) {
        arr1[i] = arr2[i - s];
    }
    
    let answer = arr1.join('');
    return answer;
}