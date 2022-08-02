from itertools import product

def solution(word):
    arr = ['A', 'E', 'I', 'O', 'U']
    data = []
    for i in range(1, 6):
        for j in list(product(arr, repeat = i)):
            data.append(''.join(j))
    data.sort()
    return data.index(word) + 1