 const getCombinations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]); 

    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1); 
      const combinations = getCombinations(rest, selectNumber - 1); 
      const attached = combinations.map((el) => [fixed, ...el]); 
      results.push(...attached); 
    });
     
    return results;
}
 
function solution(number) {
    var answer = 0;
    for (let i of getCombinations(number, 3)) {
        if (i.reduce((acc, curr) => acc + curr, 0) === 0) answer++
    }
    return answer
}