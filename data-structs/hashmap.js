class HashMap {
  constructor() {
    this.data = {};
  }

  // O(1)
  add(key, value) {
    this.data[key] = value;
  }

  // O(1)
  remove(key) {
    delete this.data[key];
  }

  // Remember - this doesn't work. Getters have no arguments
  // get value(key){
  //   return this.data[key]
  // }

  // O(1)
  getVal(key) {
    return this.data[key];
  }

  get size() {
    return Object.keys(this.data).length;
  }
}

const h = new HashMap();

h.add("a", 7);

console.log(h.size);

console.log(h.getVal("a"));

h.remove("a");

console.log(h.getVal("a"));

/////////////////// Built in func ////////////////////////

const m = new Map();

m.set("a", 5);

m.set("b", 6);

console.log(m.size);

for (const [k, v] of m) {
  console.log({ k });
}
