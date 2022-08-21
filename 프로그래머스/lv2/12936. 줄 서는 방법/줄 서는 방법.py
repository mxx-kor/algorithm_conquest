import math
def solution(n, k):
    answer = []
    arr = [i for i in range(1, n + 1)]
    while(arr):
        answer.append(arr.pop((k-1) // math.factorial(n-1)))
        k = k % math.factorial(n-1)
        n -= 1
    return answer