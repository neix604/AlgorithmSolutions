function solution(cipher, code) {
    return [...cipher].filter(x => !(x.indexOf(x) % code == 0);
}