function solution(dot) {
    let ch = dot[0] * dot[1] > 0;
    return dot[0] > 0 ? (ch ? 1 : 4) : (ch ? 3 : 2);
}