function solution(numbers) {
    let nums = numbers.map(num => num.toString()).sort((a, b)=> (b+a) - (a+b)).join('');
    return nums[0] === '0' ? "0" : nums;
}