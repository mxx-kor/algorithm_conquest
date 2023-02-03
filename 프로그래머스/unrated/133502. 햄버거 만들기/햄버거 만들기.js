function solution(ingredient) {
    let ans = 0;
    let stack = [];
    
    ingredient.map(v => {
        stack.push(v);

        if (stack.length >= 4) {
            const isBurger = stack.slice(-4).join('');
            if (isBurger === "1231") {
                stack.splice(stack.length - 4, 4)
                ans += 1
            }
        }
    })
    return ans;
}