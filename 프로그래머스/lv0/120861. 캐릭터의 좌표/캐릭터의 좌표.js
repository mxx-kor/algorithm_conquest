function solution(keyinput, board) {
    const ans = [0, 0];
    const max = [parseInt(board[0] / 2), parseInt(board[1] / 2)]
    keyinput.map((key) => {
        switch (key) {
            case "up":
                const up = ans[1] + 1
                if (up > max[1]) return
                ans[1] = up
                break
            case "down":
                const down = ans[1] - 1
                if (down < -max[1]) return
                ans[1] = down
                break
            case "left":
                const left = ans[0] - 1
                if (left < -max[0]) return
                ans[0] = left
                break
            case "right":
                const right = ans[0] + 1
                if (right > max[0]) return
                ans[0] = right
                break
        }
    })
    return ans;
}