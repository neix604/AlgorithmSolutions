function solution(num_list) {
    const i = num_list.length - 1;
    num_list.push(num_list[i] > num_list[i - 1] ? num_list[i] - num_list[i - 1] : num_list[i] * 2)
    return num_list;
}