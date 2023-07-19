function solution(num_list) {
    let times = 1;
    let sumSquare = 0;
    
    for(let i = 0; i < num_list.length; i++) {
        times *= num_list[i];
        sumSquare += num_list[i];
    }
    
    return times > sumSquare * sumSquare ? 0 : 1;
}