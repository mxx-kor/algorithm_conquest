n = sorted(list(input()), reverse = True)
ans = -1
max_num = int(''.join(n))

if max_num % 30 == 0:
    ans = max_num
print(ans)