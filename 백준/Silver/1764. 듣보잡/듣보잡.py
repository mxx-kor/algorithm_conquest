n, m = map(int, input().split())
arr1 = set()
arr2 = set()

for _ in range(n):
    arr1.add(input())
for _ in range(m):
    arr2.add(input())

ans = sorted(list(arr1 & arr2))

print(len(ans))
for i in ans:
    print(i)