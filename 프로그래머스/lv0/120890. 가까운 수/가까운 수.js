function solution(array, n) {
    array = array.sort((a, b) => a - b)
    const tmp = array.map((el) => Math.abs(el - n))
    return array[tmp.indexOf(Math.min(...tmp))];
}