function solution(numbers) {
    let num1 = 0;
    let num2 = 0;
    
    for(i = 0; i < numbers.length; i++) {
        if(numbers[i] > num1) {
            num2 = num1;
            num1 = numbers[i];
        } else if(numbers[i] > num2) {
            num2 = numbers[i];
        }
    }
    
    return num1 * num2;
}