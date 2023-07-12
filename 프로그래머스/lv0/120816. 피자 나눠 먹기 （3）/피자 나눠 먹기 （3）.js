function solution(slice, n) {
    return ~~[n / slice] + (n % slice === 0 ? 0 : 1);
}