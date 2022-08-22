import sys
input = sys.stdin.readline

n, m, b = map(int, input().split())
graph = [list(map(int, input().split())) for _ in range(n)]
ans = sys.maxsize

for i in range(257):
    over, lack = 0, 0
    for j in range(n):
        for k in range(m):
            if i < graph[j][k]:
                over += graph[j][k] - i
            else:
                lack += i - graph[j][k]

    if over + b >= lack:
        if (over * 2) + lack <= ans:
            ans = (over * 2) + lack
            floor = i

print(ans, floor)