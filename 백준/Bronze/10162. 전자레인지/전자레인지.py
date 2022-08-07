t = int(input())
arr = [300, 60, 10]
ans = [0] * 3

if t % 10 != 0:
    print(-1)
else:
    for i in range(0, len(arr)):
        ans[i] = t // arr[i]
        t %= arr[i]

    print(*ans)