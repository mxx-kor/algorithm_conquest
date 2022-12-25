function solution(s) {
    const dict = {}
    s.split("").map(el => dict[el] ? dict[el] += 1 : dict[el] = 1)
    return Object.entries(dict).map(el => el[1] === 1 && el[0]).filter(el => el !== false).sort().join("")
}