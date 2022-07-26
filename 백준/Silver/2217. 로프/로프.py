n = int(input())
arr = [int(input()) for _ in range(n)]
arr.sort(reverse=True)

for i in range(0, n):
    arr[i] = arr[i] * (i + 1)

print(max(arr))