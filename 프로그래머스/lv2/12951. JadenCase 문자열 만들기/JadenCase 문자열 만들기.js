function solution(s) {
    s = s.toLowerCase()
    let arr = s.split(" ")
    arr = arr.map((e) => e.substring(0, 1).toUpperCase()+e.substring(1))
    return arr.join(" ");
}