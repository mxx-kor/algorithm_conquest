function solution(array) {
    const hash = new Map();
    let max = [0, 0];
    array.map(el => hash.set(el, (hash.get(el) || 0) + 1));
    for (const [key, v] of hash.entries()) {
        if (max[1] < v) {
            max = [key, v]
        } 
    }
    return [...hash].filter((el) => el[1] === max[1]).length === 1 ? max[0] : -1
}