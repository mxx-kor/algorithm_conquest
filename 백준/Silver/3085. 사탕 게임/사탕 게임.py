def row():
    global cnt
    for k in range(n):
        cntRow = 1
        for l in range(n - 1):
            if arr[k][l] == arr[k][l + 1]:
                cntRow += 1
                cnt = max(cnt, cntRow)
            else:
                cntRow = 1

def column():
    global cnt
    for k in range(n):
        cntCol = 1
        for l in range(n - 1):
            if arr[l][k] == arr[l + 1][k]:
                cntCol += 1
                cnt = max(cnt, cntCol)
            else:
                cntCol = 1


n = int(input())
arr = [list(input()) for _ in range(n)]
cnt = 0

for i in range(n):
    for j in range(n - 1):
        if arr[i][j] != arr[i][j + 1]:
            arr[i][j], arr[i][j + 1] = arr[i][j + 1],  arr[i][j]
            row()
            column()
            arr[i][j + 1], arr[i][j] = arr[i][j], arr[i][j + 1]
        if arr[j][i] != arr[j + 1][i]:
            arr[j][i], arr[j + 1][i] = arr[j + 1][i], arr[j][i]
            row()
            column()
            arr[j + 1][i], arr[j][i] = arr[j][i], arr[j + 1][i]

print(cnt)