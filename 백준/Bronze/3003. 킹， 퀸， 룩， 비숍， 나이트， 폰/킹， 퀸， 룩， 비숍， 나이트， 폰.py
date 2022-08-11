chess = [1, 1, 2, 2, 2, 8]
arr = list(map(int, input().split()))
ans = []
for i in range(0, len(arr)):
    ans.append(chess[i] - arr[i])

print(*ans)