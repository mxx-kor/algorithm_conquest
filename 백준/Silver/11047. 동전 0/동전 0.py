import sys
input = sys.stdin.readline

n, k = map(int, input().split())
coins = [int(input()) for _ in range(n)]
cnt = 0
index = n - 1

while k > 0:
    if coins[index] > k:
        index -= 1
    else:
        cnt += k//coins[index]
        k %= coins[index]
print(cnt)