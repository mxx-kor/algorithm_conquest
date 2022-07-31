n, m = map(int, input().split())
dict = {}
arr = []
for _ in range(n):
    dict[input()] = 1
for _ in range(m):
    a = input()
    if a in dict:
        arr.append(a)

print(len(arr))
for i in sorted(arr):
    print(i)