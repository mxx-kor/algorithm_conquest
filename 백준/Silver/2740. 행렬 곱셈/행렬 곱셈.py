N, M = map(int, input().split())
arr1 = [list(map(int, input().split())) for _ in range(N)]
M, K = map(int, input().split())
arr2 = [list(map(int, input().split())) for _ in range(M)]

ans = [[0 for _ in range(K)] for _ in range(N)]

for n in range(N):
    for k in range(K):
        for m in range(M):
            ans[n][k] += arr1[n][m] * arr2[m][k]

for i in ans:
    for j in i:
        print(j, end=" ")
    print()