dices = list(map(int, input().split()))
ans = 0
for i in dices:
    if dices.count(i) == 3:
        ans = (10000 + (i * 1000))
        break
    elif dices.count(i) == 2:
        ans = (1000 + (i * 100))
        break

if ans == 0:
    print(max(dices) * 100)
else:
    print(ans)