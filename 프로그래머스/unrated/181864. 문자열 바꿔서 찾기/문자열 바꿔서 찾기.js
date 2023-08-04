function solution(str, pat) {
    return [...str].map(x => x === 'A' ? 'B' : 'A').join('').includes(pat) ? 1 : 0;
}