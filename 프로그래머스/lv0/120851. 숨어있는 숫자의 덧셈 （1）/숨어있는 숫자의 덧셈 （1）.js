function solution(my_string) {
    let arr = [];
    arr = [...my_string.replace(/[^0-9]/g, "")].map(Number);
    let answer = arr.reduce(function add(sum, currValue) {
        return sum + currValue;
    }, 0);
    return answer;
}