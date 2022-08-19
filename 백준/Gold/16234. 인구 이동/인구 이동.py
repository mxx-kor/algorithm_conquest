import sys
input = sys.stdin.readline
from collections import deque

n, l, r = map(int, input().split())
graph = [list(map(int, input().split())) for _ in range(n)]
dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]

def bfs(x, y, index):
    q = deque()
    q.append((x, y))
    summary = graph[x][y]
    cnt = 1
    unitied = []
    unitied.append((x, y))
    union[x][y] = index

    while q:
        x, y = q.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if (0 <= nx < n) and (0 <= ny < n) and (union[nx][ny] == -1):
                if l <= (abs(graph[nx][ny] - graph[x][y])) <= r:
                    q.append((nx, ny))
                    union[nx][ny] = index
                    summary += graph[nx][ny]
                    cnt += 1
                    unitied.append((nx, ny))
    for i, j in unitied:
        graph[i][j] = summary // cnt
    return cnt

ans = 0

while True:
    union = [[-1] * n for _ in range(n)]
    index = 0
    for i in range(n):
        for j in range(n):
            if union[i][j] == -1:
                bfs(i, j, index)
                index += 1

    if index == n * n:
        break
    ans += 1

print(ans)