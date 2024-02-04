class MinHeap {
    constructor() {
        this.heap = []
    }
    
    size() {
        return this.heap.length;
    }
    
    peek() {
        return this.heap[0]
    }
    
    swap(firstIndex, secondIndex) {
        [this.heap[firstIndex], this.heap[secondIndex]] = [this.heap[secondIndex], this.heap[firstIndex]]
    }
    
    add(value) {
        this.heap.push(value)
        this.bubbleUp();
    }
    
    poll() {
        if (this.heap.length === 1) {
            return this.heap.pop()
        }
        
        const value = this.heap[0]
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return value
    }

    bubbleUp() {
        let currentIndex = this.heap.length - 1
        let parentIndex = Math.floor((currentIndex - 1) / 2)
        while (this.heap[parentIndex] && this.heap[currentIndex] < this.heap[parentIndex]) {
            this.swap(currentIndex, parentIndex)
            currentIndex = parentIndex
            parentIndex = Math.floor((currentIndex - 1)/ 2)
        }
    }
    
    bubbleDown() {
        let index = 0
        let leftIndex = index * 2 + 1;
        let rightIndex = index * 2 + 2;
        
        while ((this.heap[leftIndex] && this.heap[leftIndex] < this.heap[index]) || (this.heap[rightIndex] && this.heap[rightIndex] < this.heap[index])) {
            let smallerIndex = leftIndex
            if (this.heap[rightIndex] && this.heap[rightIndex] < this.heap[smallerIndex]) {
                smallerIndex = rightIndex
            }

            this.swap(index, smallerIndex)
            index = smallerIndex
            leftIndex = index * 2 + 1;
            rightIndex = index * 2 + 2;
        }
    }
}

function solution(scoville, K) {
    let count = 0
    const minHeap = new MinHeap();
    
    scoville.forEach((s) => {
        minHeap.add(s)
    })
    
    while (minHeap.size() >= 2 && minHeap.peek() < K) {
        const first = minHeap.poll()
        const second = minHeap.poll()
        const mixedScoville = first + second * 2;
        minHeap.add(mixedScoville);
        count++;
    }
    
    return minHeap.peek() >= K ? count : -1
}