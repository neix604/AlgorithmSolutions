function solution(str) {
    return [...str].filter(x => x % 1 === 0).map(x => x * 1).sort();
}