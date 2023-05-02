function solution(name, yearning, photo) {
    const hash = new Map()
    name.map((person, idx) => hash.set(person, yearning[idx]))
    const ans = photo.map((pic) => {
        let total = 0
        pic.map((el) => {
            total += hash.get(el) ? hash.get(el) : 0
        })
        return total
    })
    return ans
}