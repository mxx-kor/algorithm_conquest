function solution(numbers) {
    const answer = Array(numbers.length).fill(-1)
    const stack = []
    numbers.forEach((number, idx) => {
        while(stack.length && numbers[stack.at(-1)] < number) {
            answer[stack.pop()] = number
        }
        stack.push(idx)
    })
    return answer;
}