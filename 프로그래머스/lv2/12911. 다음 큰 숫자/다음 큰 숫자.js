function solution(n) {
    const bin = n.toString(2).split("1").length - 1
    while (true) {
        n ++
        let counter = n.toString(2).split("1").length - 1
        if (counter === bin) {
            return n
        }
    }
}