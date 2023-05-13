function solution(n,a,b)
{
    let cnt = 1
    let [firstPlayer, secondPlayer] = [Math.ceil(a / 2), Math.ceil(b / 2)]
    while(firstPlayer !== secondPlayer) {
        firstPlayer = Math.ceil(firstPlayer / 2)
        secondPlayer = Math.ceil(secondPlayer / 2)
        cnt++
    }
    return cnt;
}