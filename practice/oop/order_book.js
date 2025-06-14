// taken from Chat GPT

// 🧠 Order Book System – OOP Design Prompt

// Prompt:

// Design an order book system to match buy and sell orders for a single asset.

// Each order has:

//     id: unique identifier

//     price: price per unit

//     amount: number of units

//     type: either "buy" or "sell"

// Requirements:

//     Add Order

//         Add a new order to the order book.

//         Automatically match it with existing orders if possible.

//         For a buy order, match with the lowest-price sell orders.

//         For a sell order, match with the highest-price buy orders.

//         Matching should occur as much as possible (partial matches allowed).

//         Remove or reduce the existing order’s amount accordingly.

//     Query Backlog

//         Return the list of all remaining unmatched orders, grouped into buy and sell,
//          sorted by price (descending for buy, ascending for sell).

// const orderBook = new OrderBook();

// orderBook.addOrder({ id: 1, price: 100, amount: 5, type: 'buy' });
// orderBook.addOrder({ id: 2, price: 105, amount: 2, type: 'sell' });
// orderBook.addOrder({ id: 3, price: 100, amount: 3, type: 'sell' });

// orderBook.getBacklog(); // => remaining unmatched orders

// Soln:
//  basically the same as the leetcode question
// create a class OrderBook
// addOrder
//  store orders in two queues, a minHeap (sell orders) and a maxHeap (buy orders)
//  for a new order, check the smallest orders in the opposite backlog. Update the heaps accordingly.
// query backlong
//  return the unmatched orders
