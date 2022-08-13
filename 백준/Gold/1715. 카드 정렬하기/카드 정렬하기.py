import sys
import heapq
input = sys.stdin.readline

n = int(input())
deck = []
for _ in range(n):
    heapq.heappush(deck, int(input()))

if len(deck) == 1:
    print(0)
else:
    answer = 0
    while len(deck) > 1:
        min1 = heapq.heappop(deck)
        min2 = heapq.heappop(deck)
        answer += min1 + min2
        heapq.heappush(deck, min1 + min2)

    print(answer)