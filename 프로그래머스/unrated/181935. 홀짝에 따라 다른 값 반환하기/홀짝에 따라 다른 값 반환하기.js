function solution(n) {
    let sum = 0;
    if (n % 2 === 0) {
        for (let i = 0; i <= n; i += 2) {
            sum += Math.pow(i, 2);
        }
    } else {
        for (let i = 1; i <= n; i += 2) {
            sum += i;
        }
    }
    
    return sum;
}