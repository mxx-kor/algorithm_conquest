function solution(genres, plays) {
    let answer = [];
    // 2, 3번 조건 위한 객체
    let obj1 = new Map();
    // 1번 조건 위한 객체
    let obj2 = new Map();

    genres.forEach((g, i) => {
        obj1[g] ? obj1[g].push([i, plays[i]]) : obj1[g] = [[i, plays[i]]]
        obj2[g] = obj2[g] ? obj2[g] + plays[i] : plays[i]
    })
    
    //이제 정렬 
    // 1번 조건 정렬
    obj2 = Object.entries(obj2).sort((a,b)=>b[1]-a[1])
    // 2번, 3번 조건 정렬
    obj2.forEach((g, i) => {
        obj1[g[0]].sort((a, b) => b[1] - a[1])
        if (obj1[g[0]].length > 1) {
          obj1[g[0]] = obj1[g[0]].splice(0, 2)  
        } 
        for (let i of obj1[g[0]]) {
          answer.push(i[0])   
        }
    })
    
    
    return answer
}