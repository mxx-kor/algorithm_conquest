function solution(sides) {
    sorted_arr = sides.sort((a, b) => a - b) 
    return sorted_arr[2] < sorted_arr[0] + sorted_arr[1] ? 1 : 2
}