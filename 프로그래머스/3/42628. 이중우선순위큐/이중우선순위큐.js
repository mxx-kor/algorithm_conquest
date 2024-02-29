class MinHeap {
    constructor() {
        this.heap = [null]
    }
    
    swap(a, b) {
        const temp = this.heap[a]
        this.heap[a] = this.heap[b]
        this.heap[b] = temp
    }
    
    push(value) {
        this.heap.push(value);
        let currentIndex = this.heap.length - 1;
        let parentIndex = Math.floor(currentIndex / 2);

        while (parentIndex !== 0 && this.heap[parentIndex] > value) {
          this.swap(parentIndex, currentIndex)
          currentIndex = parentIndex;
          parentIndex = Math.floor(currentIndex / 2);
        }
    }
    
    pop(isTopPop) {
        if (this.heap.length === 1) return;
        if (this.heap.length === 2) return this.heap.pop();
        if (!isTopPop) {
            const parentIndex = Math.floor((this.heap.length - 1) / 2)
            const lastLeaf = this.heap.slice(parentIndex);
            const max = Math.max(...lastLeaf)
            this.swap(parentIndex + lastLeaf.indexOf(max), this.heap.length - 1);
            return this.heap.pop()
        }
        
        const returnValue = this.heap[1];
        this.heap[1] = this.heap.pop();

        let currentIndex = 1;
        let leftIndex = 2;
        let rightIndex = 3;
        
        while (
          this.heap[currentIndex] > this.heap[leftIndex] ||
          this.heap[currentIndex] > this.heap[rightIndex]
        ) {
          if (this.heap[leftIndex] > this.heap[rightIndex]) {
            this.swap(currentIndex, rightIndex)
            currentIndex = rightIndex;
          } else {
            this.swap(currentIndex, leftIndex)
            currentIndex = leftIndex;
          }
          leftIndex = currentIndex * 2;
          rightIndex = currentIndex * 2 + 1;
        }

        return returnValue;
    }
    
    remove() {
        if (this.heap.length === 1) return;
        if (this.heap.length === 2) return this.heap.pop();
        const parentIndex = Math.floor((this.heap.length - 1) / 2);
        const lastLeaf = this.heap.slice(parentIndex);
        const max = Math.max(...lastLeaf);
        this.swap(parentIndex + lastLeaf.indexOf(max), this.heap.length - 1);
        return this.heap.pop();
    }
    
    result() {
        if (this.heap.length === 1) return [0, 0];
        if (this.heap.length === 2) return [this.heap[1] ,this.heap[1]];
        const parentIndex = Math.floor((this.heap.length - 1) / 2);
        const lastLeaf = this.heap.slice(parentIndex);
        const max = Math.max(...lastLeaf);
        return [max, this.heap[1]];
    }
    
}

function solution(operations) {
    const minHeap = new MinHeap();
    
    operations.forEach((operation) => {
        const [command, value] = operation.split(" ").map((v, i) => i === 1 ? Number(v) : v)
        if (command === "I") {
            minHeap.push(value)
        } else {
            minHeap.pop(value < 0)
        }
        console.log(minHeap)
    })
    
    return minHeap.result()
}