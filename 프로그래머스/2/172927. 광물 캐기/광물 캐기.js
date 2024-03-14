function solution(picks, minerals) {
    let ans = 0;
    const copiedPicks = [...picks]
    const sumPicks = picks.reduce((prev, curr) => curr + prev, 0);
    const slicedMinerals = minerals.slice(0, sumPicks * 5);

    const countedMinerals = slicedMinerals.reduce((prev, curr, idx) => {
        const index = Math.floor(idx / 5);
        if (!prev[index]) prev[index] = [0, 0, 0];
        switch (curr) {
            case "diamond":
                prev[index][0]++
                break
            case "iron":
                prev[index][1]++;
                break
            case "stone":
                prev[index][2]++;
                break
            default:
                console.log("not a prepared mineral")
        }
        return prev
    }, []).sort((a, b) => b[0] - a[0] || b[1] - a[1])
    
    countedMinerals.forEach(([diamond, iron, stone]) => {
        if (copiedPicks[0]) {
            ans += diamond + iron + stone
            copiedPicks[0]--
            return
        }
        if (copiedPicks[1]) {
            ans += diamond * 5 + iron + stone
            copiedPicks[1]--
            return
        } 
        if (copiedPicks[2]) {
            ans += diamond * 25 + iron * 5 + stone
            copiedPicks[2]--
            return
        }
    })
    
    return ans
}