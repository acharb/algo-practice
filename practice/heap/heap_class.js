class MinHeap {
    constructor() {
        this.data = [];
    }

    size() {
        return this.data.length;
    }

    peak() {
        return this.data[0];
    }

    // O(logN)
    enqueue(node) {
        this.data.push(node);
        this.bubbleUp(this.data.length - 1);
    }

    // O(logN)
    dequeue() {
        const min = this.data[0];
        this.data[0] = this.data[this.data.length - 1];
        this.data.pop();
        this.bubbleDown(0);
        return min;
    }

    // O(logN)
    bubbleUp(i) {
        if (i === 0) return;
        const parentI = Math.floor((i - 1) / 2);
        if (this.data[i] < this.data[parentI]) {
            const hold = this.data[parentI];
            this.data[parentI] = this.data[i];
            this.data[i] = hold;
            this.bubbleUp(parentI);
        }
    }

    // O(logN)
    bubbleDown(i) {
        const leftI = 2 * i + 1;
        const rightI = 2 * i + 2;

        let minI = i;

        if (leftI < this.data.length && this.data[leftI] < this.data[minI]) {
            minI = leftI;
        }
        if (rightI < this.data.length && this.data[rightI] < this.data[minI]) {
            minI = rightI;
        }

        if (minI !== i) {
            const hold = this.data[i];
            this.data[i] = this.data[minI];
            this.data[minI] = hold;
            this.bubbleDown(minI);
        }
    }
}

const h = new MinHeap();

h.push(5);
console.log(h.data);
h.push(2);
console.log(h.data);
h.push(10);
console.log(h.data);
h.push(3);
console.log(h.data);
h.push(15);
console.log(h.data);
h.push(18);
console.log(h.data);
h.push(1);
console.log(h.data);
