word = input()
alphabet_list = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
ans = []
for i in alphabet_list:
    if i in word:
        ans.append(word.count(i))
    else:
        ans.append(0)

print(*ans)