function solution(land) {
    for (let i = 0; i < land.length; i++) {
        for (let j = 0; j < land[i].length; j++) {
            if (i === 0) {
                continue;
            } else {
                let arr = land[i - 1].slice();
                arr[j] = 0;
                land[i][j] += Math.max(...arr);
            }
        }
    }

    return Math.max(...land.at(-1));
}