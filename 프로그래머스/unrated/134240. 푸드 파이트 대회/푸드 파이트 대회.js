function solution(food) {
    let answer = ''
    for (let i = 1; i < food.length; i++) {
        answer += i.toString().repeat(parseInt(food[i] / 2))
    }
    return answer + "0" + answer.split('').reverse().join('')
}