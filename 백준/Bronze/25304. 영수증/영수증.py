total = int(input())
n = int(input())
cal = 0
for _ in range(n):
    a, b = map(int, input().split())
    cal += a * b

if total == cal:
    print("Yes")
else:
    print("No")