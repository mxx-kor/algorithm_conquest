function solution(priorities, location) {
    var answer = 0;
    var firstEl = 0;
    
    while(true){
        firstEl = priorities.shift();
        
        if( firstEl < Math.max(...priorities) ){
            priorities.push(firstEl);
            if (location === 0) location = priorities.length-1;
            else location--;
        } else {
            answer++;
            if (location === 0) break;
            else location--;
        }
        
    }

    return answer;
}