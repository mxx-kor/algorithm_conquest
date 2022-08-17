plates = input()
ans = 10
for i in range(1, len(plates)):
    if (plates[i-1] == plates[i]):
        ans += 5
    else:
        ans += 10

print(ans)