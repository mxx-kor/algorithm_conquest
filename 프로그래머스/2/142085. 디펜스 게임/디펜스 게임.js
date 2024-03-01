class MaxHeap {
    constructor() {
        this.heap = []
    }
    
    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]]
    }
    
    total() {
        return this.heap.reduce((acc, curr) => acc + curr, 0)
    }
    
    push(value) {
        this.heap.push(value)
        this.heapifyUp()
    }
    
    pop() {
        if (!this.heap.length) return
        
        const max = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.heapifyDown();   
        }
        
        return max
    }
    
    heapifyUp() {
        let currentIndex = this.heap.length - 1
        let parentIndex = Math.floor((currentIndex - 1) / 2)
        
        while (currentIndex > 0 && this.heap[currentIndex] > this.heap[parentIndex]) {
            this.swap(currentIndex, parentIndex)
            currentIndex = parentIndex
            parentIndex = Math.floor((currentIndex - 1) / 2)
        }
    }
    
    heapifyDown() {
        let currentIndex = 0
        let leftIndex = 2 * currentIndex + 1;
        let rightIndex = 2 * currentIndex + 2;
        
        while (leftIndex < this.heap.length) {
            let largerChildIndex = leftIndex;
            
            if (rightIndex < this.heap.length && this.heap[rightIndex] > this.heap[leftIndex]) {
                largerChildIndex = rightIndex
            }
            
            if (this.heap[currentIndex] < this.heap[largerChildIndex]) {
                this.swap(currentIndex, largerChildIndex)
                currentIndex = largerChildIndex
                leftIndex = 2 * currentIndex + 1
                rightIndex = 2 * currentIndex + 2
            } else {
                break;
            }
        }
    }
}

function solution(n, k, enemy) {
    let ans = 0
    const maxHeap = new MaxHeap();
    for (let i = 0; i < enemy.length; i++) {
        maxHeap.push(enemy[i])
        
        n -= enemy[i]
        if (n < 0) {
            if (k) {
                n += maxHeap.pop()
                k--
            } else break
        }
        
        ans++
    }
    
    return ans
}