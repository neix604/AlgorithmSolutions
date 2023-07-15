function solution(num_list) {
    if(num_list.length >= 11) {
        for(let i = 1; i < num_list.length; i++) {
            num_list[0] += num_list[i];
        }
    } else {
        for(let i = 1; i < num_list.length; i++) {
            num_list[0] *= num_list[i];
    }
    }
    
    return num_list[0];
}