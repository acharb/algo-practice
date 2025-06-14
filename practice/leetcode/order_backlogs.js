// https://leetcode.com/problems/number-of-orders-in-the-backlog/description/

// You are given a 2D integer array orders, where each orders[i] = [pricei, amounti, orderTypei]
// denotes that amounti orders have been placed of type orderTypei at the price pricei. The orderTypei is:

//     0 if it is a batch of buy orders, or
//     1 if it is a batch of sell orders.

// Note that orders[i] represents a batch of amounti independent orders with the same price
// and order type. All orders represented by orders[i] will be placed before all orders
// represented by orders[i+1] for all valid i.

// There is a backlog that consists of orders that have not been executed. The backlog is
// initially empty. When an order is placed, the following happens:

//     If the order is a buy order, you look at the sell order with the smallest price in the
//          backlog. If that sell order's price is smaller than or equal to the current buy
//          order's price, they will match and be executed, and that sell order will be removed
//          from the backlog. Else, the buy order is added to the backlog.
//     Vice versa, if the order is a sell order, you look at the buy order with the largest
//          price in the backlog. If that buy order's price is larger than or equal to
//          the current sell order's price, they will match and be executed, and that buy order
//          will be removed from the backlog. Else, the sell order is added to the backlog.

// Return the total amount of orders in the backlog after placing all the orders from the input.
//  Since this number can be large, return it modulo 109 + 7.

// Alec Keys
// - remembering that a new buy order will take a lower amount (wants cheap)
//      A new sell order will take higher (wants expensive)

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

    // [[price, amount]]
    // buybacklog: []
    // sellbacklog: [[15,5]]

    // O(logN)
    bubbleUp(i) {
        if (i === 0) return;
        const parentI = Math.floor((i - 1) / 2);
        if (this.data[i][0] < this.data[parentI][0]) {
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

        if (
            leftI < this.data.length &&
            this.data[leftI][0] < this.data[minI][0]
        ) {
            minI = leftI;
        }
        if (
            rightI < this.data.length &&
            this.data[rightI][0] < this.data[minI][0]
        ) {
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

class MaxHeap {
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
        if (this.data[i][0] > this.data[parentI][0]) {
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

        let maxI = i;

        if (
            leftI < this.data.length &&
            this.data[leftI][0] > this.data[maxI][0]
        ) {
            maxI = leftI;
        }
        if (
            rightI < this.data.length &&
            this.data[rightI][0] > this.data[maxI][0]
        ) {
            maxI = rightI;
        }

        if (maxI !== i) {
            const hold = this.data[i];
            this.data[i] = this.data[maxI];
            this.data[maxI] = hold;
            this.bubbleDown(maxI);
        }
    }
}

// [[price, amount]]
// buybacklog: []
// sellbacklog: [[15,5]]

// Need to adjust it, so that if you fill all the orders from one batch, you have to check the next batch

// O(NlogN) time; N = number of orders
// O(N) space
const getNumOfBacklogs = (orders) => {
    const buyBackLog = new MaxHeap();
    const sellBackLog = new MinHeap();

    for (const order of orders) {
        console.log(`order:`, order);
        console.log(`buyBackLog:`, buyBackLog.data);
        console.log(`sellBackLog:`, sellBackLog.data);
        console.log(`\n\n`);

        // buy order batch
        if (order[2] === 0) {
            if (!sellBackLog.size()) {
                buyBackLog.enqueue([order[0], order[1]]);
                continue;
            }

            let ordersToFill = order[1];

            while (ordersToFill > 0) {
                const curSellOrder = sellBackLog.peak();

                if (!curSellOrder) {
                    buyBackLog.enqueue([order[0], ordersToFill]);
                    break;
                }

                if (curSellOrder[0] <= order[0]) {
                    if (ordersToFill > curSellOrder[1]) {
                        ordersToFill -= curSellOrder[1];
                        sellBackLog.dequeue();
                    } else if (ordersToFill == curSellOrder[1]) {
                        sellBackLog.dequeue();
                        break;
                    } else {
                        curSellOrder[1] -= ordersToFill;
                        break;
                    }
                } else {
                    buyBackLog.enqueue([order[0], ordersToFill]);
                    break;
                }
            }
        } else {
            if (!buyBackLog.size()) {
                sellBackLog.enqueue([order[0], order[1]]);
                continue;
            }

            let ordersToFill = order[1];

            while (ordersToFill > 0) {
                const curBuyOrder = buyBackLog.peak();

                if (!curBuyOrder) {
                    sellBackLog.enqueue([order[0], ordersToFill]);
                    break;
                }

                if (curBuyOrder[0] >= order[0]) {
                    if (ordersToFill > curBuyOrder[1]) {
                        ordersToFill -= curBuyOrder[1];
                        buyBackLog.dequeue();
                    } else if (ordersToFill == curBuyOrder[1]) {
                        buyBackLog.dequeue();
                        break;
                    } else {
                        curBuyOrder[1] -= ordersToFill;
                        break;
                    }
                } else {
                    sellBackLog.enqueue([order[0], ordersToFill]);
                    break;
                }
            }
        }
    }

    console.log(`buyBackLog:`, buyBackLog.data);
    console.log(`sellBackLog:`, sellBackLog.data);

    let backlogCount = 0;
    for (const buy of buyBackLog.data) {
        backlogCount += buy[1];
    }
    for (const sell of sellBackLog.data) {
        backlogCount += sell[1];
    }

    return backlogCount % (Math.pow(10, 9) + 7);
};

// const orders = [
//     [10, 5, 0],
//     [15, 2, 1],
//     [25, 1, 1],
//     [30, 4, 0],
// ];

// console.log(getNumOfBacklogs(orders));

// const orders2 = [
//     [7, 1000000000, 1],
//     [15, 3, 0],
//     [5, 999999995, 0],
//     [5, 1, 1],
// ];
// console.log(getNumOfBacklogs(orders2));

// const orders3 = [
//     [1, 29, 1],
//     [22, 7, 1],
//     [24, 1, 0],
//     [25, 15, 1],
//     [18, 8, 1],
//     [8, 22, 0],
//     [25, 15, 1],
//     [30, 1, 1],
//     [27, 30, 0],
// ];
// console.log(getNumOfBacklogs(orders3));

const orders4 = [
    [16, 4, 0],
    [10, 13, 1],
    [14, 26, 0],
    [9, 4, 1],
    [29, 24, 0],
    [20, 14, 0],
    [8, 1, 1],
    [5, 2, 0],
];
console.log(getNumOfBacklogs(orders4));

// new buy order -> look at backlog, if sell order price is <= buy order price,
// then match and executed
// Q - at sell order price or buy order price? matters?

// new sell order -> look at backlong, if buy offer is >= then sell offer,
// then match and execute

// possible solution:
// you have two queues. Buy backlog is a max queue. Sell backlog is a min queue.
// when a new order comes in, compare price with first element of opposite queue
// if matched, then remove both (O(logn) for queue bubble down / up)
// if not matched, add to its queue (O(logn) for queue bubble down / up)

// keep going return the queue length of both at the end

// const h = new MaxHeap();

// h.enqueue([10, 5]);
// h.enqueue([15, 1]);
// h.enqueue([5, 8]);
// h.enqueue([25, 8]);
// h.enqueue([2, 8]);
// console.log(h.data);

// const minH = new MinHeap();

// minH.enqueue([10, 5]);
// minH.enqueue([15, 1]);
// minH.enqueue([5, 8]);
// minH.enqueue([25, 8]);
// minH.enqueue([2, 8]);
// console.log(minH.data);
