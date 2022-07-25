arr = ['a', 'e', 'i', 'o', 'u']

while True:
    cnt = 0
    s = input().lower()
    if s == "#":
        break
    else:
        for i in s:
            for j in arr:
                if i == j:
                    cnt += 1

        print(cnt)