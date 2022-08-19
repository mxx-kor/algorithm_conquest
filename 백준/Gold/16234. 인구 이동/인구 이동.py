import sys
input = sys.stdin.readline
from collections import deque

n, l, r = map(int, input().split())
graph = [list(map(int, input().split())) for _ in range(n)]

dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]

def bfs(a, b):
    q = deque()
    temp = []
    q.append((a, b))
    temp.append((a, b))
    while q:
        x, y = q.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < n and 0 <= ny < n and visited[nx][ny] == 0:
                # 국경선을 공유하는 두 나라의 인구 차이가 L명 이상, R명 이하라면, 두 나라가 공유하는 국경선을 오늘 하루 동안 연다.
                if l <= abs(graph[nx][ny] - graph[x][y]) <= r:
                    visited[nx][ny] = 1
                    q.append((nx, ny))
                    temp.append((nx, ny))
    return temp


ans = 0
while True:
    visited = [[0] * n for _ in range(n)]
    flag = 0
    for i in range(n):
        for j in range(n):
            if visited[i][j] == 0:
                visited[i][j] = 1
                country = bfs(i, j)
                if len(country) > 1:
                    flag = 1
                    num = sum([graph[x][y] for x, y in country]) // len(country)
                    for x, y in country:
                        graph[x][y] = num

    if flag == 0:
        break
    ans += 1
print(ans)