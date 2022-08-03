import sys
input = sys.stdin.readline

def binary_search(target, data):
    start = 0
    end = n - 1

    while start <= end:
        mid = (start + end) // 2

        if data[mid] == target:
            return cnt[target]
        elif data[mid] < target:
            start = mid + 1
        else:
            end = mid - 1

    return 0

n = int(input())
cards = sorted(list(map(int, input().split())))
m = int(input())
arr = list(map(int, input().split()))

cnt = {}
for card in cards:
    if card in cnt:
        cnt[card] += 1
    else:
        cnt[card] = 1

for i in arr:
    a = binary_search(i, cards)
    print(a, end=' ')