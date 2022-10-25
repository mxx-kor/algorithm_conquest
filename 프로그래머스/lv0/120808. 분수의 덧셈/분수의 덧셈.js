const getGCD = (num1, num2) => (num2 > 0 ? getGCD(num2, num1 % num2) : num1);
function solution(denum1, num1, denum2, num2) {
    let son = num1*denum2 + num2*denum1
    let mom = num1 * num2;
    const gcd = getGCD(son, mom)
    return [son / gcd, mom / gcd]
}