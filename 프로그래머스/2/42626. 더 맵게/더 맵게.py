import heapq

def solution(scoville, K):
    count = 0
    minHeap = []
    for s in scoville:
        heapq.heappush(minHeap, s)
    
    while minHeap[0] < K:
        try:
            heapq.heappush(minHeap, heapq.heappop(minHeap) + heapq.heappop(minHeap) * 2)
        except IndexError:
            return -1
        count += 1
        
    return count