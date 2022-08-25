def onAndOff(num):
    if arr[num] == 0:
        arr[num] = 1
    else:
        arr[num] = 0

n = int(input())
arr = list(map(int, input().split()))
students = int(input())
for _ in range(students):
    a, b = map(int, input().split())
    if a == 1:
        num1 = b
        while num1-1 < n:
            onAndOff(num1 - 1)
            num1 += b
    else:
        num2 = b - 1
        k = 1
        while (num2 - k) >= 0 and (num2 + k) < n:
            if arr[num2 - k] != arr[num2 + k]:
                break
            else:
                onAndOff(num2 - k)
                onAndOff(num2 + k)
            k += 1
        onAndOff(num2)

for i in range(0, n, 20):
    print(*arr[i:i+20])