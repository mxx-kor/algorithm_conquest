from collections import deque
n = int(input())
cards = deque([i for i in range(1, n + 1)])
popped_card = []

while (len(cards) > 1):
    popped_card.append(cards.popleft())
    cards.append(cards.popleft())

print(*popped_card, cards[0])