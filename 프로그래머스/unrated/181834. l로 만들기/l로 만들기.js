function solution(str) {
    return [...str].map(x => x.charCodeAt() < 108 ? 'l' : x).join('');
}