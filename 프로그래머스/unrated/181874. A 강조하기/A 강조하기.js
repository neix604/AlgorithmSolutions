function solution(str) {
    return [...str.toUpperCase()].map(x => x == 'A' ? x : x.toLowerCase()).join('');
}