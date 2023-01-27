function solution(quiz) {
    return quiz.map(el => {
        const [a, b] = el.split("=")
        if (eval(a) === Number(b.trim())) return "O"
        else return "X"
    });
}