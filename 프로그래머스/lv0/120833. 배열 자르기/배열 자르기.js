function solution(numbers, num1, num2) {
    let arr = [];
    
    for(i = num1; i <= num2; i++) {
        arr[i - num1] = numbers[i];   
    }
    
    return arr;
}