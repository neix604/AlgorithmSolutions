function solution(n) {
    let arr = [...n.toString()];
    let sum = 0;
    
    for(i = 0; i < arr.length; i ++) {
        sum += parseInt(arr[i]);
    }
    
    return sum;
}