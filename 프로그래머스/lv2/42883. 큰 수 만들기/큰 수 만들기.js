function solution(number, k) {
    let stack = [number[0]];
    for (let i = 1; i < number.length; i++) {
        while (k > 0 && stack[stack.length - 1] < number[i]) {
            stack.pop();
            k --;
        }
        stack.push(number[i])
    }
    stack.splice(stack.length-k, k);
    return stack.join("");
}