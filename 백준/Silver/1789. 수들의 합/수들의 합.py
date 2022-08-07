n = int(input())
ans = 0
num = 0

for i in range(1, n+1):
    ans += i
    num += 1
    if ans > n:
        num -= 1
        break

print(num)