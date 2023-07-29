function solution(num_str) {
    let num = [...num_str].map(Number);
    return num.reduce((sum, num) => sum + num);
}