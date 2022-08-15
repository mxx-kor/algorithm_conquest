n = input()
length_n = len(n) - 1
cnt = 0
for i in range(length_n):
    cnt += 9 * (10 ** i) * (i + 1)
cnt += ((int(n) - (10 ** length_n)) + 1) * (length_n + 1)

print(cnt)