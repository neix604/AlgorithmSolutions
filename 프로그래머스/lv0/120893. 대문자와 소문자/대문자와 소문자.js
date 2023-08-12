function solution(str) {
    return [...str].map(x => x.toUpperCase() == x ? x.toLowerCase() : x.toUpperCase()).join('');
}