import sys
input = sys.stdin.readline

n, m = map(int, input().split())
r, c, d = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(n)]
visited = [[0] * m for _ in range(n)]

dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]

visited[r][c] = 1
answer = 1

while True:
    flag = 0
    for _ in range(4):
        nx = r + dx[(d+3) % 4]
        ny = c + dy[(d+3) % 4]
        d = (d+3) % 4
        if 0 <= nx < n and 0 <= ny < m and arr[nx][ny] == 0:
            if visited[nx][ny] == 0:
                visited[nx][ny] = 1
                answer += 1
                r = nx
                c = ny
                flag = 1
                break
    if flag == 0:
        if arr[r - dx[d]][c - dy[d]] == 1:
            print(answer)
            break
        else:
            r = r - dx[d]
            c = c - dy[d]