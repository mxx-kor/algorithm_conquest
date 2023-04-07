function solution(players, callings) {
    let result = new Map();
    
    players.map((player, idx) => {
        result.set(player, idx)
    })
    
    callings.map(call => {
        const pos = result.get(call)
        const ahead = players[pos - 1]
        
        players[pos] = ahead
        players[pos - 1] = call
        
        result.set(call, pos - 1)
        result.set(ahead, pos)
    })
    
    return players
}